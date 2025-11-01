import { useEffect, useState } from "react";
import { 
  MdDashboard, 
  MdLibraryBooks, 
  MdSupervisorAccount, 
  MdSettings, 
  MdExitToApp 
} from "react-icons/md";
import logo from "../assets/logo.png";
import "../styles/components/Sidebar.css";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    const dashboardMain = document.querySelector('.dashboard-main');
    
    const handleMouseEnter = () => {
      if (dashboardMain) {
        dashboardMain.style.marginLeft = '240px';
      }
    };
    
    const handleMouseLeave = () => {
      if (dashboardMain) {
        dashboardMain.style.marginLeft = '90px';
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
    { 
      id: "dashboard", 
      icon: MdDashboard, 
      label: "Dashboard", 
      path: "/dashboard" 
    },
    { 
      id: "library", 
      icon: MdLibraryBooks, 
      label: "Library Management", 
      path: "/library" 
    },
    { 
      id: "role", 
      icon: MdSupervisorAccount, 
      label: "Role Right", 
      path: "/role-right" 
    },
    { 
      id: "settings", 
      icon: MdSettings, 
      label: "Settings", 
      path: "/settings" 
    },
    { 
      id: "logout", 
      icon: MdExitToApp, 
      label: "Logout", 
      path: "#", 
      onClick: handleLogout 
    },
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
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={index} className="sidebar-item">
                {item.onClick ? (
                  <button 
                    onClick={item.onClick} 
                    className={`sidebar-link sidebar-button ${isActive ? 'active' : ''}`}
                  >
                    <IconComponent className="sidebar-icon" />
                    <span className="sidebar-label">{item.label}</span>
                  </button>
                ) : (
                  <a 
                    href={item.path} 
                    className={`sidebar-link ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <IconComponent className="sidebar-icon" />
                    <span className="sidebar-label">{item.label}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}