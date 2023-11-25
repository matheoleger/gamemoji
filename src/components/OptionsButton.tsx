import React, { MouseEventHandler } from "react";
import { ReactComponent as SettingsIcon } from "../static/svg/settings-icon.svg";
import { ReactComponent as CloseIcon } from "../static/svg/close-icon.svg";

import "../static/css/Button.css"
import "../static/css/OptionsButton.css"

type Props = {
    isOpen: boolean;
    setIsOpen: Function
}

export const OptionsButton = (props: Props) => {
    const { isOpen, setIsOpen } = props;

    return (
        <button className="options-button" onClick={() => setIsOpen(!isOpen)}>
            {
                isOpen ?
                <CloseIcon/>
                :
                <SettingsIcon/>
            }
        </button>
    )
}