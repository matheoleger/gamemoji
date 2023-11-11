import React from "react";

import "../static/css/EmojiCard.css"

export const EmojiCard = (props: Emoji) => {
    return (
        <article style={{"--emojiColor":props.color} as any}>
            <h4>{props.emoji}</h4>
            <code>{props.name}</code>
            <p>{props.descriptions.en}</p>
        </article>
    )
}