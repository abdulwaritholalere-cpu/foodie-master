import React, { useState } from "react";
import { FaCalendarCheck, FaClock, FaUsers, FaUtensils, FaCheckCircle } from "react-icons/fa";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    occasion: "Dinner",
    requests: "",
  });

  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in your name, phone number, and preferred date.");
      return;
    }
    const randomRef = "RES-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsBooked(true);
  };

  return (
    <div id="reservation" className="py-16 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left promo info */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary p-8 text-white flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                  Reserve a Table
                </span>
                <h2 className="text-3xl font-extrabold leading-tight">
                  Experience Fine Dining At Its Best
                </h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  Join us for an unforgettable feast of authentic spices, slow-cooked royal delicacies, and warm hospitality.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/20 text-sm">
                <div className="flex items-center gap-3">
                  <FaClock className="text-lg opacity-80" />
                  <div>
                    <p className="font-semibold">Lunch & Dinner Hours</p>
                    <p className="text-xs text-white/80">11:30 AM – 11:00 PM Daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUtensils className="text-lg opacity-80" />
                  <div>
                    <p className="font-semibold">Private Dining & Events</p>
                    <p className="text-xs text-white/80">Custom party & family halls available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="md:col-span-3 p-8 sm:p-10">
              {isBooked ? (
                <div className="text-center py-8 space-y-4">
                  <FaCheckCircle className="text-5xl text-green-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Reservation Confirmed!
                  </h3>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl inline-block text-left text-xs space-y-1">
                    <p><strong>Booking Ref:</strong> <span className="text-primary font-mono">{bookingRef}</span></p>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                    <p><strong>Party Size:</strong> {formData.guests} Guests ({formData.occasion})</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    We've sent an instant SMS/email confirmation. We look forward to welcoming you!
                  </p>
                  <button
                    onClick={() => setIsBooked(false)}
                    className="bg-primary text-white text-xs font-bold px-6 py-2 rounded-full hover:bg-secondary transition"
                  >
                    Book Another Table
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Book Your Experience
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Reserve online in seconds — instant free confirmation
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+1 (555) 234-5678"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full mt-1 text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full mt-1 text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        Time Slot
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full mt-1 text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:00">01:00 PM (Lunch)</option>
                        <option value="14:00">02:00 PM (Lunch)</option>
                        <option value="18:30">06:30 PM (Dinner)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="20:00">08:00 PM (Dinner)</option>
                        <option value="21:00">09:00 PM (Dinner)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full mt-1 text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="8+">8+ Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows="2"
                      name="requests"
                      placeholder="E.g., Window seat, anniversary celebration, allergy alerts..."
                      value={formData.requests}
                      onChange={handleChange}
                      className="w-full mt-1 text-xs px-3 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-xl shadow-md hover:scale-[1.01] transition duration-200 text-sm"
                  >
                    Confirm Table Reservation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
