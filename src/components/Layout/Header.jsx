import pizzaHeader from '../../assets/pizza_header.jpg';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
import HeaderButtonCar from './HeaderButtonCar';

const Header = (props) => {

  return (
    <>
      <header className={classes.header_nav}>
        <div className='w-[150px] h-[150px]'>
          <img src={logo} alt="logo" />
        </div>
        <HeaderButtonCar showCart={props.cartShow} />
      </header>
      <div className={classes.header_image}>
        <img src={pizzaHeader} alt="a delicious pizza from mamamia"/>
      </div>
    </>

  );
}

export default Header;
