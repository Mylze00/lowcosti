// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Créez le contexte
export const CartContext = createContext();

// 2. Créez un fournisseur de contexte (Provider)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Retirez les console.log de débogage pour le moment
  // console.log("Current cart items state (initial/re-render):", cartItems);

  const addToCart = (product, quantity = 1) => {
    // Retirez les console.log de débogage pour le moment
    // console.log("Attempting to add product:", product, "with quantity:", quantity);

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === product.id);
      let newItems;
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prevItems, { 
          productId: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity 
        }];
      }
      // Retirez les console.log de débogage pour le moment
      // console.log("Cart items AFTER update:", newItems);
      return newItems;
    });
    alert(`${product.name} a été ajouté au panier !`); // Confirmation visuelle
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Le "value" prop contient les données et fonctions que les composants consommateurs pourront utiliser
  const contextValue = {
    cartItems,
    addToCart,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children} {/* Permet aux composants enfants d'accéder au contexte */}
    </CartContext.Provider>
  );
};

// 3. Créez un hook personnalisé pour faciliter l'utilisation du contexte
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    // Si ce message d'erreur s'affiche, c'est que useCart n'est PAS utilisé à l'intérieur de CartProvider
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};