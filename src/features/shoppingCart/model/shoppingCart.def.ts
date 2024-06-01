import { IProduct } from "../../../entities/products/product.def";

export interface IProductInCart extends IProduct {
    count: number
}

export interface IShoppingCartState {
    products: IProductInCart[],
    totalPrice: number,
    totalDiscount: number
}

export interface IShoppingCartActions {
    addProduct: (product: IProduct) => void
    deleteProduct: (productID: IProduct['id']) => void
    increaseProductCount: (productID: IProduct['id']) => void
    decreaseProductCount: (productID: IProduct['id']) => void
}
