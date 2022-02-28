import "../scss/components/_single-product-info.scss";

const SingleProductInfo = () => {
  return (
    <div className="single-product">
      <div className="single-product__left"></div>
      <div className="single-product__center">
        <div className="single-product__col single-product__col--border">
          <img className="single-product__img" src="images/home-3.jpg" alt="hero other page" />
        </div>
        <div className="single-product__col">
          <div className="single-product__info">
            <h3 className="single-product__title">The Supreme Burger</h3>
            <h3 className="single-product__price">13.95€</h3>
            <p className="single-product__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat accusamus eaque rem optio recusandae aperiam nobis nihil qui, cumque laboriosam possimus sapiente animi officia. Esse optio aspernatur quas eum?
            </p>
            <h5 className="single-product__subtitle">Allergens</h5>
            <div className="single-product__allergens">
              <img className="single-product__allergen-img" src="images/allergens/egg.png" alt="egg" />
              <img className="single-product__allergen-img" src="images/allergens/gluten.png" alt="egg" />
            </div>
          </div>
        </div>
      </div>
      <div className="single-product__right"></div>
    </div>
  );
};

export default SingleProductInfo;
