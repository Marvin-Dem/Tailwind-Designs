import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
    console.info("Root element not found");
} else {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
