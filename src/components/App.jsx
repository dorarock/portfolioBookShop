import React from 'react' ;
import  axios  from 'axios';
import  MaimMenu  from './Menu';
import { Container } from 'semantic-ui-react';
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react'
import Filter from '../containers/Filter';

class App extends React.Component {
  componentDidMount()  {
    const { setBooks } = this.props;
    axios.get('http://localhost:3000/getProducts.json').then(({ data }) => {
      setBooks(data);
    });
};

  render() {
    const { books, isReady } = this.props;
    const item = books.map((book) => (
      <>
      <BookCard {...book} />
      </>
    ))
    
    return (
      <>
      <Container>
          <MaimMenu />
          <Filter />
          <Card.Group itemsPerRow={4}>
             {item}
        </Card.Group>
      </Container>
      </>
    );
  }
};



export default App;
