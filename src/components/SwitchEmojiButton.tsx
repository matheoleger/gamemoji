import React, { MouseEventHandler, useContext, useEffect, useState } from "react";
import { ReactComponent as SwitchEmojiIcon } from "../static/svg/switch-emoji-mode-icon.svg";

import "../static/css/Button.css";
import "../static/css/ChangeThemeButton.css";
import { EmojiMode } from "../types";
import {StoreContext, useLocalStorage} from "../utils/useLocalStorage";

type Props = {
  // theme: string;
  // changeTheme: Function
};

export const SwitchEmojiButton = (props: Props) => {
  // const { theme, changeTheme } = props;

  // const [emojiMode, setEmojiMode] = useState<EmojiMode>(EmojiMode.Gamemoji);

  // const setEmojiModeToLocalStorage = (newEmojiMode: EmojiMode) => {
  //   localStorage.setItem("EMOJI_MODE", newEmojiMode);
  //   setEmojiMode(newEmojiMode)
  // };

  // const [emojiMode, setEmojiMode] = useLocalStorage("EMOJI_MODE", EmojiMode.Gamemoji);

  const {emojiMode, setEmojiMode} = useContext(StoreContext)

  
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
