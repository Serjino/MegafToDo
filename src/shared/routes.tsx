import { RouteObject } from "react-router";
import { AboutUs } from "../pages/aboutUs/ui/AboutUs";
import { Catalog } from "../pages/catalog/ui/Catalog";
import { Layout } from "../pages/layout/Layout";
import { Contacts } from "../pages/contacts/ui/Contacts";

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
			{
				id: "Контакты",
				path: "contacts",
				element: <Contacts />,
			},
		],
	},
];
