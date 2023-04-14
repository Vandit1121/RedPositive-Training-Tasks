import React,{useContext} from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.items);
    const addToCartHandler = (item) =>{
        cartCtx.addItem({...item,amount:1});    
    };

    const removeCartHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length;
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => 
    <CartItem key={item.id} itemInCart={item} onAdd={addToCartHandler.bind(null, item)} onRemove={removeCartHandler.bind(null,item.id)} />
    )}</ul>;
    return (
        <Modal onClick={props.onClick}>            
        {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                {hasItems>0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;