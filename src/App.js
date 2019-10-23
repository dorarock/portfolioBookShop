import React from 'react' ;
import { connect } from 'react-redux';
import { setBooks } from './actions/booksAction';
import  axios  from 'axios';
import  MaimMenu  from './components/Menu';
import { Container } from 'semantic-ui-react';
import BookCard from './components/BookCard';
import { Card } from 'semantic-ui-react'


class App extends React.Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('http://localhost:3000/getProducts.json').then(({ data }) => {
      setBooks(data);
    });
};

  render() {
    const { booksList, isReady } = this.props;
    const item = booksList.map(book => (
      <>
      <BookCard {...book} />
      </>
    ))
    
    return (
      <>
      <Container>
          <MaimMenu />
          <Card.Group itemsPerRow={4}>
             {item}
        </Card.Group>
      </Container>
      </>
    );
  }
}

const mapStateToProps = ({ books: {booksList} }) => ({
  booksList,
  isReady: booksList.isReady
});

const mapDispatchYoProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchYoProps)(App);
