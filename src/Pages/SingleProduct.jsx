import { useParams } from "react-router-dom";
import SingleProductInfo from "../Components/SingleProductInfo";
import UserData from "../Components/UserData";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <>
      <SingleProductInfo />
      item id {id}
      <h1>Carrousel</h1>
      <UserData />
    </>
  );
};

export default SingleProduct;
