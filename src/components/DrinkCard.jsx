import "../scss/components/_menu-card.scss";

const BurgerCard = ({ drinks }) => {
  return (
    <>
      {drinks.map((item) => {
        return (
          <div className="menu-card" key={item.id}>
            <div className="menu-card__title">
              <h5>{item.title}</h5>
            </div>
            <div className="menu-card_image" style={{ backgroundImage: `url(images/bebidas/${item.image})` }}></div>
            <div className="menu-card__price menu-card__price--green">
              <h5>{item.price}€</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BurgerCard;