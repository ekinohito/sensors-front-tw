import React from 'react';

export const Paper: React.FC<{className?: string}> = ({children, className=''}) => {
    return <div className={`shadow-xl bg-white rounded-xl border p-4 ${className}`}>
        {children}
    </div>
}
