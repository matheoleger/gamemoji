import React, { useEffect, useState } from "react";
import "../static/css/Header.css";

import { default as emojis } from "../data/emojis.json";

type Props = {
  backgroundColor: string;
};

export const Header = (props: Props) => {
  const { backgroundColor } = props;

  const [textColor, setTextColor] = useState("var(--dark-color)");

  const emojiRandomNumber = Math.floor(Math.random() * emojis.length);

  useEffect(() => {
    setTextColor(getIsDarkColor() ? "var(--dark-color)" : "var(--light-color)");
  }, [backgroundColor]);

  const getIsDarkColor = () => {
    // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    const color =
      backgroundColor.charAt(0) === "#"
        ? backgroundColor.substring(1, 7)
        : backgroundColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    const uicolors = [r / 255, g / 255, b / 255];
    const constrasts = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    const luminance =
      0.2126 * constrasts[0] + 0.7152 * constrasts[1] + 0.0722 * constrasts[2];

    return luminance > 0.179;
  };

  return (
    <header style={{ backgroundColor, color: textColor }}>
      <h1>{emojis[emojiRandomNumber].emoji}Gamemoji</h1>
      <h2>An emoji guide for your gamedev commit.</h2>
    </header>
  );
};
