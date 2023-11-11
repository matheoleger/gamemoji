import React from "react";
import {default as emojis} from "../data/emojis.json"; 
import { EmojiCard } from "./EmojiCard";

import "../static/css/Content.css";

export const Content = () => {
    return (
        <section>
            {
                emojis.map((emoji) => (
                    <EmojiCard {...emoji}/>
                ))
            }
        </section>
    )
}