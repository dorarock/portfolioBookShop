import React from 'react' ;
import { Menu, Popup, Button, Image, List, CardContent } from 'semantic-ui-react';

const CartWindow = ({ product_name, id, img, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={ removeFromCart.bind(this, id) } color="green">Удалить</Button>
      </List.Content>
      <Image avatar src={ img } />
      <List.Content>{ product_name }</List.Content>
    </List.Item>
    </List>
);

const MaimMenu = ({ totalPrice, booksCount, items }) => (
    <Menu>
        <Menu.Item
          name='browse'
        >
          Book Store
        </Menu.Item>


        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            Итого: &nbsp; <b>{ totalPrice }</b> &nbsp; RUB.
          </Menu.Item>


          <Popup
          trigger={
            <Menu.Item
            name='help'
          >
            Корзина (<b>{ booksCount }</b>)
          </Menu.Item>
          }
          content={ items.map(book => <CartWindow {...book} />) }
          on="click"
          hideOnScroll
          />
        </Menu.Menu>
      </Menu>
);

export default MaimMenu;