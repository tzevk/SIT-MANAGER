import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MdArrowBack, 
  MdEdit, 
  MdDelete, 
  MdSearch,
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdVisibility,
  MdFilterList,
  MdExpandMore
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/Inquiry.css";

export default function Inquiry() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      studentName: "John Smith",
      courseName: "Computer Science",
      inquiryDate: "2024-01-15",
      discussion: "Interested in full-time course, needs more info about fees and duration",
      mobile: "+91 9876543210",
      email: "john.smith@email.com",
      discipline: "Engineering",
      inquiryType: "Walk-in",
      status: "New"
    }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [filteredInquiries, setFilteredInquiries] = useState(inquiries);

  useEffect(() => {
    let filtered = inquiries.filter(inquiry => {
      if (!searchTerm) return true;
      
      const searchLower = searchTerm.toLowerCase();
      
      // If no specific filter is selected, search in all fields
      if (filterBy === "all") {
        return inquiry.studentName?.toLowerCase().includes(searchLower) ||
               (inquiry.courseName && inquiry.courseName.toLowerCase().includes(searchLower)) ||
               (inquiry.email && inquiry.email.toLowerCase().includes(searchLower)) ||
               (inquiry.mobile && inquiry.mobile.includes(searchTerm)) ||
               (inquiry.discipline && inquiry.discipline.toLowerCase().includes(searchLower)) ||
               (inquiry.inquiryType && inquiry.inquiryType.toLowerCase().includes(searchLower)) ||
               (inquiry.discussion && inquiry.discussion.toLowerCase().includes(searchLower)) ||
               (inquiry.status && inquiry.status.toLowerCase().includes(searchLower));
      }
      
      // Search in specific field based on filter selection
      switch (filterBy) {
        case "name":
          return inquiry.studentName?.toLowerCase().includes(searchLower);
        case "course":
          return inquiry.courseName?.toLowerCase().includes(searchLower);
        case "email":
          return inquiry.email?.toLowerCase().includes(searchLower);
        case "mobile":
          return inquiry.mobile?.includes(searchTerm);
        case "discipline":
          return inquiry.discipline?.toLowerCase().includes(searchLower);
        case "inquiryType":
          return inquiry.inquiryType?.toLowerCase().includes(searchLower);
        default:
          return true;
      }
    });
    
    setFilteredInquiries(filtered);
  }, [searchTerm, filterBy, inquiries]);

  const handleSearch = () => {
    console.log('Search triggered:', { searchTerm, filterBy });
    // Search is already handled by useEffect, this is for additional search functionality if needed
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilterBy("all");
    console.log('Search cleared');
  };

  const handleAdd = () => {
    console.log('Add new inquiry');
    alert('Add new inquiry functionality');
  };

  const handleView = (inquiry) => {
    // Placeholder for view functionality
    console.log('View inquiry:', inquiry);
    alert(`Viewing inquiry for ${inquiry.studentName}`);
  };

  const handleEdit = (inquiry) => {
    // Placeholder for edit functionality if needed in future
    console.log('Edit inquiry:', inquiry);
    alert(`Editing inquiry for ${inquiry.studentName}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
    }
  };



  return (
    <div className="inquiry-container">
      <Navbar />
      <Sidebar />
      
      <main className="inquiry-main">
        {/* Header */}
        <div className="inquiry-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate('/dashboard')}>
              <MdArrowBack />
            </button>
            <h1 className="page-title">Inquiry Listing</h1>
          </div>
        </div>



        {/* Table Section */}
        <div className="table-section">
          <div className="table-card">
            <div className="table-header">
              <div className="table-title">
                <h2>Inquiry Management</h2>
                <span className="record-count">({filteredInquiries.length} records found)</span>
              </div>
              
              <div className="table-actions">
                <div className="search-section">
                  <div className="search-box">
                    <MdSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder={
                        filterBy === "name" ? "Search by student name..." :
                        filterBy === "course" ? "Search by course name..." :
                        filterBy === "email" ? "Search by email address..." :
                        filterBy === "mobile" ? "Search by mobile number..." :
                        filterBy === "discipline" ? "Search by discipline..." :
                        filterBy === "inquiryType" ? "Search by inquiry type..." :
                        "Search inquiries..."
                      }
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>
                  
                  <div className="filter-dropdown">
                    <MdFilterList className="filter-icon" />
                    <select
                      value={filterBy}
                      onChange={(e) => setFilterBy(e.target.value)}
                      className="filter-select"
                    >
                      <option value="all">Select Search</option>
                      <option value="name">Name Wise</option>
                      <option value="course">Course Wise</option>
                      <option value="email">Email Wise</option>
                      <option value="mobile">Mobile Wise</option>
                      <option value="discipline">Discipline Wise</option>
                      <option value="inquiryType">Inquiry Type Wise</option>
                    </select>
                    <MdExpandMore className="dropdown-arrow" />
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button 
                    onClick={handleSearch}
                    className="btn-search"
                    title="Search"
                  >
                    <MdSearch />
                    Search
                  </button>
                  
                  <button 
                    onClick={handleClear}
                    className="btn-clear"
                    title="Clear"
                  >
                    Clear
                  </button>
                  
                  <button 
                    onClick={handleAdd}
                    className="btn-add"
                    title="Add New Inquiry"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="table-container">
              <table className="inquiry-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Inquiry Date</th>
                    <th>Discussion</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Discipline</th>
                    <th>Inquiry type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.length > 0 ? (
                    filteredInquiries.map((inquiry, index) => (
                      <tr key={inquiry.id}>
                        <td>{index + 1}</td>
                        <td className="student-name">{inquiry.studentName}</td>
                        <td className="course-name">{inquiry.courseName || '-'}</td>
                        <td className="inquiry-date">{inquiry.inquiryDate}</td>
                        <td className="discussion">{inquiry.discussion || '-'}</td>
                        <td className="mobile">{inquiry.mobile}</td>
                        <td className="email">{inquiry.email || '-'}</td>
                        <td className="discipline">{inquiry.discipline || '-'}</td>
                        <td className="inquiry-type">{inquiry.inquiryType}</td>
                        <td>
                          <span className={`status-badge status-${inquiry.status?.toLowerCase().replace(/\s+/g, '-') || 'new'}`}>
                            {inquiry.status || 'New'}
                          </span>
                        </td>
                        <td className="actions-cell">
                          <MdVisibility 
                            onClick={() => handleView(inquiry)}
                            className="action-icon view-icon"
                            title="View"
                          />
                          <MdEdit 
                            onClick={() => handleEdit(inquiry)}
                            className="action-icon edit-icon"
                            title="Edit"
                          />
                          <MdDelete 
                            onClick={() => handleDelete(inquiry.id)}
                            className="action-icon delete-icon"
                            title="Delete"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="no-data">
                        No inquiries found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}