import React from "react";

import "../static/css/Popup.css";

type Props = {
    text: string
    isOpen: boolean
}

export const Popup = (props: Props) => {
    const {text, isOpen} = props; 

    return (
        <dialog open={isOpen}>
            {text}
        </dialog>
    )
}