import React, { useState, useEffect } from "react";
import { FaFire, FaClock, FaTag, FaCheck } from "react-icons/fa";
import BiryaniCover from "../../assets/biryani_cover.jpg";

const SpecialOffer = ({ onClaimDeal }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText("FOODIE20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 relative overflow-hidden bg-gradient-to-r from-amber-500 via-primary to-secondary text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-black pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
              <FaFire /> Deal of the Day
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Get 20% OFF Your Family Biryani Feast!
            </h2>
            <p className="text-sm sm:text-base text-white/90">
              Slow-cooked over charcoal for 4 hours with fragrant basmati & royal spices. Use code <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded">FOODIE20</span> at checkout.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleCopyCode}
                className="bg-white text-gray-900 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:bg-gray-100 transition flex items-center gap-2"
              >
                {copied ? <FaCheck className="text-green-600" /> : <FaTag className="text-primary" />}
                {copied ? "Coupon Copied!" : "Copy Code: FOODIE20"}
              </button>

              <button
                onClick={onClaimDeal}
                className="bg-black/30 hover:bg-black/50 text-white font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm border border-white/40 transition"
              >
                Order Special Biryani Now
              </button>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/80 font-medium">
              <FaClock /> Offer Ends In
            </div>
            <div className="flex gap-3 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 w-16 sm:w-20 border border-white/30">
                <span className="block text-2xl sm:text-3xl font-extrabold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-white/80 uppercase">Hours</span>
              </div>
              <span className="text-2xl font-bold self-center">:</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 w-16 sm:w-20 border border-white/30">
                <span className="block text-2xl sm:text-3xl font-extrabold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-white/80 uppercase">Mins</span>
              </div>
              <span className="text-2xl font-bold self-center">:</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 w-16 sm:w-20 border border-white/30">
                <span className="block text-2xl sm:text-3xl font-extrabold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-white/80 uppercase">Secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
