import SingleProductInfo from "../Components/SingleProductInfo";
import useFetch from "../CustomHooks/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "../Components/Carousel";
import { createContext } from "react";
import MenuCard from "../Components/MenuCard";

const SingleProduct = () => {
  const { id } = useParams();
  const { apiData, loading, error } = useFetch("https://the-burger-server.herokuapp.com/api/carta/" + id);

  const itemType = apiData;

  // console.log(itemType);

  return (
    <>
      {apiData && <SingleProductInfo apiData={apiData[0]} />}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h1>Carrousel</h1>
      {apiData && <Carousel itemType={itemType} />}
    </>
  );
};

export default SingleProduct;
