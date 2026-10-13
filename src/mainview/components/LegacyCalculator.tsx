import React, { useState, useMemo } from "react";
import legacyData from "../talents/forever/legacyCalculatorData.json";
import { LegacyCalculatorData, LegacyTree, LegacyNode } from "../../types";

const data = legacyData as LegacyCalculatorData;

export interface LegacyCalculatorProps {
  onPointsChange?: (totalSpent: number) => void;
}

export const LegacyCalculator: React.FC<LegacyCalculatorProps> = ({ onPointsChange }) => {
  // Store spent points per node: { [nodeId: number]: number }
  const [points, setPoints] = useState<Record<number, number>>({});
  const [hoveredNode, setHoveredNode] = useState<{
    node: LegacyNode;
    tree: LegacyTree;
    rect: DOMRect;
  } | null>(null);

  // Total spent across all trees
  const totalSpent = useMemo(() => {
    return Object.values(points).reduce((sum, val) => sum + val, 0);
  }, [points]);

  // Points spent per tree
  const treeSpentMap = useMemo(() => {
    const map: Record<number, number> = {};
    data.trees.forEach((tree) => {
      let sum = 0;
      tree.nodes.forEach((node) => {
        sum += points[node.id] || 0;
      });
      map[tree.id] = sum;
    });
    return map;
  }, [points]);

  const maxPoints = data.cap || 16;

  // Check if a node is spendable
  const canSpend = (node: LegacyNode, tree: LegacyTree): boolean => {
    if (node.locked || node.name === "Unknown") return false;
    const currentRank = points[node.id] || 0;
    if (currentRank >= node.maxRanks) return false;
    if (totalSpent >= maxPoints) return false;

    // Check required points spent in this tree
    const currentTreeSpent = treeSpentMap[tree.id] || 0;
    if (currentTreeSpent < node.requiredSpent) return false;

    // Check parent edge prerequisites
    const incomingEdge = tree.edges.find((e) => e.to === node.id);
    if (incomingEdge) {
      const parentNode = tree.nodes.find((n) => n.id === incomingEdge.from);
      if (parentNode) {
        const parentRank = points[parentNode.id] || 0;
        // Requires parent to be maxed
        if (parentRank < parentNode.maxRanks) return false;
      }
    }

    return true;
  };

  // Check if a node can be refunded
  const canRefund = (node: LegacyNode, tree: LegacyTree): boolean => {
    const currentRank = points[node.id] || 0;
    if (currentRank <= 0) return false;

    // If any child depends on this parent node
    const outgoingEdge = tree.edges.find((e) => e.from === node.id);
    if (outgoingEdge) {
      const childRank = points[outgoingEdge.to] || 0;
      if (childRank > 0) return false;
    }

    // Check if refunding violates any higher tier requiredSpent in this tree
    const currentTreeSpent = treeSpentMap[tree.id] || 0;
    const newTreeSpent = currentTreeSpent - 1;

    for (const otherNode of tree.nodes) {
      const otherRank = points[otherNode.id] || 0;
      if (otherRank > 0 && otherNode.requiredSpent > newTreeSpent) {
        return false;
      }
    }

    return true;
  };

  const handleSpend = (node: LegacyNode, tree: LegacyTree) => {
    if (!canSpend(node, tree)) return;
    setPoints((prev) => {
      const next = { ...prev, [node.id]: (prev[node.id] || 0) + 1 };
      return next;
    });
  };

  const handleRefund = (node: LegacyNode, tree: LegacyTree) => {
    if (!canRefund(node, tree)) return;
    setPoints((prev) => {
      const current = prev[node.id] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[node.id];
        return next;
      }
      return { ...prev, [node.id]: current - 1 };
    });
  };

  const handleResetTree = (tree: LegacyTree) => {
    setPoints((prev) => {
      const next = { ...prev };
      tree.nodes.forEach((n) => {
        delete next[n.id];
      });
      return next;
    });
  };

  const handleResetAll = () => {
    setPoints({});
  };

  return (
    <div className="w-full mt-10 p-6 bg-neutral-950/90 border border-gray-800 rounded-2xl shadow-2xl flex flex-col gap-6 select-none relative backdrop-blur">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide flex items-center gap-2">
              <span className="text-yellow-400">⚡</span>
              Legacy Points Calculator
            </h2>
            <span className="text-xs uppercase font-bold tracking-wider bg-yellow-950/60 text-yellow-300 border border-yellow-700/60 px-2.5 py-0.5 rounded-full">
              WoW Forever
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Spend account-wide Legacy Points on profession enhancements, leveling perks, and utility.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Points Counter */}
          <div className="flex items-center gap-2 bg-neutral-900 border border-gray-700/80 px-4 py-2 rounded-xl shadow-inner">
            <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">
              Points Left:
            </span>
            <span className="text-lg font-black text-yellow-400">
              {maxPoints - totalSpent}
            </span>
            <span className="text-xs text-gray-500 font-semibold">/ {maxPoints}</span>
          </div>

          <button
            onClick={handleResetAll}
            disabled={totalSpent === 0}
            className="px-3.5 py-2 text-xs font-bold rounded-xl bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:border-red-500 hover:bg-red-950/30 transition disabled:opacity-40 disabled:pointer-events-none"
          >
            Reset All
          </button>
        </div>
      </div>

      {/* 3 Trees Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        {data.trees.map((tree) => {
          const treeSpent = treeSpentMap[tree.id] || 0;

          return (
            <div
              key={tree.id}
              className="p-5 bg-neutral-900/90 border border-gray-800 rounded-xl shadow-xl flex flex-col relative overflow-hidden backdrop-blur min-w-[320px]"
            >
              {/* Tree Title & Blurb */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-2.5 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                    {tree.name}
                    <span className="text-xs font-extrabold text-yellow-400 bg-yellow-950/40 px-2 py-0.5 rounded border border-yellow-700/50">
                      {treeSpent} pts
                    </span>
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">{tree.blurb}</p>
                </div>

                <button
                  onClick={() => handleResetTree(tree)}
                  disabled={treeSpent === 0}
                  className="text-gray-400 hover:text-red-400 font-bold text-lg px-2 py-0.5 rounded hover:bg-red-950/40 transition disabled:opacity-30 disabled:pointer-events-none leading-none"
                  title={`Reset ${tree.name}`}
                >
                  &times;
                </button>
              </div>

              {/* 4x4 Grid Container */}
              <div className="relative flex-1 flex justify-center items-center py-2 min-h-[300px]">
                {/* SVG Arrow Connectors */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  style={{ overflow: "visible" }}
                >
                  <defs>
                    <marker
                      id={`arrow-${tree.id}`}
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#eab308" />
                    </marker>
                    <marker
                      id={`arrow-dim-${tree.id}`}
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#4b5563" />
                    </marker>
                  </defs>

                  {tree.edges.map((edge) => {
                    const fromNode = tree.nodes.find((n) => n.id === edge.from);
                    const toNode = tree.nodes.find((n) => n.id === edge.to);
                    if (!fromNode || !toNode) return null;

                    const fromCol = Math.round((fromNode.x - 2400) / 750);
                    const fromRow = Math.round((fromNode.y - 1050) / 750);
                    const toCol = Math.round((toNode.x - 2400) / 750);
                    const toRow = Math.round((toNode.y - 1050) / 750);

                    // Cell positioning calculation in %:
                    // 4 columns: 0, 1, 2, 3 -> (col + 0.5) * 25%
                    // 4 rows: 0, 1, 2, 3 -> (row + 0.5) * 25%
                    const x1 = `${(fromCol + 0.5) * 25}%`;
                    const y1 = `${(fromRow + 0.5) * 25}%`;
                    const x2 = `${(toCol + 0.5) * 25}%`;
                    const y2 = `${(toRow + 0.5) * 25}%`;

                    const isFromMaxed = (points[fromNode.id] || 0) >= fromNode.maxRanks;

                    return (
                      <line
                        key={`${edge.from}-${edge.to}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isFromMaxed ? "#eab308" : "#4b5563"}
                        strokeWidth="2.5"
                        strokeDasharray={isFromMaxed ? undefined : "3 3"}
                        markerEnd={`url(#${isFromMaxed ? `arrow-${tree.id}` : `arrow-dim-${tree.id}`})`}
                      />
                    );
                  })}
                </svg>

                {/* Grid */}
                <div
                  className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full justify-items-center items-center z-10"
                  style={{
                    gridTemplateColumns: "repeat(4, 56px)",
                    gridTemplateRows: "repeat(4, 56px)",
                    justifyContent: "center"
                  }}
                >
                  {tree.nodes.map((node) => {
                    const col = Math.round((node.x - 2400) / 750);
                    const row = Math.round((node.y - 1050) / 750);
                    const rank = points[node.id] || 0;
                    const isMax = rank === node.maxRanks;
                    const spendable = canSpend(node, tree);
                    const isUnknown = node.name === "Unknown" || node.locked;

                    let borderClass = "border-gray-700 bg-gray-900";
                    if (isMax) borderClass = "border-yellow-400 bg-yellow-950/20 shadow-md shadow-yellow-500/20";
                    else if (rank > 0) borderClass = "border-yellow-500 bg-gray-900";
                    else if (spendable) borderClass = "border-green-500 hover:border-green-400 shadow-md shadow-green-500/20";
                    else if (isUnknown) borderClass = "border-gray-800 bg-gray-950/60 opacity-40";
                    else borderClass = "border-gray-700/80 bg-gray-900/60 opacity-60";

                    const iconUrl = `assets/icons/all/${node.icon.toLowerCase()}.png`;

                    return (
                      <div
                        key={node.id}
                        style={{
                          gridColumn: col + 1,
                          gridRow: row + 1
                        }}
                        className="relative w-14 h-14 flex items-center justify-center group"
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredNode({ node, tree, rect });
                        }}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => handleSpend(node, tree)}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          handleRefund(node, tree);
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-md border-2 flex items-center justify-center transition-all duration-150 overflow-hidden cursor-pointer ${borderClass} ${
                            spendable || rank > 0 ? "hover:scale-105 active:scale-95" : ""
                          }`}
                        >
                          {isUnknown ? (
                            <span className="text-gray-500 font-bold font-mono text-lg">?</span>
                          ) : (
                            <img
                              src={iconUrl}
                              alt={node.name}
                              className="w-full h-full object-cover pointer-events-none"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          )}
                        </div>

                        {/* Rank Badge */}
                        {!isUnknown && (
                          <div
                            className={`absolute -bottom-1 -right-1 min-w-[18px] h-4.5 px-1 bg-black/90 text-white rounded flex items-center justify-center text-[10px] font-bold border ${
                              isMax
                                ? "border-yellow-400 text-yellow-300"
                                : rank > 0
                                ? "border-green-400 text-green-300"
                                : "border-gray-700 text-gray-400"
                            }`}
                          >
                            {rank}/{node.maxRanks}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tree Footer Progress */}
              <div className="border-t border-gray-800/80 pt-2.5 mt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span>Tier unlocks: 5 pts, 10 pts</span>
                <span className="text-gray-500">Right-click to refund</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredNode && (
        <div
          className="fixed z-50 bg-gray-950/95 backdrop-blur border border-yellow-600/60 p-3.5 rounded-lg shadow-2xl max-w-sm text-white text-xs pointer-events-none transition-opacity duration-75 animate-in fade-in"
          style={{
            left: Math.max(10, Math.min(window.innerWidth - 320, hoveredNode.rect.right + 12)),
            top: Math.max(10, Math.min(window.innerHeight - 240, hoveredNode.rect.top))
          }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-gray-700/80 pb-1.5 mb-2">
            <h3 className="text-base font-bold text-yellow-300 leading-tight">
              {hoveredNode.node.name}
            </h3>
            <span className="text-[10px] uppercase tracking-wider bg-yellow-900/40 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-700/50">
              {hoveredNode.tree.name}
            </span>
          </div>

          <div className="text-xs text-gray-300 mb-2 font-medium">
            Rank {points[hoveredNode.node.id] || 0}/{hoveredNode.node.maxRanks}
          </div>

          {/* Current Rank Description */}
          {(() => {
            const rank = points[hoveredNode.node.id] || 0;
            const currentDesc = rank > 0 ? hoveredNode.node.ranks[rank - 1] : hoveredNode.node.ranks[0];
            const nextDesc = rank < hoveredNode.node.maxRanks ? hoveredNode.node.ranks[rank] : null;

            return (
              <div className="space-y-2">
                {currentDesc && (
                  <div className="text-xs text-green-300 leading-relaxed whitespace-pre-line mb-2">
                    {currentDesc}
                  </div>
                )}

                {rank < hoveredNode.node.maxRanks && nextDesc && (
                  <div className="pt-2 border-t border-gray-800">
                    <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1 font-semibold">
                      {rank === 0 ? "Description" : "Next Rank:"}
                    </p>
                    <p className="text-xs text-green-300 leading-relaxed whitespace-pre-line">
                      {nextDesc}
                    </p>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Required Points warning */}
          {(() => {
            const treeSpent = treeSpentMap[hoveredNode.tree.id] || 0;
            if (hoveredNode.node.requiredSpent > treeSpent) {
              return (
                <p className="mt-2 text-red-400 text-xs">
                  Requires {hoveredNode.node.requiredSpent} points in {hoveredNode.tree.name}
                </p>
              );
            }
            return null;
          })()}

          {/* Prerequisite edge warning */}
          {(() => {
            const incomingEdge = hoveredNode.tree.edges.find((e) => e.to === hoveredNode.node.id);
            if (incomingEdge) {
              const parentNode = hoveredNode.tree.nodes.find((n) => n.id === incomingEdge.from);
              if (parentNode) {
                const parentRank = points[parentNode.id] || 0;
                if (parentRank < parentNode.maxRanks) {
                  return (
                    <p className="mt-2 text-red-400 text-xs">
                      Requires {parentNode.maxRanks} pt(s) in {parentNode.name}
                    </p>
                  );
                }
              }
            }
            return null;
          })()}
        </div>
      )}
    </div>
  );
};
