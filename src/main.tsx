import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/main.css";
import App from "./App";
import { ModalProvider } from "./context/ModalContext";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
);
