import { routes } from "../../shared/routes";
import { FlexWrapper } from "../../shared/ui/flexWrapper/FlexWrapper";
import { getFlattenedRoutes } from "./model/get";
import { NavLink } from "./ui/NavLink";
import { NavListItem } from "./ui/NavListItem";

export function Navigation() {
	const routesWithNavigation = getFlattenedRoutes(routes).filter(
		(route) => !!route.id
	);
	console.log(routesWithNavigation);

	return (
		<FlexWrapper as={"nav"}>
			<FlexWrapper as={"ul"}>
				{routesWithNavigation.map((route) => (
					<NavListItem key={route.path}>
						<NavLink to={route.path}>{route.id}</NavLink>
					</NavListItem>
				))}
			</FlexWrapper>
		</FlexWrapper>
	);
}
