import "../scss/components/_user-data.scss";

const UserData = () => {
  return (
    <div className="user-data">
      <div className="user-data__left"></div>
      <div className="user-data__center">
        <div className="user-data__col">
          <h3 className="reservation-info__title">Reservation information</h3>
          <div className="reservation-info">
            <div className="reservation-info__texts">
              <p className="reservation-info__paragraph">
                Name: <span>Néstor</span>
              </p>
              <p className="reservation-info__paragraph">
                People: <span>2</span>
              </p>
              <p className="reservation-info__paragraph">
                Date: <span>24/03/2022</span>
              </p>
              <p className="reservation-info__paragraph">
                Time: <span>14:00</span>
              </p>
              <p className="reservation-info__paragraph">
                Phone: <span>667898345</span>
              </p>
              <p className="reservation-info__paragraph">
                Email: <span>nestor@gmail.com</span>
              </p>
            </div>
            <button>Cancel</button>
          </div>
        </div>
        <div className="user-data__col">
          <h3 className="reservation-info__title">User information</h3>
          <div className="change-data">
            <form className="change-data__form">
              <div className="change-data__left">
                <label className="change-data__lable">Name: </label>
                <input className="change-data__input" type="text" defaultValue="Nestor" />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                <button className="change-data__button">Update</button>
              </div>
            </form>

            <form className="change-data__form">
              <div className="change-data__left">
                <label className="change-data__lable">Email: </label>
                <input className="change-data__input" type="text" defaultValue="nestor@gmail.com" />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                <button className="change-data__button">Update</button>
              </div>
            </form>

            <form className="change-data__form">
              <div className="change-data__left">
                <label className="change-data__lable">Telephone: </label>
                <input className="change-data__input" type="text" defaultValue="123456789" />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                <button className="change-data__button">Update</button>
              </div>
            </form>

            <form className="change-data__form">
              <div className="change-data__left">
                <label className="change-data__lable">Password: </label>
                <input className="change-data__input" type="text" defaultValue="**********" />
              </div>
              <div className="change-data__right">
                <span className="material-icons change-data_edit-icon">edit</span>
                <button className="change-data__button">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="user-data__right"></div>
    </div>
  );
};

export default UserData;
