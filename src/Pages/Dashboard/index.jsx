import DashboardComponent from "../../Components/Dashboard/Index";
import Layout from '../../Layout/index';

const Dashboard = () => {
  return (
    <>
    <Layout />

      <div className="dashboard-wrapper">
        <DashboardComponent />
      </div>
    </>
  );
};

export default Dashboard;
