/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { Form, Logo, PackingList, Stats } from './components';

function TravelListApp() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleDeleteItem(itemId) {
    setItems((i) => i.filter((item) => item.id !== itemId));
  }

  function handleToggleItem(id) {
    setItems((i) =>
      i.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleResetItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all the items?'
    );

    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onResetItems={handleResetItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default TravelListApp;
