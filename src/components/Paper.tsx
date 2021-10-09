import React from 'react';

export const Paper: React.FC = ({children}) => {
    return <div className={`shadow-xl bg-white rounded-xl border p-4`}>
        {children}
    </div>
}
