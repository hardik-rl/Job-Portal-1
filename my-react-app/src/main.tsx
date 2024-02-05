
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
import App from "./App";

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
