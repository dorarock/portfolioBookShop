import React from 'react';
import { Menu } from 'semantic-ui-react';


const Filter = ({setFilter, filterBy}) => (
  <Menu secondary>
  <Menu.Item
    active={filterBy === 'all'}
    onClick={setFilter.bind(this, 'all')}
  >Все</Menu.Item>
  <Menu.Item
    active={filterBy === 'mystic'}
    onClick={setFilter.bind(this, 'mystic')}
  >Мистика</Menu.Item>
  <Menu.Item
    active={filterBy === 'science fiction'}
    onClick={setFilter.bind(this, 'science fiction')}
  >Научная фантастика</Menu.Item>
  <Menu.Item
    active={filterBy === 'novel'}
    onClick={setFilter.bind(this, 'novel')}
  >Роман</Menu.Item>
  
</Menu>
  );

  export default Filter;