// https://coding-lesson.com/efficiently-manage-dom-elements-with-react-useinsertioneffect-hook/
// https://react.dev/reference/react/useInsertionEffect

// useLayoutEffect ->synchronously  


import { useState, useInsertionEffect, useSyncExternalStore } from "react";
import { todosStore } from "./store";

export const UseInsertionEffect = () => {
    const [theme, setTheme] = useState("dark");
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    console.log(todos);

    useInsertionEffect(() => {
        const { color, bgColor } = getsColorsFor(theme);
        let styleRule: any = null;
        if (color !== buttonColor || bgColor !== buttonBgColor) {
            buttonColor = color;
            buttonBgColor = bgColor;
            styleRule = getStyleRule();
            document.head.appendChild(styleRule);
        }

        return () => {
            if (!styleRule) {
                return;
            }
            document.head.removeChild(styleRule);
        };
    }, [theme]);

    const onThemeChange = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    console.log(theme, '1');

    return (
        <button onClick={onThemeChange} className="theme-button">
            Change my theme
        </button>
    );
};

let buttonColor = "";
let buttonBgColor = "";

const getStyleRule = () => {
    const styleElement = document.createElement("style");
    const rule = `
    .theme-button {
      color: ${buttonColor};
      background-color: ${buttonBgColor};
      padding: 1rem;
      border: 1px solid black;
      border-radius: 0.25rem;
      cursor: pointer;
      margin: auto;
  `;
    styleElement.innerHTML = rule;
    return styleElement;
};

const getsColorsFor = (theme: any) => {
    if (theme === "light") {
        return { color: "black", bgColor: "white" };
    }
    return { color: "white", bgColor: "black" };
};
