import { Link } from "react-router-dom";
import "../scss/components/_menu-card.scss";

const CarouselCard = ({ apiData, bgColor }) => {

  return (
    <>
      {apiData.map((item) => {
        return (
          <Link key={item.id} to={`/single/${item.id}`}>
            <div className="menu-card">
              <div className="menu-card__title">
                <h5>{item.title}</h5>
              </div>
              <div className="menu-card_image" style={{ backgroundImage: `url(images/${item.image})` }}></div>
              <div className={bgColor}>
                <h5>{item.price}€</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CarouselCard;
