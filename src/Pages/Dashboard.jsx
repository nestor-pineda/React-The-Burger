import "../scss/pages/dashboard.scss";

const Dashboard = () => {
  return (
    <div style={{ padding: 10 }}>
      <div className="dashboardPage">
        <h1>Dashboard</h1>
        <button className="logoutBtn">Logout</button>
      </div>
      <p>Welcome to the dashboard</p>
    </div>
  );
};

export default Dashboard;
