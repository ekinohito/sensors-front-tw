import React from 'react';
import {Transition} from "react-transition-group";
import {Portal} from 'react-portal';

interface ShowWrapperProps {
    show: boolean,
    animationDuration?: number
}

const defaultStyle =(duration: number) => ({
    transition: `right ${duration}ms ease-in-out`,

})

const transitionStyles = {
    entering: { display: 'block' },
    entered:  { display: 'block' },
    exiting:  { right: '-100%', position: 'absolute' },
    exited:  { right: '-100%', display: 'none', position: 'absolute'},
};

export const ShowWrapper: React.FC<ShowWrapperProps> = ({show, animationDuration=300, children}) => {
    return (
        <Transition
            in={show}
            timeout={animationDuration}
        >
            {(state: keyof typeof transitionStyles) => (
                // <Portal>
                    <div
                        style={{
                            ...defaultStyle(animationDuration),
                            ...transitionStyles[state]
                        } as any}
                    >
                        {children}
                    </div>
                // </Portal>
            )}
        </Transition>
    )
}
