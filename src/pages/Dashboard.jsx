import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AnnualTargetsTable from "../components/AnnualTargetsTable";
import UpcomingBatchesTable from "../components/UpcomingBatchesTable";
import EnquiryReportBar from "../components/EnquiryReportBar";
import PlacementReportTable from "../components/PlacementReportTable";
import CourseBatchPieChart from "../components/CourseBatchPieChart";
import "../styles/pages/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar />
      {/* Main Content */}
      <main className="dashboard-main">
        <h1 className="dashboard-page-title">Dashboard</h1>
        {/* Dashboard Widgets using Flexbox */}
        <div className="dashboard-widgets">
            <div className="widget-card">
              <AnnualTargetsTable />
            </div>
            
            <div className="widget-card">
              <UpcomingBatchesTable />
            </div>
            
            <div className="widget-card">
              <EnquiryReportBar />
            </div>
            
            <div className="widget-card">
              <PlacementReportTable />
            </div>
            
            <div className="widget-card pie-chart-widget">
              <CourseBatchPieChart />
            </div>
          </div>
      </main>
    </div>
  );
}
