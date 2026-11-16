import React, { useState } from "react";
import BiryaniImg1 from "../../assets/biryani3.png";
import BiryaniImg2 from "../../assets/biryani5.png";
import BiryaniImg3 from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";
import { FaFire, FaCalendarAlt, FaShoppingBag } from "react-icons/fa";

const ImageList = [
  {
    id: 1,
    name: "Tandoori Dum Biryani",
    price: "$16.49",
    img: BiryaniImg1,
  },
  {
    id: 2,
    name: "Royal Mutton Biryani",
    price: "$17.99",
    img: BiryaniImg2,
  },
  {
    id: 3,
    name: "Special Chicken Biryani",
    price: "$14.99",
    img: BiryaniImg3,
  },
];

const Hero = ({ onOrderClick }) => {
  const [selectedItem, setSelectedItem] = useState(ImageList[0]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        id="home"
        className="min-h-[550px] sm:min-h-[620px] bg-gray-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            {/* Text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary font-bold text-xs px-3.5 py-1.5 rounded-full w-fit mx-auto sm:mx-0">
                <FaFire /> 100% Handcrafted Dum Perfection
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Authentic Taste,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Royal
                </span>{" "}
                Flavors
              </h1>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                Experience the magic of slow-cooked dum biryani, tender meats, fragrant aged basmati, and secret royal spice blends passed down for generations.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                <button
                  onClick={onOrderClick}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 text-sm"
                >
                  <FaShoppingBag /> Order Online Now
                </button>
                <a
                  href="#reservation"
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-full text-sm shadow-sm hover:scale-105 duration-200 flex items-center gap-2"
                >
                  <FaCalendarAlt className="text-primary" /> Book a Table
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-gray-800 max-w-md mx-auto sm:mx-0 text-center sm:text-left">
                <div>
                  <h4 className="text-xl font-bold text-primary">15k+</h4>
                  <p className="text-[11px] text-gray-500">Happy Foodies</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">4.9 ★</h4>
                  <p className="text-[11px] text-gray-500">Customer Rating</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">&lt;30m</h4>
                  <p className="text-[11px] text-gray-500">Hot Delivery</p>
                </div>
              </div>
            </div>

            {/* Image display section */}
            <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
              {/* Main image */}
              <div className="h-[300px] sm:h-[420px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="w-[280px] sm:w-[420px] sm:scale-110 mx-auto spin drop-shadow-[-15px_20px_20px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Thumbnails list selector */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-3 absolute bottom-[-10px] lg:-right-6 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/40 dark:border-gray-700">
                {ImageList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-1 rounded-xl transition duration-200 ${
                      selectedItem.id === item.id
                        ? "ring-2 ring-primary scale-110 bg-primary/10"
                        : "hover:scale-105 opacity-80 hover:opacity-100"
                    }`}
                    title={item.name}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] object-contain inline-block"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
