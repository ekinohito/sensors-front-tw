import React from 'react';

interface AdaptiveColumnProps {
    className?: string,
    resetClassName: string,
    reset: boolean
}

export const AdaptiveLayout: React.FC<AdaptiveColumnProps> = ({reset, children, resetClassName, className=''}) => {
    const finalClass = [reset ? resetClassName : '', className].join(' ');
    return (
        <div className={finalClass}>
            {children}
        </div>
    )
}
