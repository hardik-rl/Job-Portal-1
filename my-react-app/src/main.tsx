
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
import App from "./App";
import { BrowserRouter } from "react-router-dom";

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<BrowserRouter><App /></BrowserRouter>);
} else {
  console.error("Root element not found");
}
