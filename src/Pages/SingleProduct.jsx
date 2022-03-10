import SingleProductInfo from "../Components/SingleProductInfo";
import UserData from "../Components/UserData";

import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <>
      <SingleProductInfo id={id} />
      <h1>This is the singel product page with id: {id}</h1>

      <h1>Carrousel</h1>
      <UserData />
    </>
  );
};

export default SingleProduct;
