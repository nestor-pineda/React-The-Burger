import SingleProductInfo from "../Components/SingleProductInfo";
import UserData from "../Components/UserData";
import useFetch from "../CustomHooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);

  // const { apiData, loading, error } = useFetch("http://localhost:8000/carta/1");

  useEffect(() => {
    fetch("http://localhost:8000/carta/" + id)
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setApiData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {apiData && <SingleProductInfo apiData={apiData} />}

      {/* {loading && <div>Loading...</div>}
      {error && <div>{error}</div>} */}
      <h1>This is the singel product page with id: {id}</h1>

      <h1>Carrousel</h1>
      <UserData />
    </>
  );
};

export default SingleProduct;
