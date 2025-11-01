import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/components/Navbar.css";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "General Master",
      submenu: [
        "Discipline",
        "Qualification", 
        "Bank",
        "Fees Notes",
        "Holiday",
        "Location",
        "Extention",
        "Rack",
        "Material Category",
        "Vendor Type Master",
        "Vendor Master",
        "Material Price",
        "TDS",
        "Tax",
        "Salary Master",
        "Project Master",
        "MLWF Master",
        "QMA Master"
      ]
    },
    {
      name: "Masters",
      submenu: [
        "Course",
        "Annual Batch",
        "Batch Category",
        "Batch",
        "Status",
        "Book Code",
        "College",
        "Employee",
        "Library Book",
        "Faculty",
        "Employee Profession Tax",
        "Account Head",
        "Assets",
        "Asset Category"
      ]
    },
    {
      name: "Admission Activity",
      submenu: [
        "Inquiry",
        "Online Admission",
        "Admission",
        "Student",
        "Corporate Inquiry"
      ]
    },
    {
      name: "Daily Activities",
      submenu: [
        "Allot Roll Number",
        "Lecture Taken",
        "Assignments Taken",
        "Unit Test Taken",
        "Viva / MOC Taken",
        "Final Exam Taken",
        "Generate Final Result",
        "Faculty Working Hours",
        "FeedBack1",
        "FeedBack2",
        "Site Visit"
      ]
    },
    {
      name: "Report",
      submenu: [
        "Inquiry",
        "Online Studentss",
        "Full Attendance Report",
        "Student Batch Wise",
        "Student Report",
        "Batch Record",
        "Site Visit List",
        "Corporate Inquiry",
        "Corporate Record",
        "College Follow Up",
        "Convocation Guest List",
        "Yearly Mock",
        "Annual Batch Plan",
        "Final Exam",
        "Fees Report",
        "SMS / Email Send Report",
        "Service Tax Report On Fees",
        "Lecture Report",
        "Feedback Analysis Lecture Wise",
        "New FeedBack Analysis",
        "Student Search for Interview",
        "Batch Analysis Report",
        "Payment Collection Report",
        "Faculty Salary Report",
        "Faculty Monthly Statement",
        "Inquiry Report"
      ]
    },
    {
      name: "Account Master",
      submenu: [
        "Fees Details",
        "Purchase Material",
        "Faculty Payment",
        "Cash Voucher",
        "Stock View",
        "Material Consumption",
        "Employee Salary",
        "Employee Attendance",
        "Employee Loan",
        "Batch Left",
        "Batch Moving",
        "Batch Transfer",
        "Batch Cancellation"
      ]
    },
    {
      name: "Utility",
      submenu: [
        "Festival Photo Upload",
        "Notice Board",
        "MASS SMS",
        "Mass Email",
        "Upload Event Photo",
        "Upload Testmonial Photo",
        "Upload Banner Image",
        "Export Contacts",
        "QMS Does",
        "Mass WhatsApp",
        "Task Managements",
        "Email Master"
      ]
    },
    {
      name: "Placement",
      submenu: [
        "Consultancy Master",
        "CV Shortlisted",
        "Latest CV Updated",
        "Convocation Guest List",
        "Consultancy Report",
        "Student Placement Report",
        "View Student CV Folder",
        "Company Requirment Master",
        "Shortlisted By SIT",
        "Shortlisted By Company"
      ]
    }
  ];

  // Split menu items for left and right sides
  const midPoint = Math.ceil(menuItems.length / 2);
  const leftMenuItems = menuItems.slice(0, midPoint);
  const rightMenuItems = menuItems.slice(midPoint);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleMenuClick = (menuItem) => {
    // Convert menu item name to route
    
    // Handle specific menu items
    switch(menuItem) {
      case 'Discipline':
        navigate('/discipline');
        break;
      case 'Inquiry':
        navigate('/inquiry');
        break;
      default:
        console.log(`Navigation to ${menuItem} not yet implemented`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <ul className="navbar-menu">
            {leftMenuItems.map((item, index) => (
              <li 
                key={index} 
                className={`navbar-item ${item.submenu ? 'has-dropdown' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="navbar-link">
                  {item.name}
                  {item.submenu && <span className="dropdown-indicator">•</span>}
                </a>
                {item.submenu && (
                  <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="dropdown-item">
                        <a 
                          href="#" 
                          className="dropdown-link"
                          onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick(subItem);
                          }}
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-center">
          <div className="navbar-logo">
            <img src={logo} alt="SIT Logo" className="navbar-logo-img" />
          </div>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            {rightMenuItems.map((item, index) => {
              const rightIndex = index + leftMenuItems.length; // Adjust index for right side
              return (
                <li 
                  key={rightIndex} 
                  className={`navbar-item ${item.submenu ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => handleMouseEnter(rightIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="#" className="navbar-link">
                    {item.name}
                    {item.submenu && <span className="dropdown-indicator">•</span>}
                  </a>
                  {item.submenu && (
                    <ul className={`dropdown-menu ${activeDropdown === rightIndex ? 'show' : ''}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="dropdown-item">
                          <a 
                            href="#" 
                            className="dropdown-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleMenuClick(subItem);
                            }}
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
