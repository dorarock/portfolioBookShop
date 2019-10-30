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

const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady
  });
  
const mapDispatchYoProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchYoProps)(App);