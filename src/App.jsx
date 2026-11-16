import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Banner />
        <section
          className="section wrap faq"
          id="questions"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 id="faq-title">
              A little more
              <br />
              before you dig in.
            </h2>
          </div>
          <div>
            <details>
              <summary>How do I explore the menu?</summary>
              <p>
                Browse our dishes below and open “Dish details” to learn more
                about each one.
              </p>
            </details>
            <details>
              <summary>Can I order through this website?</summary>
              <p>
                This website is a menu showcase. Online ordering, payments and
                delivery booking are not currently available.
              </p>
            </details>
            <details>
              <summary>What if I have a food allergy?</summary>
              <p>
                Ingredients and preparation can vary. Confirm ingredients,
                allergens and dietary requirements with the restaurant before
                ordering.
              </p>
            </details>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
