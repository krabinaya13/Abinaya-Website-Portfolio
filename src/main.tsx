import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import App from "./App";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Abinaya-Website-Portfolio">
      <ThemeProvider defaultTheme="dark" storageKey="lovable-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

