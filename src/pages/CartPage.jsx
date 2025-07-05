// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x {item.price} $
                  </p>
                </div>
              </div>
              <p className="font-bold">
                {(item.price * item.quantity).toFixed(2)} $
              </p>
            </div>
          ))}

          <div className="text-right font-semibold text-lg mt-4">
            Total : {totalAmount.toFixed(2)} $
          </div>

          <Link
            to="/checkout"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Passer la commande
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
