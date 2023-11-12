import React from "react";

import "../static/css/EmojiCard.css";

type Props = {
  emoji: Emoji,
  copyHandler: Function
}

export const EmojiCard = (props: Props) => {
  const copyToClipboard = async (e: any, value: string) => {   
    e.stopPropagation();

    if (!navigator.clipboard) {
        console.error("Clipboard API not supported");
        return;
    }

    try {
        await navigator.clipboard.writeText(value)
        props.copyHandler(value);
    }
    catch(e) {
        console.error(e);
    }
  };

  return (
    <article
      style={{ "--emojiColor": props.emoji.color } as any}
      onClick={(e) => copyToClipboard(e, props.emoji.name)}
    >
      <h4>
        <span onClick={(e) => copyToClipboard(e, props.emoji.emoji)}>{props.emoji.emoji}</span>
      </h4>
      <code>{props.emoji.name}</code>
      <p>{props.emoji.descriptions.en}</p>
    </article>
  );
};
