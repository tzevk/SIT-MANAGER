import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
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
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back, {user.username}! Here's what's happening in your institution.</p>
        </div>

        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <h3>Total Students</h3>
                <div className="stat-icon blue">⊞</div>
              </div>
              <p className="stat-value">1,245</p>
              <p className="stat-change positive">↗ +12% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Total Teachers</h3>
                <div className="stat-icon green">♦</div>
              </div>
              <p className="stat-value">87</p>
              <p className="stat-change positive">↗ +5% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Active Courses</h3>
                <div className="stat-icon purple">⊡</div>
              </div>
              <p className="stat-value">42</p>
              <p className="stat-change neutral">→ No change</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Attendance Rate</h3>
                <div className="stat-icon orange">◈</div>
              </div>
              <p className="stat-value">94.2%</p>
              <p className="stat-change positive">↗ +2.1% from last week</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Pending Applications</h3>
                <div className="stat-icon red">◉</div>
              </div>
              <p className="stat-value">23</p>
              <p className="stat-change attention">⚠ Needs attention</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Library Books</h3>
                <div className="stat-icon teal">▦</div>
              </div>
              <p className="stat-value">8,456</p>
              <p className="stat-change positive">↗ +45 new books</p>
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">👤</div>
                  <div className="activity-content">
                    <p className="activity-title">New student registered</p>
                    <p className="activity-time">5 minutes ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">✅</div>
                  <div className="activity-content">
                    <p className="activity-title">Attendance submitted for Class 10A</p>
                    <p className="activity-time">1 hour ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📝</div>
                  <div className="activity-content">
                    <p className="activity-title">New course created: Advanced Mathematics</p>
                    <p className="activity-time">3 hours ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">👨‍🏫</div>
                  <div className="activity-content">
                    <p className="activity-title">Teacher profile updated</p>
                    <p className="activity-time">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Quick Actions</h3>
              <div className="quick-actions">
                <button className="action-btn">
                  <span className="action-icon">➕</span>
                  <span>Add Student</span>
                </button>
                <button className="action-btn">
                  <span className="action-icon">➕</span>
                  <span>Add Teacher</span>
                </button>
                <button className="action-btn">
                  <span className="action-icon">📋</span>
                  <span>Generate Report</span>
                </button>
                <button className="action-btn">
                  <span className="action-icon">📧</span>
                  <span>Send Announcement</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
