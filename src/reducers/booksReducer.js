/*список всех книг */
const initialState = {
    isReady: false,
    booksList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
        return {
            ...state,
            booksList: action.payload,
            isReady: true
        };
        case 'SET_READY':
        return {
            ...state,
            isReady: action.payload
        };
        default:
        return  state;
    }
};