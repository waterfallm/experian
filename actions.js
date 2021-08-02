export function addProductToBasket(product) {
    // console.log("Add product", product)

    return {
        product: product,
        type: "ADD_PRODUCT_TO_BASKET",



    };

}

export function removeProductFromBasket(productId) {
    // console.log("Remove product", productId)
    return {
        payload: { productId },
        type: "REMOVE_PRODUCT_FROM_BASKET",
    };
}
