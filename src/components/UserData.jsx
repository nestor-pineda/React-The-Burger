import "../scss/components/_user-data.scss";

const UserData = () => {
  return (
    <form className="change-data">
      <label className="change-data__lable">Name:</label>
      <input className="change-data_input" type="text" defaultValue="Nestor" />
      <button className="change-data__button">Change</button>
    </form>
  );
};

export default UserData;
