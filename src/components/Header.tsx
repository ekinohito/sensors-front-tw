import React from 'react';
import {MenuAlt3Icon, XIcon} from "@heroicons/react/outline";

interface HeaderProps {
    onToggle: () => void,
    show: boolean
}

export const Header: React.FC<HeaderProps> = ({onToggle, show}) => {

    return (
        <header className="bg-blue-500">
            <div
                className="flex justify-between
                items-center container px-4 mx-auto sticky py-3 text-white text-2xl font-bold"
            >
                Sensors
                <button onClick={onToggle}>
                    {show ? <XIcon className="w-10 h-10"/> : <MenuAlt3Icon className="w-10 h-10"/>}
                </button>
            </div>
        </header>
    )
}
