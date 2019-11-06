import React from 'react' ;
import  axios  from 'axios';
import { Container } from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import { Card } from 'semantic-ui-react'
import Filter from '../containers/Filter';
import MaimMenu from '../containers/Menu';

class App extends React.Component {
  componentDidMount()  {
    const { setBooks } = this.props;
    axios.get('http://localhost:3000/getProducts.json').then(({ data }) => {
      setBooks(data);
    });
};

  render() {
    const { books, isReady } = this.props;
    
    return (
      <>
      <Container>
          <MaimMenu />
          <Filter />
          <Card.Group itemsPerRow={4}>
             {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
      </>
    );
  }
};



export default App;
