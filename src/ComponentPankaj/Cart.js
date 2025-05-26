import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [notification, setNotification] = useState('');

  
  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemove = (id, name) => {
    removeFromCart(id); 
    setNotification(`Removed ${name} from your cart.`);
  };

  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">Your Cart</h1>

      {notification && (
        <div className="bg-green-500 text-white text-center py-2 rounded mb-4">
          {notification}
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border rounded p-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <label className="font-medium">Qty: </label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded text-center"
                    min="1"
                  />
                  <button
                    onClick={() => handleRemove(item.id, item.name)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right space-y-4">
            <p className="text-xl font-bold">Subtotal: ${subtotal}</p>
            <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
