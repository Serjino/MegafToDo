import { RouteObject } from "react-router";
import { AboutUs } from "../pages/aboutUs/ui/AboutUs";
import { Catalog } from "../pages/catalog/ui/Catalog";
import { Layout } from "../pages/layout/Layout";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				id: "О нас",
				element: <AboutUs />,
				index: true,
			},
			{
				id: "Каталог",
				path: "catalog",
				element: <Catalog />,
			},
		],
	},
];
