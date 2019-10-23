import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const BookCard = ({ product_name, autor, genre, price, img }) => (
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
  </Card>
)

export default BookCard;