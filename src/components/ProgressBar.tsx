import React from 'react';

export const ProgressBar: React.FC<{width: number, duration?: number}> = ({width, duration=0.5}) => {
    return <div className="w-full bg-gray-200 rounded-full h-5.5 my-2">
        <div className="bg-blue-600 h-5.5 rounded-full text-center text-white"
             style={{
                 transition: "width",
                 transitionDuration: `${duration}s`,
                 width: `${width * 100}%`}}>
            {(width * 100).toFixed(0)}%
        </div>
    </div>
}
