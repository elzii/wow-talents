import React, { useState, useEffect } from "react";

export interface ColorPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentColor: string;
  onSelectColor: (color: string) => void;
  treeName: string;
}

export const ColorPickerModal: React.FC<ColorPickerModalProps> = ({
  isOpen,
  onClose,
  currentColor,
  onSelectColor,
  treeName
}) => {
  // Parse initial rgba or hex
  const [r, setR] = useState(15);
  const [g, setG] = useState(15);
  const [b, setB] = useState(15);
  const [a, setA] = useState(0.95);

  useEffect(() => {
    if (currentColor) {
      const match = currentColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match) {
        setR(parseInt(match[1], 10));
        setG(parseInt(match[2], 10));
        setB(parseInt(match[3], 10));
        setA(match[4] !== undefined ? parseFloat(match[4]) : 1);
      }
    }
  }, [currentColor, isOpen]);

  if (!isOpen) return null;

  const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  const rgbaString = `rgba(${r}, ${g}, ${b}, ${a})`;

  const presetColors = [
    "rgba(10, 10, 10, 0.95)",
    "rgba(25, 20, 30, 0.95)",
    "rgba(35, 15, 20, 0.95)",
    "rgba(15, 25, 35, 0.95)",
    "rgba(15, 35, 25, 0.95)",
    "rgba(35, 30, 15, 0.95)",
    "rgba(20, 20, 25, 0.95)",
    "rgba(40, 20, 40, 0.95)"
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-white/20 rounded-2xl shadow-2xl p-5 w-full max-w-sm flex flex-col gap-4 text-white relative animate-in fade-in duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-gray-800 pb-2">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <span>Change Tree Color</span>
            <span className="text-xs text-yellow-400 font-mono">({treeName})</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold leading-none px-1"
          >
            &times;
          </button>
        </div>

        {/* Color preview box */}
        <div
          className="h-20 rounded-xl border border-white/30 flex items-center justify-center font-mono text-xs shadow-inner"
          style={{ backgroundColor: rgbaString }}
        >
          <span className="bg-black/60 px-2 py-1 rounded text-white font-bold">
            {rgbaString}
          </span>
        </div>

        {/* Native HTML5 Color wheel / input */}
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={hexColor}
            onChange={(e) => {
              const hex = e.target.value;
              const rVal = parseInt(hex.slice(1, 3), 16);
              const gVal = parseInt(hex.slice(3, 5), 16);
              const bVal = parseInt(hex.slice(5, 7), 16);
              setR(rVal);
              setG(gVal);
              setB(bVal);
            }}
            className="w-12 h-12 rounded-lg bg-transparent cursor-pointer border border-white/30 p-1"
          />
          <div className="flex-1 text-xs text-gray-300">
            Click swatch to open native color wheel picker, or adjust RGBA sliders below:
          </div>
        </div>

        {/* Sliders */}
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-4 text-red-400 font-bold">R</span>
            <input
              type="range"
              min="0"
              max="255"
              value={r}
              onChange={(e) => setR(parseInt(e.target.value, 10))}
              className="flex-1 accent-red-500 cursor-pointer"
            />
            <span className="w-8 text-right font-mono">{r}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-green-400 font-bold">G</span>
            <input
              type="range"
              min="0"
              max="255"
              value={g}
              onChange={(e) => setG(parseInt(e.target.value, 10))}
              className="flex-1 accent-green-500 cursor-pointer"
            />
            <span className="w-8 text-right font-mono">{g}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-blue-400 font-bold">B</span>
            <input
              type="range"
              min="0"
              max="255"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value, 10))}
              className="flex-1 accent-blue-500 cursor-pointer"
            />
            <span className="w-8 text-right font-mono">{b}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-gray-400 font-bold">A</span>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
              className="flex-1 accent-gray-400 cursor-pointer"
            />
            <span className="w-8 text-right font-mono">{a.toFixed(2)}</span>
          </div>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-800">
          {presetColors.map((pc, idx) => (
            <button
              key={idx}
              onClick={() => {
                const match = pc.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
                if (match) {
                  setR(parseInt(match[1], 10));
                  setG(parseInt(match[2], 10));
                  setB(parseInt(match[3], 10));
                  setA(parseFloat(match[4]));
                }
              }}
              style={{ backgroundColor: pc }}
              className="w-7 h-7 rounded border border-white/20 hover:scale-110 transition shadow"
              title={pc}
            />
          ))}
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-gray-800">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs text-gray-300 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSelectColor(rgbaString);
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold shadow-lg"
          >
            Apply Color
          </button>
        </div>
      </div>
    </div>
  );
};
