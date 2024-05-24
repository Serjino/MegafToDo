import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "@emotion/react";
import "./app/styles/index.scss";
import { theme } from "./app/styles/theme/theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
