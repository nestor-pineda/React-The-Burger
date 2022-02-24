import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import ImageGallery from "./ImageGallery";
import Introduction from "./Introduction";
import Reservation from "./Reservation";
import HeroHome from "./HeroHome";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <Reservation />
      <Introduction />
      <Title />
      <ImageGallery />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
