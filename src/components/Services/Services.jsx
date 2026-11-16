import image1 from "../../assets/biryani3.png";
import image2 from "../../assets/biryani5.png";
import image3 from "../../assets/biryani2.png";
const dishes = [
  {
    image: image1,
    name: "Classic biryani",
    tag: "The comfort classic",
    text: "A comforting plate of aromatic rice and warming spices, with all the familiar flavours of biryani.",
    detail:
      "A great place to start exploring the menu. Confirm the available protein options and spice level with the restaurant.",
  },
  {
    image: image2,
    name: "House biryani",
    tag: "A little extra flavour",
    text: "A generous biryani plate with fragrant rice and a rich, spice-forward character.",
    detail:
      "Explore the house take on a favourite dish. Ask the restaurant about today's ingredients and accompaniments.",
  },
  {
    image: image3,
    name: "Special biryani",
    tag: "Something to savour",
    text: "An inviting plate for the days when only a satisfying, full-flavoured biryani will do.",
    detail:
      "Availability and preparation may vary. Confirm the current special, ingredients and portion size before ordering.",
  },
];
export default function Services() {
  return (
    <section
      className="section menu-section"
      id="services"
      aria-labelledby="menu-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your flavour</p>
            <h2 id="menu-title">
              Big on flavour.
              <br />
              <em>Easy to love.</em>
            </h2>
          </div>
          <p>
            A few favourites for your next food mood.
            <br />
            Take a closer look and find your kind of plate.
          </p>
        </div>
        <div className="dish-grid">
          {dishes.map((dish, i) => (
            <article className="dish-card" key={dish.name}>
              <div className="dish-image">
                <span className="dish-number">0{i + 1}</span>
                <img
                  src={dish.image}
                  alt={`${dish.name} with spiced rice`}
                  width="300"
                  height="300"
                  loading="lazy"
                />
              </div>
              <div className="dish-copy">
                <p className="eyebrow">{dish.tag}</p>
                <h3>{dish.name}</h3>
                <p>{dish.text}</p>
                <details>
                  <summary>Dish details</summary>
                  <p>{dish.detail}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-disclaimer">
          Menu showcase · Online ordering is currently unavailable. Please
          confirm ingredients and allergens before ordering.
        </p>
      </div>
    </section>
  );
}
