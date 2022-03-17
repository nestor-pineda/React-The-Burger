import SingleProductInfo from "../Components/SingleProductInfo";
import useFetch from "../CustomHooks/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Title from "../Components/Title";
import Spinner from "../Components/Spinner";

const SingleProduct = () => {
  const { id } = useParams();

  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta/" + id);

  const itemType = apiData;
  const titleText = "Related Products";
  const titleBg = "greenBg";
  const spinnerGrid = "spinnerGrid2";

  return (
    <>
      {apiData && <SingleProductInfo apiData={apiData[0]} />}
      {loading && <Spinner spinnerGrid={spinnerGrid} />}
      {error && <div>{error}</div>}
      <Title titleText={titleText} titleBg={titleBg} />
      {apiData && <Carousel itemType={itemType} />}
    </>
  );
};

export default SingleProduct;
