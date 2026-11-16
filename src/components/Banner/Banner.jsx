import React from "react";
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = ({ onExploreMenu }) => {
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
      <div id="about" className="min-h-[550px] bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
              {/* Image section */}
              <div className="relative">
                <img
                  src={BiryaniImg}
                  alt="Signature Biryani"
                  className="max-w-[420px] w-full mx-auto drop-shadow-[-10px_15px_15px_rgba(0,0,0,0.3)] hover:scale-105 duration-300"
                />
                <div className="absolute -bottom-4 right-10 sm:right-16 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                    15+
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-gray-800 dark:text-white">Years Culinary</p>
                    <p className="text-gray-500">Heritage Craft</p>
                  </div>
                </div>
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Our Culinary Promise
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white leading-tight">
                    Traditional Slow Dum Cooking, Pure Flavour In Every Grain
                  </h2>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed">
                  We believe true biryani is an art. Every single order is cooked over gentle charcoal embers in sealed clay degs (pots), trapping the rich steam so the basmati rice absorbs all the natural juices, roasted saffron, and hand-ground spices.
                </p>

                {/* Feature Icons */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                    <div className="h-14 w-14 rounded-2xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 flex items-center justify-center shadow-sm">
                      <GrSecure className="text-2xl" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">100% Quality Halal</h4>
                    <p className="text-[11px] text-gray-400">Certified farm-fresh ingredients</p>
                  </div>

                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                    <div className="h-14 w-14 rounded-2xl bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 flex items-center justify-center shadow-sm">
                      <IoFastFood className="text-2xl" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">Fresh & Steaming</h4>
                    <p className="text-[11px] text-gray-400">Prepared fresh to order</p>
                  </div>

                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                    <div className="h-14 w-14 rounded-2xl bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 flex items-center justify-center shadow-sm">
                      <GiFoodTruck className="text-2xl" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">Speedy Delivery</h4>
                    <p className="text-[11px] text-gray-400">Insulated heat-sealed boxes</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onExploreMenu}
                    className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full shadow-md hover:scale-105 duration-200"
                  >
                    View Our Full Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
