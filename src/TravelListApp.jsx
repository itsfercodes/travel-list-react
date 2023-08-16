import { useState } from 'react';
import { Form, Logo, PackingList, Stats } from './components';

function TravelListApp() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  return (
    <div className="app">
      <Logo />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default TravelListApp;
