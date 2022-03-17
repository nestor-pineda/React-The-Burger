import "../scss/components/_single-product-info.scss";

const SingleProductInfo = ({ apiData }) => {
  console.log(apiData.image);

  return (
    <div className="single-product">
      <div className="single-product__left"></div>
      <div className="single-product__center">
        <div className="single-product__col single-product__col--border">
          <img className="single-product__img" src={`/images/${apiData.image}.jpg`} alt="single menu item" />
        </div>
        <div className="single-product__col">
          <div className="single-product__info">
            <h3 className="single-product__title">{apiData.name}</h3>
            <h3 className="single-product__price">{apiData.prize}€</h3>
            <p className="single-product__paragraph">{apiData.description}</p>
            <h5 className="single-product__subtitle">Allergens</h5>
            <div className="single-product__allergens">
              <img className="single-product__allergen-img" src={`/images/alergenos/${apiData.allergens}.png`} alt="alergenos" />
            </div>
          </div>
        </div>
      </div>

      <div className="single-product__right"></div>
    </div>
  );
};

export default SingleProductInfo;
