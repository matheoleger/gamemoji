import React, { useContext, useEffect, useState } from "react";
import { default as gamemojis } from "../data/gamemojis.json";
import { default as devmojis } from "../data/devmojis.json";
import { EmojiCard } from "./EmojiCard";

import "../static/css/Content.css";
import { StoreContext, useLocalStorage } from "../utils/useLocalStorage";
import { EmojiMode } from "../types";

type Props = {
  filter: string;
  copyHandler: Function;
};

export const Content = (props: Props) => {
  const { emojiMode } = useContext(StoreContext);
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    setEmojis(emojiMode == EmojiMode.Gamemoji ? gamemojis : devmojis);
  }, [emojiMode]);

  return (
    <section>
      {emojis.map((emoji) => {
        const keywordsInline = emoji.keywords.join(";");

        const filter = props.filter.toLowerCase();

        if (
          keywordsInline.toLowerCase().includes(filter) ||
          emoji.descriptions.fr.toLowerCase().includes(filter) ||
          emoji.descriptions.en.toLowerCase().includes(filter) ||
          emoji.name.toLowerCase().includes(filter) ||
          !props.filter
        )
          return (
            <EmojiCard
              key={emoji.name}
              emoji={emoji}
              copyHandler={props.copyHandler}
            />
          );
      })}
    </section>
  );
};
