import { RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { router } from "../features/routing/router";

export function App() {
	return (
		<Fragment>
			<RouterProvider router={router} />
		</Fragment>
	);
}
