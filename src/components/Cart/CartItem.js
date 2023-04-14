import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.itemInCart.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.itemInCart.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.itemInCart.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={()=>props.onAdd(props.itemInCart.id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
