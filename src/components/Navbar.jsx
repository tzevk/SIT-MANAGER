import "../styles/components/Navbar.css";

export default function Navbar() {
  const menuItems = [
    "General Master",
    "Masters", 
    "Admission Activity",
    "Daily Activities",
    "Report",
    "Library Management",
    "Role Right",
    "Employee Training",
    "Account Master",
    "Utility",
    "Placement"
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-center">
          <ul className="navbar-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <a href="#" className="navbar-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
