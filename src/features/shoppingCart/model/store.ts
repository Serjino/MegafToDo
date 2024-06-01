import { create } from "zustand";
import { IProduct } from "../../../entities/products/product.def";
import {
	IProductInCart,
	IShoppingCartActions,
	IShoppingCartState,
} from "./shoppingCart.def";

const useShoppingCartStore = create<IShoppingCartState & IShoppingCartActions>(
	(set) => ({
		products: [],
		totalPrice: 0,
		totalDiscount: 0,
		addProduct: (product: IProduct) => {
			set((state) => ({
				...state,
				product: [...state.products, product],
			}));
		},
		deleteProduct: (productID: IProduct["id"]) => {
			set((state) => ({
				...state,
				products: state.products.filter((product) => product.id !== productID),
			}));
		},
		increaseProductCount: (productID: IProduct["id"]) => {
			set((state) => {
				return {
					...state,
					products: state.products.map((product) => {
						if (product.id !== productID) {
							const updatedProduct: IProductInCart = {
								...product,
								count: product.count++,
							};
							return updatedProduct;
						}
						return product;
					}),
				};
			});
		},
		decreaseProductCount: (productID: IProduct["id"]) => {
			set((state) => {
				return {
					...state,
					products: state.products.map((product) => {
						if (product.id !== productID) {
							const updatedProduct: IProductInCart = {
								...product,
								count: product.count--,
							};
							return updatedProduct;
						}
						return product;
					}),
				};
			});
		},
	})
);
