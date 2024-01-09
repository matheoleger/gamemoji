import React, { useContext } from "react";
import { ReactComponent as SwitchEmojiIcon } from "../static/svg/switch-emoji-mode-icon.svg";

import "../static/css/Button.css";
import "../static/css/ChangeThemeButton.css";
import { EmojiMode } from "../types";
import { StoreContext } from "../utils/useLocalStorage";

type Props = {};

export const SwitchEmojiButton = (props: Props) => {
  const { emojiMode, setEmojiMode } = useContext(StoreContext);

  return (
    <button
      className="change-theme-button"
      onClick={() =>
        setEmojiMode(
          emojiMode == EmojiMode.Gamemoji
            ? EmojiMode.Devmoji
            : EmojiMode.Gamemoji
        )
      }
    >
      <SwitchEmojiIcon />
    </button>
  );
};
