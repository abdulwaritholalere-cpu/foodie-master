import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand & Mission */}
          <div className="space-y-4 md:col-span-1">
            <a href="#home" className="text-2xl font-black text-white flex items-center gap-2">
              <img src={footerLogo} alt="Foodie Logo" className="w-10" />
              <span>
                Foodie<span className="text-primary">Zone</span>
              </span>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed">
              Serving the authentic heritage of Hyderabadi and royal Mughlai cuisine with pure ghee, hand-pounded spices, and slow charcoal dum cooking.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition">
                <FaFacebook />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#menu" className="hover:text-primary transition">Our Special Menu</a></li>
              <li><a href="#about" className="hover:text-primary transition">Why Choose Us</a></li>
              <li><a href="#reservation" className="hover:text-primary transition">Book a Table</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Opening Hours & Contact</h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <FaClock className="text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-200">Daily: 11:30 AM – 11:00 PM</p>
                  <p className="text-[11px] text-gray-500">Kitchen closes at 10:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-primary" />
                <p>+1 (800) 555-FOOD (3663)</p>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-primary" />
                <p>orders@foodiezone.com</p>
              </div>
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-primary mt-0.5" />
                <p>108 Culinary Royal Court, Gourmet District, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Newsletter / Offers */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Join Foodie Club</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive weekly secret recipes, chef specials, and exclusive 20% discount vouchers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs py-2.5 rounded-xl hover:opacity-90 transition"
              >
                {subscribed ? "Subscribed! Welcome 🎉" : "Get Exclusive Offers"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} FoodieZone Restaurant. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400">Halal Certification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
