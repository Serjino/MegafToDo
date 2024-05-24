import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/ui/Header";
import { Fragment } from "react/jsx-runtime";

export function Layout() {
	return (
		<Fragment>
			<Header />
			<main>
				<Outlet />
			</main>
		</Fragment>
	);
}
