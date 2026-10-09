import React from 'react';
import './TalentLink.css';

// Grid: 
//   Gap: [16,24]
//   Cell: [78,64]
//   RowsCols: [0, 8]

interface Props {
  startX: number;
  startY: number;
  direction: "U" | "D" | "L" | "R" | string;
  endX: number;
  endY: number;
  talentLinkName?: string;
}

const gridDimensions = new Map([
  ["gap", [16, 24]],
  ["cell", [78, 64]],
  ["size", [4, 8]],
]);

type LinkDirection = "U" | "D" | "L" | "R";
const linkStyles = (direction: LinkDirection, position: number = 0, height: number = 100) => {
  switch (direction) {
    case "D":
      if (position === 6) {
        return { height, transform: `translate3d(30px, calc(${gridDimensions.get('cell')[1] + gridDimensions.get('gap')[1]}px * ${position - 1}), 0)` };
      } else {
        return { height, transform: `translate3d(30px, calc(${gridDimensions.get('cell')[1] + gridDimensions.get('gap')[1]}px * ${position}), 0)` };
      }
    case "U":
      return { height, transform: `translate3d(30px, calc(${gridDimensions.get('cell')[1] + gridDimensions.get('gap')[1]}px * ${position}), 0)` };
    case "L":
      return { height, transform: `translate3d(calc(${gridDimensions.get('cell')[0] + gridDimensions.get('gap')[0]}px * ${position}), 30px, 0)` };
    case "R":
      return { height, transform: `translate3d(calc(${gridDimensions.get('cell')[0] + gridDimensions.get('gap')[0]}px * ${position}), 30px, 0)` };
    default:
      return { height, transform: `translate3d(30px, calc(${gridDimensions.get('cell')[1] + gridDimensions.get('gap')[1]}px * ${position}), 0)` };
  }
}

export const TalentLink: React.FC<Props> = ({ startX, startY, direction, endX, endY, talentLinkName }) => {
  const positionXY = (direction == "D" || direction == "U")
    ? endY - startY
    : (direction == "L" || direction == "R")
      ? endX - startX
      : 0;

  const className = `talent-link talent-link--x${startX} talent-link--y${startY} talent-link--len${length} talent-link--${direction}`;
  const linkHeight = Math.abs(endY - startY) > 2
    ? (gridDimensions.get('cell')[1]) * Math.abs(positionXY + 0)
    : (gridDimensions.get('cell')[1]) * Math.abs(positionXY + 1)
  const conditionalStyles = linkStyles(direction as LinkDirection, positionXY, linkHeight);


  console.log('LINKED HEIGHT', linkHeight)
  console.log('TALENTLINK', talentLinkName)
  console.log('CONDITIONALSTYLES', conditionalStyles)
  console.log('S[X,Y]', startX, startY)
  console.log('E[X,Y]', endX, endY)
  console.log('POSITIONXY', positionXY)
  return (
    <div className={className} style={{ ...conditionalStyles }}></div>
  );
};
