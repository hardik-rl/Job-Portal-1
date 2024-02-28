import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../admin/shared/Loader";

const ClientSideLayout: React.FC = () => {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    const addStylesToHead = (styles: string): HTMLStyleElement => {
      const styleElement = document.createElement("style");
      styleElement.innerHTML = styles;
      document.head.appendChild(styleElement);
      return styleElement;
    };

    const cssFiles: string[] = [
      "bootstrap.min.css",
      "flaticon.css",
      "price_rangs.css",
      "slicknav.css",
      "animate.min.css",
      "magnific-popup.css",
      "fontawesome-all.min.css",
      "themify-icons.css",
      "slick.css",
      "style.css",
    ];

    const addedStyles: HTMLStyleElement[] = [];

    Promise.all(
      cssFiles.map(async (cssFile) => {
        const module = await import(
          `../../assets/css/${cssFile}` /* @vite-ignore */
        );
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

  if (!stylesLoaded) {
    return <Loader />;
  }

  return <Outlet />;
};

export default ClientSideLayout;
