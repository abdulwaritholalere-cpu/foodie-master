import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaCheckCircle, FaTimes } from "react-icons/fa";

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const deliveryFee = subtotal > 30 || subtotal === 0 ? 0 : 3.99;
  const taxes = subtotal * 0.08;
  const grandTotal = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? deliveryFee + taxes : 0));

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "FOODIE20") {
      setDiscountPercent(20);
      setPromoMessage("Success! 20% discount applied.");
    } else if (promoCode.trim().toUpperCase() === "FREEDELIVERY") {
      setDiscountPercent(0);
      setPromoMessage("Success! Free delivery applied.");
    } else {
      setDiscountPercent(0);
      setPromoMessage("Invalid promo code. Try 'FOODIE20'");
    }
  };

  const handleCheckout = () => {
    setIsOrdered(true);
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  const handleClose = () => {
    setIsOrdered(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 text-primary rounded-full">
                <FaShoppingBag className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Your Order Cart</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} delicious item(s)
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Close cart"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {isOrdered ? (
              <div className="text-center py-12 space-y-4">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Order Confirmed!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                  Our chef is already preparing your steaming hot meal. Delivery estimate: <span className="font-semibold text-primary">25-30 minutes</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleClose}
                    className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-secondary transition"
                  >
                    Back to Menu
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto text-gray-400">
                  <FaShoppingBag className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold">Your cart is empty</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore our chef's specialties and add your favorite dishes!
                </p>
                <button
                  onClick={handleClose}
                  className="bg-gradient-to-r from-primary to-secondary text-white font-medium px-6 py-2 rounded-full text-sm shadow hover:scale-105 transition"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-sm transition"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-white dark:bg-gray-700 p-1"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-primary font-bold mt-0.5">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 text-xs"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="text-[10px]" />
                        </button>
                        <span className="text-xs font-semibold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 text-xs"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-[10px]" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-2 transition"
                      aria-label="Remove item"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code (try FOODIE20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 text-xs px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                    />
                    <button
                      type="submit"
                      className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 text-white text-xs px-3 py-2 rounded-lg font-medium transition"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-xs mt-1.5 ${discountPercent > 0 ? "text-green-500" : "text-amber-500"}`}>
                      {promoMessage}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Footer calculation */}
          {cartItems.length > 0 && !isOrdered && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 space-y-3">
              <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount (20%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span>Grand Total</span>
                  <span className="text-primary">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-105 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2"
              >
                Proceed to Checkout (${grandTotal.toFixed(2)})
              </button>
              <p className="text-[11px] text-center text-gray-400">
                ⚡ Free delivery on orders over $30 • Safe contactless delivery
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
