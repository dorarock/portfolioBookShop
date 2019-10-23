/*список всех добавленных товаров */
const initialState = {
    booksList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        return {
            ...state,
            booksList: [
                ...state.booksList, action.payload
            ],
        };
        case 'REMOVE_FROM_CART':
        return {
            ...state,
            booksList: state.items.filter(o => o.id != action.payload)
        };
        default:
        return  state;
    }
};