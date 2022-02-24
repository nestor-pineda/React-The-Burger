import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import ImageGallery from "./ImageGallery";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Title />
      <ImageGallery />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
