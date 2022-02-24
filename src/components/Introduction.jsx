import "../scss/components/_introduction.scss";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction__left"></div>
      <div className="introduction__center">
        <div className="introduction__col">
          <h3 className="intro-title">The Restaurant</h3>
          <img className="intro-img" src="images/restaurant.jpg" alt="introduction" />
        </div>
        <div className="introduction__col">
          <h3 className="intro-title">The Story</h3>
          <p className="intro-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident, reiciendis ullam accusamus, adipisci accusantium repellat, sint modi ipsam reprehenderit error! Soluta, officiis! Odit facere temporibus officiis hic iusto id!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident, reiciendis ullam accusamus, adipisci accusantium repellat, sint modi ipsam reprehenderit error! Soluta, officiis! Odit facere temporibus officiis hic iusto id!
          </p>
        </div>
      </div>
      <div className="introduction__right"></div>
    </div>
  );
};

export default Introduction;
