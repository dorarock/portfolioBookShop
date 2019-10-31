import { connect } from 'react-redux';
import * as booksActions from '../actions/booksAction';
import App  from '../components/App';
import {bindActionCreators} from 'redux';
import filter from 'lodash/filter';


const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'all':
    return books;
    case 'mystic':
    return filter(books, {'genre' : 'mystic'});
    case 'science fiction':
    return filter(books, {'genre' : 'science fiction'});
    case 'novel':
    return filter(books, {'genre' : 'novel'});
    default:
    return books;
  }  
};

const filterBooks = (books, searchQuery) =>
 books.filter(o => 
  o.product_name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 || 
  o.autor.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
);

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
}

const mapStateToProps = ({ books, filter }) => ({
    books: searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
  });
  
const mapDispatchYoProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchYoProps)(App);