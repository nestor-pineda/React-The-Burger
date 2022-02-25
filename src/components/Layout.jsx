import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import ImageGallery from "./ImageGallery";
import Introduction from "./Introduction";
import Reservation from "./Reservation";
import HeroHome from "./HeroHome";
import MenuCard from "./MenuCard";
import MenuSection from "./MenuSection";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MenuSection />
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
