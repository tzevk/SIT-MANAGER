import { useEffect } from "react";
import logo from "../assets/logo.png";
import "../styles/components/Sidebar.css";

export default function Sidebar() {
  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    const dashboardMain = document.querySelector('.dashboard-main');
    
    const handleMouseEnter = () => {
      if (dashboardMain) {
        dashboardMain.style.marginLeft = '250px';
      }
    };
    
    const handleMouseLeave = () => {
      if (dashboardMain) {
        dashboardMain.style.marginLeft = '70px';
      }
    };
    
    if (sidebar) {
      sidebar.addEventListener('mouseenter', handleMouseEnter);
      sidebar.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        sidebar.removeEventListener('mouseenter', handleMouseEnter);
        sidebar.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const sidebarItems = [
    { icon: "dashboard", label: "Dashboard", path: "/dashboard" },
    { icon: "library", label: "Library Management", path: "/library" },
    { icon: "role", label: "Role Right", path: "/role-right" },
    { icon: "settings", label: "Settings", path: "/settings" },
    { icon: "logout", label: "Logout", path: "#", onClick: handleLogout },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <img src={logo} alt="SIT Logo" className="sidebar-logo" />
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {sidebarItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              {item.onClick ? (
                <button onClick={item.onClick} className="sidebar-link sidebar-button">
                  <span className={`sidebar-icon icon-${item.icon}`}></span>
                  <span className="sidebar-label">{item.label}</span>
                </button>
              ) : (
                <a href={item.path} className="sidebar-link">
                  <span className={`sidebar-icon icon-${item.icon}`}></span>
                  <span className="sidebar-label">{item.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}