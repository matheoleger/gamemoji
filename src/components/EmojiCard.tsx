import React from "react";

import "../static/css/EmojiCard.css";

export const EmojiCard = (props: Emoji) => {
  const copyToClipboard = async (e: any, value: string) => {   
    e.stopPropagation();

    if (!navigator.clipboard) {
        console.error("Clipboard API not supported");
        return;
    }

    try {
        await navigator.clipboard.writeText(value)
    }
    catch(e) {
        console.error(e);
    }
  };

  return (
    <article
      style={{ "--emojiColor": props.color } as any}
      onClick={(e) => copyToClipboard(e, props.name)}
    >
      <h4>
        <span onClick={(e) => copyToClipboard(e, props.emoji)}>{props.emoji}</span>
      </h4>
      <code>{props.name}</code>
      <p>{props.descriptions.en}</p>
    </article>
  );
};
