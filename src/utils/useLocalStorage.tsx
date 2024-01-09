import { createContext, useState } from "react";
import { EmojiMode } from "../types";

// https://monsterlessons-academy.com/posts/react-local-storage-how-to-sync-state-and-local-storage-in-react

export const useLocalStorage = (key: string, initialValue?: string) => {
  // if (!initialValue) initialValue = localStorage.getItem(key) ?? "";

  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);

      if (typeof window !== "undefined")
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

// export const LocalStorageContext = createContext<ReturnType<typeof useLocalStorage>>(["", () => {}])

export const useStore = () => {
  const [emojiMode, setEmojiMode] = useLocalStorage("EMOJI_MODE", EmojiMode.Gamemoji)
  const [theme, setTheme] = useLocalStorage("THEME", "light-theme")
  const [headerColor, setHeaderColor] = useLocalStorage("HEADER_COLOR", "#FFA3F6");

  return {
    emojiMode,
    setEmojiMode,
    theme,
    setTheme,
    headerColor,
    setHeaderColor,
  }
}

// https://medium.com/comsystoreply/how-to-use-react-context-with-usestate-c8ae4fe72fb9
export const StoreContext = createContext<ReturnType<typeof useStore>>({
  emojiMode: "",
  setEmojiMode: () => {},
  theme: "",
  setTheme: () => {},
  headerColor: "",
  setHeaderColor: () => {},
})

