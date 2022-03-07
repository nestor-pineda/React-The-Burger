import HeroHome from "../Components/HeroHome";
import Reservation from "../Components/Reservation";
import Introduction from "../Components/Introduction";
import Title from "../Components/Title";
import ImageGallery from "../Components/ImageGallery";

const Home = () => {
  const titleText = "The Gallery";

  return (
    <>
      <HeroHome />
      <Reservation />
      <Introduction />
      <Title titleText={titleText} />
      <ImageGallery />
    </>
  );
};

export default Home;
