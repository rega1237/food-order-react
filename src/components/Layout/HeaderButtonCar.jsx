import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from './HeaderButtonCar.module.css'

const HeaderButtonCar = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><FontAwesomeIcon icon={faShoppingCart} /></span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderButtonCar
