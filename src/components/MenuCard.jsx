import { Link } from "react-router-dom";
import "../scss/components/_menu-card.scss";

const BurgerCard = ({ apiData, bgColor }) => {
  return (
    <>
      {apiData.map((item) => {
        console.log(item.image);
        return (
          <Link className="card-link" key={item.idPlato} to={`/single/${item.idPlato}`}>
            <div className="menu-card">
              <div className="menu-card__title">
                <h5>{item.name}</h5>
              </div>
              <div className="menu-card_image" style={{ backgroundImage: `url(/images/${item.image}.jpg)` }}></div>
              <div className={bgColor}>
                <h5>{item.prize}€</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BurgerCard;

// ""
// ${item.image})
