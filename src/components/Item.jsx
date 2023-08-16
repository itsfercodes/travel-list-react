// eslint-disable-next-line react/prop-types
function Item({ item: { description, quantity, packed } }) {
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button type="button">❌</button>
    </li>
  );
}
export default Item;
