import "../scss/components/_title.scss";

const Title = ({ titleText, titleBg }) => {
  return (
    <div className="title">
      <div className="title__left"></div>
      <div className="title__center">
        <div className={titleBg}>
          <h2>{titleText}</h2>
        </div>
      </div>
      <div className="title__right"></div>
    </div>
  );
};

export default Title;
