import React from 'react';
import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-3">
      <div className="flex items-center gap-4">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold text-sm">{item.name}</h4>
          <p className="text-xs text-gray-600">
            {item.quantity} x {item.price.toFixed(2)} USD
          </p>
        </div>
      </div>
      <button
        className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
        onClick={() => removeFromCart(item.productId)}
      >
        Retirer
      </button>
    </div>
  );
}

export default CartItem;
