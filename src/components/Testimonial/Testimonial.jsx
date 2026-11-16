import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Ayesha Malik",
    role: "Verified Foodie",
    text: "Hands down the most authentic Hyderabadi Biryani in town! The aromatic saffron aroma when you open the seal is unreal. Meat was so tender it fell off the bone.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Local Guide",
    text: "Ordered the family feast for our weekend get-together. Delivered in under 25 minutes, steaming hot! The Butter Chicken with garlic naan was top-tier perfection.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Culinary Enthusiast",
    text: "The dum cooking makes a huge difference. You can taste the real cardamom, cinnamon, and whole spices without any oily heavy feeling. Our favorite Friday dinner spot!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div id="testimonials" data-aos="fade-up" data-aos-duration="300" className="py-16 bg-gray-50 dark:bg-gray-950 duration-200">
        <div className="container">
          <div className="text-center mb-12 max-w-[500px] mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Real Customer Love
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
              What Our Guests Are Saying
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Thousands of happy food lovers trust us daily for family dinners, dates, and celebrations.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="max-w-[700px] mx-auto"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div key={data.id} className="my-6 px-4">
                  <div className="flex flex-col gap-4 shadow-xl py-8 px-6 sm:px-10 rounded-3xl bg-white dark:bg-gray-800/90 relative border border-gray-100 dark:border-gray-800 text-center items-center">
                    <FaQuoteLeft className="text-3xl text-primary/30 absolute top-6 left-6" />

                    <div className="mb-2">
                      <img
                        className="rounded-full w-20 h-20 object-cover ring-4 ring-primary/20 shadow-md"
                        src={data.img}
                        alt={data.name}
                      />
                    </div>

                    <div className="flex gap-1 text-amber-400 text-sm">
                      {[...Array(data.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base italic max-w-lg leading-relaxed">
                      "{data.text}"
                    </p>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {data.name}
                      </h3>
                      <p className="text-xs text-primary font-semibold">
                        {data.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
