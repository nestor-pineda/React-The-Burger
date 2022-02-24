import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import ImageGallery from "./ImageGallery";
import Introduction from "./Introduction";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Title />
      <ImageGallery />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
