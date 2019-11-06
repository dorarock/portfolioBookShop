import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const BookCard =  book  => {
  const { product_name, autor, genre, price, img, addToCart, addedCount } = book;
    return (
      <Card>
      <Image src= { img } wrapped ui={false} />
      <Card.Content>
        <Card.Header>{ product_name }</Card.Header>
        <Card.Meta>
          <span className='date'>Автор: { autor }</span>
        </Card.Meta>
        <Card.Meta>
          <span className='date'>Жанр: { genre }</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
        Цена:
          <Icon name='rub' />
      { price }
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>В корзину { 
        addedCount > 0 && `(${addedCount})` }</Button>
    </Card>
    )
}

export default BookCard;