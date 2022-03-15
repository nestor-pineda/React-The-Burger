import React from "react";
import AliceCarousel from "react-alice-carousel";
import useFetch from "../CustomHooks/useFetch";
import Spinner from "./Spinner";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/images/burgers/burger-1.jpg" onDragStart={handleDragStart} alt="carousel" />,
  <img src="/images/burgers/burger-1.jpg" onDragStart={handleDragStart} alt="carousel" />,
  <img src="/images/burgers/burger-1.jpg" onDragStart={handleDragStart} alt="carousel" />,
];

const Carousel = ({ apiData }) => {
  // const { apiData, loading, error } = useFetch("http://localhost:8000/carta");

  return (
    <>
      <AliceCarousel mouseTracking items={items} />
    </>
  );
};

export default Carousel;
