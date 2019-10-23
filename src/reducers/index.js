/*combain redusers */
import { combineReducers } from 'redux';

import books from './booksReducer';
import cart from './cartReducer';

export default combineReducers({
    books,
    cart
})