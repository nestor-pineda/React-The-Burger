import HeroHome from "../Components/HeroHome";
import Reservation from "../Components/Reservation";
import Introduction from "../Components/Introduction";
import Title from "../Components/Title";
import ImageGallery from "../Components/ImageGallery";

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
