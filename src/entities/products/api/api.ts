import { axiosInstance } from "../../../app/api/axiosInstance";

export function getProductsList() {
	return axiosInstance.get("/api/products").then(({ data }) => data);
}
