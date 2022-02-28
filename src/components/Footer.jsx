import { Link } from "react-router-dom";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__left"></div>
        <div className="footer__center">
          <div className="footer__col">
            <img className="logo" src="images/the-burger-logo.png" alt="burger logo" />
          </div>
          <div className="footer__col">
            <h3>Hear it First</h3>
          </div>
          <div className="footer__col">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/signin">signin</Link>
            </nav>
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
