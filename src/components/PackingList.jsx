/* eslint-disable react/prop-types */
import { useState } from 'react';
import Item from './Item';

const INPUT = 'input';
const DESCRIPTION = 'description';
const PACKED = 'packed';

function PackingList({ items, onDeleteItem, onToggleItem, onResetItems }) {
  const [sortBy, setSortBy] = useState(INPUT);

  let sortedItems;
  if (sortBy === INPUT) sortedItems = items;
  if (sortBy === DESCRIPTION) {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === PACKED) {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={INPUT}>Sort by input order</option>
          <option value={DESCRIPTION}>Sort by description</option>
          <option value={PACKED}>Sort by packed status</option>
        </select>
        <button type="button" onClick={onResetItems}>
          Clear list
        </button>
      </div>
    </div>
  );
}
export default PackingList;
