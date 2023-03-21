import classes from './PizzasSummary.module.css';

const PizzasSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Pizzas, Delivered To You</h2>
      <p>
        Choose your favorite pizza from our broad selection of available pizzas
        and enjoy a delicious pizza the best of the city.
      </p>

      <p>
        All our pizzas are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
}

export default PizzasSummary;
