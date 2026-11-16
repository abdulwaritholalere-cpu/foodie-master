import image from "../../assets/biryani4.png";
import { FiArrowUpRight } from "react-icons/fi";
export default function Banner() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="wrap about-grid">
        <div className="about-image">
          <img
            src={image}
            alt="A colourful plate of biryani"
            width="440"
            height="440"
            loading="lazy"
          />
          <span className="round-note">
            GOOD FOOD
            <br />
            GOOD MOOD
          </span>
        </div>
        <div>
          <p className="eyebrow">Welcome to the Foodie zone</p>
          <h2 id="about-title">
            Some things are
            <br />
            better <em>with biryani.</em>
          </h2>
          <p className="about-copy">
            The first hint of spice. The aroma of fragrant rice. The joy of a
            plate you can’t wait to tuck into. Foodie celebrates the simple
            pleasure of a good meal.
          </p>
          <p className="about-copy">
            Whether you’re revisiting a familiar favourite or exploring a
            different plate, start here and let your appetite lead the way.
          </p>
          <a className="button" href="#services">
            Discover the menu <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
