import "../scss/components/_spinner.scss";

const Spinner = ({ spinnerGrid }) => {
  return (
    <div className={`spinner-wrapper ${spinnerGrid}`}>
      <div className="breakout"></div>
    </div>
  );
};

export default Spinner;
