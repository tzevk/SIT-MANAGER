import { useEffect, useState } from "react";
import { 
  MdDashboard, 
  MdLibraryBooks, 
  MdSupervisorAccount, 
  MdSettings, 
  MdExitToApp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdSchool
} from "react-icons/md";
import "../styles/components/Sidebar.css";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [expandedMenus, setExpandedMenus] = useState({});

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

  const toggleSubmenu = (itemId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
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
      hasSubmenu: true,
      submenu: [
        {
          id: "book-issue",
          label: "Book Issue",
          path: "/library/book-issue"
        },
        {
          id: "return-book", 
          label: "Return Book",
          path: "/library/return-book"
        }
      ]
    },
    { 
      id: "training", 
      icon: MdSchool, 
      label: "Employee Training",
      hasSubmenu: true,
      submenu: [
        {
          id: "training-plan",
          label: "Employee Training Plan",
          path: "/training/plan"
        },
        {
          id: "training-record", 
          label: "Employee Training Record",
          path: "/training/record"
        }
      ]
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
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;
            const isExpanded = expandedMenus[item.id];
            
            return (
              <li key={index} className={`sidebar-item ${item.hasSubmenu ? 'has-submenu' : ''}`}>
                {item.onClick ? (
                  <button 
                    onClick={item.onClick} 
                    className={`sidebar-link sidebar-button ${isActive ? 'active' : ''}`}
                  >
                    <IconComponent className="sidebar-icon" />
                    <span className="sidebar-label">{item.label}</span>
                  </button>
                ) : item.hasSubmenu ? (
                  <>
                    <button 
                      onClick={() => toggleSubmenu(item.id)}
                      className={`sidebar-link sidebar-button ${isActive ? 'active' : ''}`}
                    >
                      <IconComponent className="sidebar-icon" />
                      <span className="sidebar-label">{item.label}</span>
                      {isExpanded ? 
                        <MdKeyboardArrowDown className="submenu-arrow" /> : 
                        <MdKeyboardArrowRight className="submenu-arrow" />
                      }
                    </button>
                    {isExpanded && (
                      <ul className="sidebar-submenu">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="sidebar-subitem">
                            <a 
                              href={subItem.path}
                              className="sidebar-sublink"
                              onClick={() => setActiveItem(subItem.id)}
                            >
                              <span className="sidebar-sublabel">{subItem.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
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