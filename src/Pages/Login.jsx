import "../scss/pages/login.scss";

const Login = (props) => {
  return (
    <div className="container">
      <div className="formContainer">
        <h1>Login Page</h1>

        <form>
          <div className="loginForm">
            <div className="loginFormItem">
              <label htmlFor="email">Username</label>
              <input type="text" id="email" />
            </div>
            <div className="loginFormItem">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </div>
          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
