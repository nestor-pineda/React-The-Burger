import "../scss/components/_title.scss";

const Title = ({ titleText }) => {
  return (
    <div className="title">
      <div className="title__left"></div>
      <div className="title__center">
        <h2>{titleText}</h2>
      </div>
      <div className="title__right"></div>
    </div>
  );
};

export default Title;
