import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App.jsx";
import ProgressProvider from "./context/ProgressProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ProgressProvider>
                <App />
            </ProgressProvider>
        </BrowserRouter>
    </StrictMode>,
);
