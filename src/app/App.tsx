import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./styles/theme/theme";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}
