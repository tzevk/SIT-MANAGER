import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MdArrowBack,
  MdSearch,
  MdEdit,
  MdDelete,
  MdVisibility,
  MdFilterList
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/CorporateInquiry.css";

export default function CorporateInquiry() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");


  // Sample corporate inquiry data - will be replaced with actual data
  const [corporateInquiries, setCorporateInquiries] = useState([
    {
      id: 1,
      inquirer: "ABC Corporation Ltd",
      course: "Advanced Engineering Training",
      email: "hr@abccorp.com",
      status: "Active"
    }
  ]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleAdd = () => {
    navigate('/add-corporate-inquiry');
  };



  const handleView = (inquiry) => {
    navigate('/corporate-inquiry-details', { 
      state: { 
        inquiry: inquiry, 
        mode: 'view' 
      } 
    });
  };

  const handleEdit = (inquiry) => {
    navigate('/corporate-inquiry-details', { 
      state: { 
        inquiry: inquiry, 
        mode: 'edit' 
      } 
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this corporate inquiry?')) {
      setCorporateInquiries(corporateInquiries.filter(inquiry => inquiry.id !== id));
    }
  };

  return (
    <div className="corporate-inquiry-container">
      <Navbar />
      <Sidebar />
      <main className="corporate-inquiry-main">
        {/* Header */}
        <div className="corporate-inquiry-header">
          <div className="header-left">
            <button onClick={handleBack} className="back-btn">
              <MdArrowBack />
            </button>
            <h1 className="page-title">List Of Corporate Inquiry</h1>
          </div>
          <div className="header-right">
            <button onClick={handleAdd} className="btn-add-header">
              Add +
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="search-section">
          <div className="search-controls">
            <button className="btn-filters">
              <MdFilterList />
              FILTERS
            </button>
            
            <button className="btn-export">
              EXPORT
            </button>
            
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="corporate-inquiry-content">
          <div className="table-card">

            {/* Data Table */}
            <div className="table-container">
              <table className="corporate-inquiry-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Inquirer</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {corporateInquiries.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="no-data">
                        No corporate inquiry records found. Click "Add +" to create a new inquiry.
                      </td>
                    </tr>
                  ) : (
                    corporateInquiries.map((inquiry) => (
                      <tr key={inquiry.id}>
                        <td>{inquiry.id}</td>
                        <td>{inquiry.inquirer}</td>
                        <td>{inquiry.course}</td>
                        <td>{inquiry.email}</td>
                        <td>
                          <div className="action-buttons">
                            <button
                              type="button"
                              onClick={() => handleView(inquiry)}
                              className="btn-action view"
                              title="View Inquiry Details"
                              aria-label="View Inquiry Details"
                            >
                              ⚬
                            </button>
                            <button
                              type="button"
                              onClick={() => handleEdit(inquiry)}
                              className="btn-action edit"
                              title="Edit Inquiry Information"
                              aria-label="Edit Inquiry Information"
                            >
                              ✎
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(inquiry.id)}
                              className="btn-action delete"
                              title="Delete Inquiry Record"
                              aria-label="Delete Inquiry Record"
                            >
                              ✕
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {corporateInquiries.length > 0 && (
              <div className="pagination">
                <span className="pagination-info">
                  1–{corporateInquiries.length} of {corporateInquiries.length}
                </span>
                <div className="pagination-controls">
                  <button className="pagination-btn" disabled>‹</button>
                  <button className="pagination-btn" disabled>›</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}