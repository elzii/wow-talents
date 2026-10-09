import React, { useEffect, useState } from 'react';

export const Arrow = ({ from, to, treeElement }) => {
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [endPos, setEndPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!treeElement) return;

        const fromElement = treeElement.querySelector(`[data-talent-id="${from.id}"]`);
        const toElement = treeElement.querySelector(`[data-talent-id="${to.id}"]`);

        if (fromElement && toElement) {
            const treeRect = treeElement.getBoundingClientRect();
            const fromRect = fromElement.getBoundingClientRect();
            const toRect = toElement.getBoundingClientRect();

            setStartPos({ x: fromRect.left - treeRect.left + fromRect.width / 2, y: fromRect.top - treeRect.top + fromRect.height });
            setEndPos({ x: toRect.left - treeRect.left + toRect.width / 2, y: toRect.top - treeRect.top });
        }
    }, [from, to, treeElement]);

    if (startPos.x === 0) return null;

    const midY = startPos.y + 15;
    const path = `M ${startPos.x},${startPos.y} L ${startPos.x},${midY} L ${endPos.x},${midY} L ${endPos.x},${endPos.y}`;

    return (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
            <path d={path} stroke="#4A5568" strokeWidth="3" fill="none" />
            <path d={`M ${endPos.x-5},${endPos.y-5} L ${endPos.x},${endPos.y} L ${endPos.x+5},${endPos.y-5}`} stroke="#4A5568" strokeWidth="3" fill="none" />
        </svg>
    );
};