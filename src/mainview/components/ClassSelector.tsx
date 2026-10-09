import React from 'react';
import { allClassesData, classBorderColors, classColors, classCoreColors, classFGColors } from '../talents/classic';
import { getClassIconByClassName } from '../utils';

export type availableClasses = keyof typeof allClassesData;

export interface ClassSelectorProps {
    // availableClasses: availableClasses[];
    availableClasses: string[];
    selectedClass: string;
    onSelectClass: (className: string) => void;
}

export const ClassSelector = ({ availableClasses, selectedClass, onSelectClass }: ClassSelectorProps) => {
    return (
        <div className="bg-black bg-opacity-20 p-4 rounded-t-lg flex justify-center items-center gap-4 mb-4">
            {availableClasses.map(className => {
                const bgImageURL = String(getClassIconByClassName(className));
                const coreClassColor = classCoreColors[className]
                const isSelected = selectedClass === className;
                const classTextColor = !isSelected ? classFGColors[className] : `text-white`;
                return <button
                    key={className}
                    onClick={() => onSelectClass(className)}
                    className={`relative w-32 h-16 rounded-lg transition-all duration-200 ${selectedClass === className ? classBorderColors[className] : `hover:ring-${classCoreColors[className]}`} ring-4 ring-transparent`}
                    aria-label={`Select ${className} class`}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderStyle: 'solid',
                        borderWidth: selectedClass === className ? '4px' : '0px',
                        // borderColor: 'red',
                        // backgroundColor: selectedClass === className ? classColors[className] : 'transparent',   
                        //     backgroundImage: `url(${bgImageURL})`,
                        //     backgroundSize: 'cover',
                        //     backgroundPosition: 'center',
                        //     backgroundRepeat: 'no-repeat',
                        //     filter: selectedClass === className ? 'none' : 'brightness(80%)'
                    }}
                >
                    <img src={getClassIconByClassName(className)} alt={`${className} icon`} className="w-full h-full object-cover rounded-lg transition-all" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        minWidth: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                        filter: selectedClass === className ? 'blur(2px) brightness(80%) grayscale(50%)' : 'blur(6px) brightness(50%) grayscale(70%)',
                    }} />
                    <div className={`w-full h-full rounded-lg flex items-center justify-center`}>
                        {/* <span className="text-4xl font-extrabold text-white-900 opacity-80" style={{
                            WebkitTextStrokeColor: 'black',
                            WebkitTextStrokeWidth: '1px'
                        }}>{className.charAt(0)}</span> */}
                    </div>
                    <span className={`absolute 
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-2xl
                    font-black
                    ${classTextColor}
                    `}
                        style={{
                            ...(selectedClass !== className ? { opacity: 0.64, textShadow: `2px 2px 4px rgba(0, 0, 0, 0.8)` } : { opacity: 1.0, textShadow: `2px 2px 4px rgba(0, 0, 0, 0.88)` }),
                        }}>
                        {className}
                    </span>
                </button>
            })}
        </div>
    );
};