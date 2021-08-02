const initialState = {
    totalPrice: 0,
    products: [


    ],
};

export default function basketReducer(state = initialState, action) {
    let totalPrice;
    switch (action.type) {
        case "ADD_PRODUCT_TO_BASKET":

            totalPrice = state.totalPrice + (action.product.price * action.product.quantity)

            if (state.products.some(product => product.id === action.product.id)) {

                //update array
                const newarray = state.products.map(product => {
                    if (product.id !== action.product.id) return product
                    return ({ ...product, quantity: product.quantity + 1 })
                })

                return {
                    ...state,
                    totalPrice: totalPrice,
                    products: newarray,
                };
            } else {
                return {
                    ...state,
                    totalPrice: totalPrice,
                    products: [...state.products, action.product],
                };
            }

        case "REMOVE_PRODUCT_FROM_BASKET":
            // console.log(action.payload.productId)
            const product = state.products.find(product => product.id === action.payload.productId)

            if (!product) { return state }

            totalPrice = state.totalPrice - product.price

            if (product.quantity > 1) {

                //update array

                const newarray = state.products.map(product => {
                    if (product.id !== action.payload.productId) return product
                    return ({ ...product, quantity: product.quantity - 1 })
                })

                return {
                    ...state,
                    totalPrice: totalPrice,
                    products: newarray,
                };

            } else {


                return {
                    ...state,
                    totalPrice: totalPrice,
                    products: state.products.filter(product => product.id !== action.payload.productId),
                };
            }
        default:
            return state;
    }
}
