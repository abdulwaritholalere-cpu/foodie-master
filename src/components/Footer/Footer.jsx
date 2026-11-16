import Logo from "../../assets/food-logo.png";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a className="brand" href="#home">
              <img src={Logo} alt="" width="40" height="40" />
              foodie<span>.</span>
            </a>
            <p>
              A little spice. A lot of soul.
              <br />
              Find your next favourite plate.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#services">Explore the menu</a>
            <a href="#about">About Foodie</a>
            <a href="#questions">Good to know</a>
            <a href="#home">Back to top ↑</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Foodie. All rights reserved.</span>
          <span>Good food. Great mood.</span>
        </div>
      </div>
    </footer>
  );
}
