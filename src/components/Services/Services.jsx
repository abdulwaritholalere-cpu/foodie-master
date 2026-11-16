import React, { useState } from "react";
import { foodCategories, foodItems } from "../../data/foodData";
import { FaStar, FaCartPlus, FaCheck } from "react-icons/fa";

const Services = ({ onAddToCart, cartItems = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  const getItemCartQty = (id) => {
    const item = cartItems.find((c) => c.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <>
      <span id="services"></span>
      <div id="menu" className="py-14 bg-white dark:bg-gray-900 duration-200">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[500px] mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Authentic & Royal Cuisine
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
              Explore Our Signature Dishes
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Freshly prepared with time-honored slow-cooking methods, hand-pounded herbs, and aromatic spices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {foodCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 place-items-stretch">
            {filteredItems.map((service) => {
              const qtyInCart = getItemCartQty(service.id);
              return (
                <div
                  key={service.id}
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="rounded-3xl bg-white dark:bg-gray-800/90 relative shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 duration-300 group flex flex-col justify-between pt-12 p-5"
                >
                  {/* Floating Tag */}
                  {service.tag && (
                    <div className="absolute top-3 left-4 z-10 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                      {service.tag}
                    </div>
                  )}

                  {/* Image container */}
                  <div className="h-[120px] flex items-center justify-center -mt-16 mb-4">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="max-w-[170px] max-h-[170px] object-contain drop-shadow-md transform group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between text-center space-y-2">
                    <div className="space-y-1">
                      {/* Rating */}
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs">
                        <FaStar />
                        <span className="font-bold text-gray-700 dark:text-gray-200">{service.rating}</span>
                        <span className="text-gray-400 text-[10px]">({service.reviews})</span>
                      </div>

                      <h3 className="text-base font-bold text-gray-800 dark:text-white line-clamp-1 group-hover:text-primary transition">
                        {service.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Price and Add button */}
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between mt-auto">
                      <div className="text-left">
                        <span className="text-[10px] text-gray-400 block uppercase">Price</span>
                        <span className="text-lg font-extrabold text-primary">${service.price.toFixed(2)}</span>
                      </div>

                      <button
                        onClick={() => onAddToCart(service)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow transition-all duration-200 ${
                          qtyInCart > 0
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-primary hover:bg-secondary text-white hover:scale-105"
                        }`}
                        aria-label={`Add ${service.name} to order`}
                      >
                        {qtyInCart > 0 ? (
                          <>
                            <FaCheck className="text-[11px]" />
                            <span>In Cart ({qtyInCart})</span>
                          </>
                        ) : (
                          <>
                            <FaCartPlus className="text-sm" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
