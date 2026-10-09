import React, { useLayoutEffect, useRef, useState } from "react";
import { ClassData, TalentData, TalentPointState } from "../../types";
import { warriorData } from "../talents/classic/warrior";

export interface TooltipProps {
    classData: ClassData | any; // Replace with actual type
    talent: TalentData,
    rank: number;
    position: { x: number; y: number };
    treeName?: string;
    treePoints?: number;
    aboveCursor?: boolean;
}

export const Tooltip = ({ classData = warriorData, talent, rank, position, treeName, treePoints, aboveCursor }: TooltipProps) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useLayoutEffect(() => {
        if (tooltipRef.current) {
            const { width, height } = tooltipRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let x = position.x + 72;
            let y = aboveCursor ? position.y - height - 10 : position.y + 20;

            // Check if tooltip overflows the bottom of the viewport
            if (aboveCursor && y + height > viewportHeight) {
                y = position.y - height - 10; // Flip above cursor
            }

            // Check if tooltip overflows the right of the viewport
            if (x + width > viewportWidth) {
                x = position.x - width - 0; // Flip to left of cursor
                y = position.y - height - 10; // Flip above cursor
            }

            // Ensure strictly within bounds (top/left safety)
            if (y < 0) y = 10;
            if (x < 0) x = 10;

            setCoords({ x, y });
        }
    }, [position, talent, rank]);

    if (!talent || !classData) return null;

    const nextRank = rank < talent.maxRank;
    const depTalent = talent.requirements ? classData.talentTrees.flatMap((t: any) => t.talents).find((t: any) => t.id === talent.requirements?.talentId) : null;
    const REGEXP_1 = new RegExp(/(<br\/?>)+/gm);
    globalThis.RE = REGEXP_1
    return (
        <div
            ref={tooltipRef}
            className="absolute bg-black bg-opacity-80 border-2 border-gray-500 text-white p-4 rounded-lg shadow-lg max-w-xs z-50 pointer-events-none"
            style={{ left: coords.x, top: coords.y }}
        >
            <h3 className="text-lg font-bold text-yellow-300">{talent.name}</h3>
            {rank > 0 ? (
                <>
                    <p className="text-sm text-gray-300">Rank: {rank}/{talent.maxRank}</p>
                    <hr className="my-2 border-gray-600" />
                    {/* <p className="text-green-400" dangerouslySetInnerHTML={{ __html: talent.descriptions[rank - 1]?.replaceAll(/(<br\/?>)+/gm, "<br />") }} style={{ whiteSpace: "pre-wrap" }}></p> */}
                    {
                        talent.descriptions[rank - 1]?.split(REGEXP_1).map((line: string, index: number) => (
                            <p key={index} className="text-green-400">{line.replaceAll(REGEXP_1, "")}</p>
                        ))
                    }
                </>
            ) : (
                <p className="text-sm text-gray-300">Rank: 0/{talent.maxRank}</p>
            )}

            {nextRank && (
                <>
                    <hr className="my-2 border-gray-600" />
                    <p className="text-sm text-gray-400">Next rank:</p>
                    {/* <p className="text-green-400">{talent.descriptions[rank]}</p> */}
                    {
                        talent.descriptions[rank]?.split(REGEXP_1).map((line: string, index: number) => (
                            <p key={index} className="text-green-400">{line.replaceAll(REGEXP_1, "")}</p>
                        ))
                    }
                </>
            )}
            {depTalent && talent.requirements && (
                <p className="mt-2 text-red-400 text-sm">Requires {talent.requirements.talentRank} point(s) in {depTalent.name}</p>
            )}
            {treeName && treePoints !== undefined && talent.minPointsRequired > treePoints && (
                <p className="mt-2 text-red-400 text-sm">Requires {talent.minPointsRequired} number of points spent in {treeName}</p>
            )}
        </div>
    );
};

