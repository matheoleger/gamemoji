import React from "react";
import "../static/css/Popup.css";

type Props = {
    isOpen: boolean
    children: React.ReactNode
}

export const Popup = (props: Props) => {
    const {children, isOpen} = props; 

    return (
        <dialog open={isOpen}>
            {children}
        </dialog>
    )
}