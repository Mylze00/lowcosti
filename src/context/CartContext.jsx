// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  // Charger le panier à la connexion
  useEffect(() => {
    if (user?.uid) {
      const storedCart = localStorage.getItem(`cart_${user.uid}`);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      } else {
        setCartItems([]);
      }
    }
  }, [user]);

  // Sauvegarder dans localStorage à chaque modification
  useEffect(() => {
    if (user?.uid) {
      localStorage.setItem(`cart_${user.uid}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  // Ajouter un article
  const addToCart = (product, quantity = 1) => {
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
      alert(`${product.name} a été ajouté au panier !`);
      return newItems;
    });
  };

  // Supprimer un article du panier
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
  };

  // Compter les articles
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
