import { useState } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import image1 from "../../assets/biryani3.png";
import image2 from "../../assets/biryani5.png";
import image3 from "../../assets/biryani2.png";
const dishes = [
  { image: image1, name: "Classic biryani" },
  { image: image2, name: "House biryani" },
  { image: image3, name: "Special biryani" },
];
export default function Hero() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" /> A little spice. A lot of soul.
          </p>
          <h1 id="hero-title">
            Good food.
            <br />
            Great mood.
            <br />
            <em>That’s Foodie.</em>
          </h1>
          <p className="intro">
            Fragrant rice, bold spices and the comfort of a generous plate. Find
            your next biryani favourite, one delicious dish at a time.
          </p>
          <a className="button" href="#services">
            Find your favourite <FiArrowUpRight aria-hidden="true" />
          </a>
          <a className="text-link hero-note" href="#about">
            <FiArrowDown aria-hidden="true" /> Get to know Foodie
          </a>
        </div>
        <div className="hero-visual">
          <div className="plate-halo" />
          <span className="hero-label">
            Made for your
            <br />
            <em>happy place.</em>
          </span>
          <img
            className="hero-plate"
            src={dishes[selected].image}
            alt={dishes[selected].name + " served on a plate"}
            width="520"
            height="520"
          />
          <div className="dish-picker" aria-label="Choose a dish preview">
            {dishes.map((dish, i) => (
              <button
                key={dish.name}
                className={
                  i === selected ? "dish-option selected" : "dish-option"
                }
                onClick={() => setSelected(i)}
                aria-pressed={i === selected}
                aria-label={`Preview ${dish.name}`}
              >
                <img src={dish.image} alt="" width="60" height="60" />
              </button>
            ))}
            <div>
              <span className="picker-caption">ON THE TABLE</span>
              <p aria-live="polite">{dishes[selected].name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
