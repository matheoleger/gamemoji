import React, { useContext, useEffect, useState } from "react";
import { default as gamemojis } from "../data/gamemojis.json";
import { EmojiCard } from "./EmojiCard";

import "../static/css/Content.css";
import {StoreContext, useLocalStorage} from "../utils/useLocalStorage";
import { EmojiMode } from "../types";

type Props = {
  filter: string;
  copyHandler: Function;
};

export const Content = (props: Props) => {

  const [emojis, setEmojis] = useState<Emoji[]>([])
  // const [emojiMode, setEmojiMode] = useLocalStorage("EMOJI_MODE");
  const {emojiMode, setEmojiMode} = useContext(StoreContext);

  // useEffect(() => {
  //   window.addEventListener('storage', storageHandler)

  //   return () => {
  //     window.removeEventListener('storage', storageHandler)
  //   }
  // }, [])

  // // window.addEventListener("storage", (event) => {
  // //   console.log("STORAGE EVENT")

  // // });

  // const storageHandler = () => {
  //   console.log("STORAGE EVENT")
  //   const emojiMode = localStorage.getItem("EMOJI_MODE");
  //   console.log(emojiMode);
  // }

  useEffect(() => {
    console.log("Emoji Mode", emojiMode)
  },[emojiMode])

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
