import HeroHome from "../components/HeroHome";
import Reservation from "../components/Reservation";
import Introduction from "../components/Introduction";
import Title from "../components/Title";
import ImageGallery from "../components/ImageGallery";

const Home = () => {
  const titleText = "The Gallery"; // Sets the title text
  const titleBg = "greenBg"; // sets the title BG

  return (
    <>
      <HeroHome />
      <Reservation />
      <Introduction />
      <Title titleText={titleText} titleBg={titleBg} />
      <ImageGallery />
    </>
  );
};

export default Home;
