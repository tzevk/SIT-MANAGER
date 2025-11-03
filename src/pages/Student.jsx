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
import "../styles/pages/Student.css";

export default function Student() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  // Sample student data - will be replaced with actual data
  const [students, setStudents] = useState([
    {
      id: 1,
      studentId: "ST001",
      batchCode: "FS-2024-B1",
      studentName: "John Smith",
      address: "123 Main Street, Mumbai, Maharashtra",
      email: "john.smith@email.com",
      mobile: "+91 9876543210",
      status: "Active"
    }
  ]);

  const handleBack = () => {
    navigate('/dashboard');
  };


  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching:", searchTerm, "Filter:", searchFilter);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchFilter("");
  };

  const handleView = (student) => {
    navigate('/personal-info', { 
      state: { 
        student: student, 
        mode: 'view' 
      } 
    });
  };

  const handleEdit = (student) => {
    navigate('/personal-info', { 
      state: { 
        student: student, 
        mode: 'edit' 
      } 
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  return (
    <div className="student-container">
      <Navbar />
      <Sidebar />
      <main className="student-main">
        {/* Header */}
        <div className="student-header">
          <div className="header-left">
            <button onClick={handleBack} className="back-btn">
              <MdArrowBack />
            </button>
            <h1 className="page-title">Student Listing</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="student-content">
          <div className="table-card">
            <div className="content-header">
              <div className="management-info">
                <h2 className="management-title">
                  Student Management
                </h2>
                <span className="records-count">Total Student: {students.length}</span>
              </div>

              <div className="search-section">
                <div className="search-controls">
                  <select
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="search-filter"
                  >
                    <option value="">Select Search</option>
                    <option value="studentName">Student Name</option>
                    <option value="batchCode">Batch Code</option>
                    <option value="email">Email</option>
                    <option value="mobile">Mobile</option>
                    <option value="status">Status</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <button 
                    onClick={handleSearch} 
                    className="btn-search"
                    type="button"
                  >
                    <MdSearch />
                    SEARCH
                  </button>
                  <button 
                    onClick={handleClear} 
                    className="btn-clear"
                    type="button"
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="table-container">
              <table className="student-table">
                <thead>
                  <tr>
                    <th>Student Id</th>
                    <th>Batch Code</th>
                    <th>Student Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="no-data">
                        No student records found. Click "Add" to create a new student.
                      </td>
                    </tr>
                  ) : (
                    students.map((student) => (
                      <tr key={student.id}>
                        <td>{student.studentId}</td>
                        <td>{student.batchCode}</td>
                        <td>{student.studentName}</td>
                        <td>{student.address}</td>
                        <td>{student.email}</td>
                        <td>{student.mobile}</td>
                        <td>
                          <span className={`status-badge ${student.status.toLowerCase()}`}>
                            {student.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              type="button"
                              onClick={() => handleView(student)}
                              className="btn-action view"
                              title="View Student Details"
                              aria-label="View Student Details"
                            >
                              ⚬
                            </button>
                            <button
                              type="button"
                              onClick={() => handleEdit(student)}
                              className="btn-action edit"
                              title="Edit Student Information"
                              aria-label="Edit Student Information"
                            >
                              ✎
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(student.id)}
                              className="btn-action delete"
                              title="Delete Student Record"
                              aria-label="Delete Student Record"
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
            {students.length > 0 && (
              <div className="pagination">
                <span className="pagination-info">
                  1–{students.length} of {students.length}
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