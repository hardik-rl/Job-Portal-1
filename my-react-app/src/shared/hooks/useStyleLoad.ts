import { useEffect, useState } from 'react'

function useStyleLoad() {

  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    const addStylesToHead = (styles: string): HTMLStyleElement => {
      const styleElement = document.createElement("style");
      styleElement.innerHTML = styles;
      document.head.appendChild(styleElement);
      return styleElement;
    };

    const cssFiles: string[] = [
      "admin.css",
      "portal.css",
    ];

    const addedStyles: HTMLStyleElement[] = [];

    Promise.all(
      cssFiles.map(async (cssFile) => {
        const module = await import(`../../../assets/css/${cssFile}`/* @vite-ignore */);
        const styleElement = addStylesToHead(module.default);
        addedStyles.push(styleElement);
      })
    ).then(() => {
      setStylesLoaded(true);
    });

    return () => {
      addedStyles.forEach((styleElement) => {
        document.head.removeChild(styleElement);
      });
    };
  }, []);

  return { stylesLoaded }
}

export default useStyleLoad