import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "../src/assets/styles/index.css";
import App from "./App";

const theme = createTheme({
  focusRing: "auto",
  autoContrast: true,
  cursorType: "pointer",
  primaryColor: "violet",
  defaultRadius: "md",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme={"dark"}>
      <App />
    </MantineProvider>
  </StrictMode>
);
