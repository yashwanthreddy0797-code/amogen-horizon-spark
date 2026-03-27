import { createRoot } from "react-dom/client";
// @ts-ignore
import "@fontsource/cascadia-code";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
