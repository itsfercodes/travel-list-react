/* eslint-disable react/prop-types */
function Item({
  item: { description, quantity, packed, id },
  onDeleteItem,
  onToggleItem
}) {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggleItem(id)} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} - {description}
      </span>
      <button type="button" onClick={() => onDeleteItem(id)}>
        ❌
      </button>
    </li>
  );
}
export default Item;
