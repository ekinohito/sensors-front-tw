import React from 'react';

export const Paper: React.FC<{className?: string}> = ({children, className=''}) => {
    return <div className={`shadow-md bg-white rounded-md ${className}`}>
        {children}
    </div>
}
