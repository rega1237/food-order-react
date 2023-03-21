import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from './HeaderButtonCar.module.css'
import CartContext from '../../store/CartContext'

const HeaderButtonCar = (props) => {

  const cart = useContext(CartContext);

  const numberOfCartItems = cart.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}><FontAwesomeIcon icon={faShoppingCart} /></span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderButtonCar
