import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import SpecialOffer from "./components/Promotions/SpecialOffer.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CartDrawer from "./components/Cart/CartDrawer.jsx";
import { foodItems } from "./data/foodData";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleAddToCart = (foodItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === foodItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...foodItem, quantity: 1 }];
    });
    showToast(`Added "${foodItem.name}" to cart! 🍽️`);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleClaimSpecialDeal = () => {
    const signatureDish = foodItems[0];
    handleAddToCart(signatureDish);
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 border border-primary/50 animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onCartClick={() => setIsCartOpen(true)}
        totalCartCount={totalCartCount}
      />

      {/* Hero with interactive dish viewer */}
      <Hero onOrderClick={() => setIsCartOpen(true)} />

      {/* Interactive Menu Explorer */}
      <Services onAddToCart={handleAddToCart} cartItems={cartItems} />

      {/* Special Offer / Deal of the Day with Countdown */}
      <SpecialOffer onClaimDeal={handleClaimSpecialDeal} />

      {/* About & Quality Pillars */}
      <Banner
        onExploreMenu={() => {
          const menuElem = document.getElementById("menu");
          menuElem?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Table Reservation Feature (replaces generic app store download) */}
      <Reservation />

      {/* Guest Reviews */}
      <Testimonial />

      {/* Upgraded Footer */}
      <Footer />

      {/* Order Slide-over Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default App;
