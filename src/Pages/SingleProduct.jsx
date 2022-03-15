import SingleProductInfo from "../Components/SingleProductInfo";
import useFetch from "../CustomHooks/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "../Components/Carousel";

const SingleProduct = () => {
  const { id } = useParams();

  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta/" + id);

  return (
    <>
      {apiData && <SingleProductInfo apiData={apiData[0]} />}

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <h1>Carrousel</h1>

      <Carousel apiData={apiData} />
    </>
  );
};

export default SingleProduct;
