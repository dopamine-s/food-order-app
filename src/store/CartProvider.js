import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCardHandler = item => {};

  const removeItemFromCardHandler = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCardHandler,
    revomeItem: removeItemFromCardHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
