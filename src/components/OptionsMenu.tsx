import React, { useState } from "react";
import { ReactComponent as RestartAltIcon } from "../static/svg/restart-alt-icon.svg";

import "../static/css/OptionsMenu.css";

type Props = {
    open: boolean,
    onClose?: Function,
    headerColor: string,
    setHeaderColor: React.Dispatch<React.SetStateAction<string>>
}

export const OptionsMenu = (props: Props) => {

    const { open, onClose, headerColor, setHeaderColor } = props;

    // const [headerColor, setHeaderColor] = useState(localStorage.getItem('HEADER_COLOR'));

    // const handleHeaderColor = (e: any) => {
    //     console.log(e.target.value);
    //     localStorage.setItem('HEADER_COLOR', e.target.value);
    //     setHeaderColor(e.target.value);
    // }

    const handleHeaderColor = (color: string) => {
        console.log(color);
        localStorage.setItem('HEADER_COLOR', color);
        setHeaderColor(color);
    }


    return (
        <div className={`options-menu options-menu-${open ? "open" : "close"}`}>
            <h3>Color options</h3>
            <div className="header-color">
                <label htmlFor="headerColorPicker">Choose the background header color</label>
                <input name="headerColorPicker" value={headerColor} type="color" onChange={(e) => handleHeaderColor(e.target.value)}/>
                <RestartAltIcon title="Reset to default color" onClick={() => handleHeaderColor("#FFA3F6")}/>
            </div>

        </div>
    )
}