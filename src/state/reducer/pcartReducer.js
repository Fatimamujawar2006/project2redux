export const pcardReducer = (state = {
    cart: []
}, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
            return state
    }
    return state
}