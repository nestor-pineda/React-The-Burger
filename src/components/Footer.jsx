import { Link } from "react-router-dom";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__left"></div>
        <div className="footer__center">
          <div className="footer__col">
            <img className="logo" src="/images/the-burger-logo.png" alt="burger logo" />
          </div>
          <div className="footer__col">
            <h3>Hear it first</h3>
            <div className="footer__input-icon-wrap">
              <input type="text" className="footer__input-with-icon" id="form-name" placeholder="Your email" />
              <button className="footer__input-icon">
                <span className="material-icons">arrow_right_alt</span>
              </button>
            </div>
          </div>
          <div className="footer__col">
            <nav className="footer__nav">
              <div className="footer__main-nav">
                <Link to="/" className="footer__link">
                  Home
                </Link>
                <Link to="/menu" className="footer__link">
                  Menu
                </Link>
                <Link to="/login" className="footer__link">
                  Login
                </Link>
              </div>
              <div className="footer__legal-nav">
                <Link to="/" className="footer__link">
                  Terms & Conditions
                </Link>
                <Link to="/" className="footer__link">
                  Cookie Policy
                </Link>
                <Link to="/" className="footer__link">
                  Privacy Policy
                </Link>
              </div>
            </nav>
            <p className="footer_copyright">2022 © All rights reserved</p>
          </div>
        </div>
        <div className="footer__right"></div>
      </div>
      <div className="post-footer">
        <div className="post-footer__left"></div>
        <div className="post-footer__center"></div>
        <div className="post-footer__right"></div>
      </div>
    </footer>
  );
};

export default Footer;
