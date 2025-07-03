// src/pages/CartPage.jsx
// ... (imports)
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cartItems, addToCart } = useCart();

  console.log("CartPage rendered. Current cartItems:", cartItems); // <-- AJOUTEZ CETTE LIGNE

  // ... (rest of the component)
}

export default CartPage;