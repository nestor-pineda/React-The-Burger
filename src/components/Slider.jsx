import Carousel from "react-bootstrap/Carousel";
import "../scss/components/_slider.scss";

const Slider = () => {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <img className="c-slide d-block w-100" src="images/home.jpg" alt="The Burger" />
        <Carousel.Caption>
          <h1>Tasty and Healthy</h1>
          <div className="line"></div>
          <p>Consciously made with organic ingredients</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="c-slide d-block w-100" src="images/home-2.jpg" alt="The Burger" />
        <Carousel.Caption>
          <h1>Tasty and Healthy</h1>
          <div className="line"></div>
          <p>Consciously made with organic ingredients</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="c-slide d-block w-100" src="images/home-3.jpg" alt="The Burger" />
        <Carousel.Caption>
          <h1>Tasty and Healthy</h1>
          <div className="line"></div>
          <p>Consciously made with organic ingredients</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
