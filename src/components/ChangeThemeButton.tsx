import React, { MouseEventHandler } from "react";
import { ReactComponent as DarkModeIcon } from "../static/svg/dark-mode-icon.svg";
import { ReactComponent as LightModeIcon } from "../static/svg/ligh-mode-icon.svg";

import "../static/css/Button.css"
import "../static/css/ChangeThemeButton.css"


type Props = {
    theme: string;
    changeTheme: Function
}

export const ChangeThemeButton = (props: Props) => {
    const { theme, changeTheme } = props;

    return (
        <button className="change-theme-button" onClick={() => changeTheme(theme == "light-theme" ? "dark-theme" : "light-theme")}>
            {
                theme === "dark-theme" ?
                <DarkModeIcon/>
                :
                <LightModeIcon/>
            }
        </button>
    )
}