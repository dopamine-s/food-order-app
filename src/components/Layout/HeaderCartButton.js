import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  return (
    <button className={classes['button']}>
      <span>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;