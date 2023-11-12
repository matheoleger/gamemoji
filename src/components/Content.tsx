import React from "react";
import { default as emojis } from "../data/emojis.json";
import { EmojiCard } from "./EmojiCard";

import "../static/css/Content.css";

type Props = {
  filter: string;
  copyHandler: Function;
};

export const Content = (props: Props) => {
  return (
    <section>
      {emojis.map((emoji) => {
        const keywordsInline = emoji.keywords.join(";");

        const filter = props.filter.toLowerCase()

        if (keywordsInline.toLowerCase().includes(filter) 
        || emoji.descriptions.fr.toLowerCase().includes(filter) 
        || emoji.descriptions.en.toLowerCase().includes(filter) 
        || emoji.name.toLowerCase().includes(filter) 
        || !props.filter)
          return <EmojiCard key={emoji.name} emoji={emoji} copyHandler={props.copyHandler}/>;
      })}
    </section>
  );
};
