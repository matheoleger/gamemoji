import React from "react";
import { default as emojis } from "../data/emojis.json";
import { EmojiCard } from "./EmojiCard";

import "../static/css/Content.css";

type Props = {
  filterString: string;
};

export const Content = (props: Props) => {
  return (
    <section>
      {emojis.map((emoji) => {
        const keywordsInline = emoji.keywords.join(";");

        const filter = props.filterString.toLowerCase()

        if (keywordsInline.toLowerCase().includes(filter) 
        || emoji.descriptions.fr.toLowerCase().includes(filter) 
        || emoji.descriptions.en.toLowerCase().includes(filter) 
        || emoji.name.toLowerCase().includes(filter) 
        || !props.filterString)
          return <EmojiCard {...emoji} key={emoji.name} />;
      })}
    </section>
  );
};
