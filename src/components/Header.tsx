import React from "react"
import "../static/css/Header.css"

import { default as emojis } from "../data/emojis.json";

type Props = {
    backgroundColor: string
}

export const Header = (props: Props) => {

    const { backgroundColor } = props;

    const emojiRandomNumber = Math.floor(Math.random() * emojis.length)

    return (
        <header style={{backgroundColor}}>
            <h1>{emojis[emojiRandomNumber].emoji}Gamemoji</h1>
            <h2>An emoji guide for your gamedev commit.</h2>
        </header>
    )
}