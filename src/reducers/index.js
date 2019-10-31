/*combain redusers */
import { combineReducers } from 'redux';

import books from './booksReducer';
import cart from './cartReducer';
import filter from './filterReducer';

export default combineReducers({
    books,
    cart,
    filter
})