import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../pages/layout/Layout";
import { AboutUs } from "../../pages/aboutUs/ui/AboutUs";
import { Catalog } from "../../pages/catalog/ui/Catalog";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <AboutUs />,
				index: true,
			},
			{
				path: 'catalog',
				element: <Catalog />,
			},
		],
	},
]);
