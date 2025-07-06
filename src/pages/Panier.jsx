import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Panier() {
  const { cartItems } = useCart();
  const { user } = useAuth();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Charger le script Flutterwave une fois
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!window.FlutterwaveCheckout) return alert('Paiement indisponible');

    window.FlutterwaveCheckout({
      public_key: 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxx-X', // Remplace avec ta vraie clé publique
      tx_ref: `tx-${Date.now()}`,
      amount: totalPrice,
      currency: 'USD',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: user?.email || 'client@example.com',
        name: user?.displayName || 'Client',
        phone_number: '243812345678', // facultatif
      },
      callback: (data) => {
        console.log('Paiement terminé ✅', data);
        alert('Paiement effectué avec succès !');
        // Ici : vider le panier, enregistrer la commande dans Firestore, etc.
      },
      customizations: {
        title: 'LowCost RDC',
        description: 'Paiement sécurisé',
        logo: '/images/logo.png',
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">🛒 Mon Panier</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            Votre panier est vide.
            <div className="mt-4">
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                Retour à la boutique
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              {cartItems.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))}
            </div>

            <div className="bg-white p-4 rounded shadow mt-6">
              <div className="flex justify-between items-center font-semibold text-gray-800">
                <span>Total :</span>
                <span>{totalPrice.toFixed(2)} USD</span>
              </div>
              <button
                onClick={handlePayment}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm"
              >
                Procéder au paiement
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Panier;
