import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MdArrowBack,
  MdSearch,
  MdEdit,
  MdDelete,
  MdVisibility
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/Admission.css";

export default function Admission() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  // Sample admission data - will be replaced with actual data
  const [admissions, setAdmissions] = useState([]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleAdd = () => {
    navigate('/add-admission');
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching:", searchTerm, "Filter:", searchFilter);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchFilter("");
  };

  const handleView = (admission) => {
    navigate('/personal-info', { 
      state: { 
        admission: admission, 
        mode: 'view' 
      } 
    });
  };

  const handleEdit = (admission) => {
    navigate('/personal-info', { 
      state: { 
        admission: admission, 
        mode: 'edit' 
      } 
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this admission?')) {
      setAdmissions(admissions.filter(admission => admission.id !== id));
    }
  };

  return (
    <div className="admission-container">
      <Navbar />
      <Sidebar />
      <main className="admission-main">
        {/* Header */}
        <div className="admission-header">
          <div className="header-left">
            <button onClick={handleBack} className="back-btn">
              <MdArrowBack />
            </button>
            <h1 className="page-title">Admission Listing</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="admission-content">
          <div className="table-card">
            <div className="content-header">
              <div className="management-info">
                <h2 className="management-title">
                  Admission Management
                </h2>
                <span className="records-count">({admissions.length} records found)</span>
              </div>

              <div className="search-section">
                <div className="search-controls">
                  <input
                    type="text"
                    placeholder="Search admissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <select
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="search-filter"
                  >
                    <option value="">Select Search</option>
                    <option value="studentName">Student Name</option>
                    <option value="courseName">Course Name</option>
                    <option value="batchCode">Batch Code</option>
                    <option value="paymentType">Payment Type</option>
                    <option value="status">Status</option>
                  </select>
                  <button onClick={handleSearch} className="btn-search">
                    <MdSearch />
                    Search
                  </button>
                  <button onClick={handleClear} className="btn-clear">
                    Clear
                  </button>
                  <button onClick={handleAdd} className="btn-add">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="table-container">
              <table className="admission-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Student Name</th>
                  <th>Course Name</th>
                  <th>Admission Date</th>
                  <th>Batch Code</th>
                  <th>Payment Type</th>
                  <th>Total Fees</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {admissions.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="no-data">
                      No admission records found. Click "Add" to create a new admission.
                    </td>
                  </tr>
                ) : (
                  admissions.map((admission) => (
                    <tr key={admission.id}>
                      <td>{admission.id}</td>
                      <td>{admission.studentName}</td>
                      <td>{admission.courseName}</td>
                      <td>{admission.admissionDate}</td>
                      <td>{admission.batchCode}</td>
                      <td>{admission.paymentType}</td>
                      <td>{admission.totalFees}</td>
                      <td>
                        <span className={`status-badge ${admission.status.toLowerCase()}`}>
                          {admission.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            onClick={() => handleView(admission)}
                            className="btn-action view"
                            title="View"
                          >
                            <MdVisibility />
                          </button>
                          <button
                            onClick={() => handleEdit(admission)}
                            className="btn-action edit"
                            title="Edit"
                          >
                            <MdEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(admission.id)}
                            className="btn-action delete"
                            title="Delete"
                          >
                            <MdDelete />
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
            {admissions.length > 0 && (
              <div className="pagination">
                <span className="pagination-info">
                  1–{admissions.length} of {admissions.length}
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