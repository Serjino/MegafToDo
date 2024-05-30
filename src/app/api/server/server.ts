import { createServer } from "miragejs";
import { PRODUCTS } from "../../../entities/products/mockData/products";

export function initializeServer() {
	createServer({
		routes() {
			this.namespace = "/api"; // Все запросы будут начинаться с '/api'
			this.get("/products", () => ({
				products: PRODUCTS,
			}));
		},
		logging: true,
		
	});
}
