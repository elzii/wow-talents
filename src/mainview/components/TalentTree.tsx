import React, { useEffect, useState } from "react";
import { calculateTreePoints, findClassTalentLinks } from "../utils";

import { Arrow } from "./Arrow";
import { TalentIcon } from "./TalentIcon";
import { ClassData, TalentTreeData, TalentPointState, TalentData } from "../../types";
import { TalentLink } from "./TalentLink/TalentLink";

export const NullComponent = () => {
    return null;
}

interface Props {
    classData: ClassData;
    treeData: TalentTreeData;
    points: TalentPointState;
    onSpend: (talentId: number) => void;
    onRefund: (talentId: number) => void;
    onReset: (treeName: string) => void;
    totalPoints: number;
    index: number;
    maxPoints: number;
    setTooltipData: (data: { talent: TalentData; rank: number; position: { x: number; y: number }; treeName: string; treePoints: number } | null) => void;
}
export const TalentTree = ({ treeData, points, onSpend, onRefund, onReset, totalPoints, maxPoints, setTooltipData, classData, index }: Props) => {
    const treePoints = calculateTreePoints(treeData, points);
    const [treeElement, setTreeElement] = useState(null);
    const [treeBG, setTreeBG] = useState('');

    useEffect(() => {
        import(`../../assets/icons/bg/${classData.name?.toLowerCase()}_${index}.jpg`)
            .then(m => setTreeBG(m.default))
            .catch(err => console.error(err));
    }, [classData.name, index]);

    // const canSpend = (talent) => {
    //     if (totalPoints >= maxPoints) return false;
    //     if (treePoints < talent.position[0] * 5) return false;
    //     if (!talent.dependency) return true;

    //     const dependencyRank = points[talent.dependency.id] || 0;

    //     return dependencyRank >= talent.dependency.rank;
    // };
    const canSpend = (talent) => {
        if (totalPoints >= maxPoints) {
            return false;
        }

        const requiredTreePoints = talent.minPointsRequired;
        if (treePoints < requiredTreePoints) {
            return false;
        }

        if (talent.requirements?.talentId) {
            const dependencyRank = points[talent.requirements.talentId] || 0;
            if (dependencyRank < talent.requirements.talentRank) {
                return false;
            }
        }

        return true;
    };

    // const characterClass: string = classData.name?.toLowerCase()
    // const characterClassBGImage = import(`../../assets/bg/${characterClass}_${index}.jpg`).then(m => m.default)
    return (
        <div className="flex-1 p-4 bg-gray-900 rounded-lg shadow-inner min-w-[320px] relative">
            <div className="bg" style={{
                position: 'absolute',
                backgroundImage: `url(${treeBG})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: 0.32,
                width: '100%',
                height: '100%',
                top: 0, bottom: 0, left: 0, right: 0,
            }} />
            <div className="flex justify-between items-center mb-4" style={{ backgroundImage: `url(../../assets/bg/${treeData.name})`, backgroundSize: 'cover' }}>
                <div className="flex items-center">
                    <h2 className="text-xl font-bold text-white">{treeData.name}</h2>
                    <span className="text-xl font-bold text-yellow-400 ml-2">{treePoints}</span>
                </div>
                <button
                    onClick={() => onReset(treeData.name)}
                    className="text-red-500 hover:text-red-700 font-bold text-3xl px-2 leading-none rounded-full transition-colors duration-200"
                    style={{ zIndex: 10 }}
                    aria-label={`Reset ${treeData.name} talents`}
                >
                    &times;
                </button>
            </div>
            <div className="relative" ref={setTreeElement}>
                <div
                    className="grid grid-cols-4 grid-rows-7 gap-x-4 gap-y-6"
                    style={{
                        justifyItems: 'center !important'
                    }}
                >
                    {treeData.talents.map((talent, i) => {
                        const talentLinks = findClassTalentLinks(classData);
                        const isLinkedTalent = talent.talentLink ? true : false;
                        const linkedTalentTo = talent.talentLink ? treeData.talents.find(t => t.name === talent.talentLink) : {};
                        const linkedTalentFrom = talent.talentLink ? treeData.talents.find(t => !!talent.talentLink) : {};
                        // const linkedTalentElProps = {}
                        // const linkedTalentElProps = {
                        //     direction: "D",
                        //     startX: talent.x,
                        //     startY: talent.y,
                        //     // @ts-ignore
                        //     endX: linkedTalent.x ?? 0,
                        //     // @ts-ignore
                        //     endY: linkedTalent.y ?? 0,
                        //     talentLinkName: talent.talentLink
                        // };

                        const talentLinkMap = new Map()

                        // if (isLinkedTalent && linkedTalentFrom) {
                        //     talentLinkMap.set(talent.name, linkedTalentTo)
                        //     console.log('IS LINKED', talentLinks)
                        //     console.log('LINKED_FROM', linkedTalentFrom)
                        //     console.log('LINKED_TO', linkedTalentTo)
                        // }

                        if (talentLinkMap.size > 0) {
                            console.log('TALENTLINKMAP', talentLinkMap)
                        }
                        const linkedTalentElProps = {
                            direction: "D",
                            startX: talent.x,
                            startY: talent.y,
                            // @ts-ignore
                            endX: linkedTalentTo.x ?? 0,
                            // @ts-ignore
                            endY: linkedTalentTo.y ?? 0,
                            talentLinkName: talent.talentLink
                        }
                        return <div
                            className="relative"
                            key={`${talent.id}-${talent.name}`}
                            data-talent-id={talent.id}
                            style={{ gridRow: talent.y + 1, gridColumn: talent.x + 1 }}
                            // style={{ gridRow: talent.position[0] + 1, gridColumn: talent.position[1] + 1 }}
                            onMouseEnter={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setTooltipData({ talent, rank: points[talent.id] || 0, position: { x: rect.left, y: rect.bottom }, treeName: treeData.name, treePoints });
                            }}
                            onMouseLeave={() => setTooltipData(null)}
                        >
                            <TalentIcon
                                talent={talent}
                                points={points}
                                onSpend={onSpend}
                                onRefund={onRefund}
                                canSpend={canSpend(talent)}
                                iconName={talent.iconName}
                            />
                            {isLinkedTalent && <TalentLink {...linkedTalentElProps} />}
                        </div>
                    })}
                </div>
                {treeElement && treeData.talents.map(talent => {
                    if (!talent.dependency) return null;
                    const fromTalent = treeData.talents.find(t => t.id === talent.dependency.id);
                    if (!fromTalent) return null;
                    return <Arrow key={`arrow-${fromTalent.id}-${talent.id}`} from={fromTalent} to={talent} treeElement={treeElement} />;

                })}
            </div>
        </div>
    );
};