import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Title />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
