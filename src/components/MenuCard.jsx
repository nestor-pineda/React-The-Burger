import "../scss/components/_menu-card.scss";

const MenuCard = () => {
  return (
    <div className="menu-card">
      <div className="menu-card__title">
        <h5>Supreme Burger</h5>
      </div>
      <div className="menu-card_image" style={{ backgroundImage: `url(images/burgers/burger-1.jpg)` }}></div>
      <div className="menu-card__price menu-card__price--green">
        <h5>14.95€</h5>
      </div>
    </div>
  );
};

export default MenuCard;
