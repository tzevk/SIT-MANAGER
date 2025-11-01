import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MdArrowBack,
  MdEdit, 
  MdDelete, 
  MdSearch,
  MdVisibility,
  MdFileDownload
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/OnlineAdmission.css";

export default function OnlineAdmission() {
  const navigate = useNavigate();
  const [admissions, setAdmissions] = useState([
    {
      id: 1,
      studentName: "John Smith",
      email: "john.smith@email.com",
      mobile: "+91 9876543210",
      batchCode: "FS-2024-B1",
      admissionDate: "2024-01-15",
      status: "Pending"
    },
    {
      id: 2,
      studentName: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      mobile: "+91 9876543211",
      batchCode: "DS-2024-B2",
      admissionDate: "2024-01-16",
      status: "Approved"
    },
    {
      id: 3,
      studentName: "Mike Wilson",
      email: "mike.wilson@email.com",
      mobile: "+91 9876543212",
      batchCode: "FS-2024-B1",
      admissionDate: "2024-01-17",
      status: "Rejected"
    },
    {
      id: 4,
      studentName: "Emily Davis",
      email: "emily.davis@email.com",
      mobile: "+91 9876543213",
      batchCode: "DM-2024-B1",
      admissionDate: "2024-01-18",
      status: "Under Review"
    },
    {
      id: 5,
      studentName: "Alex Brown",
      email: "alex.brown@email.com",
      mobile: "+91 9876543214",
      batchCode: "UI-2024-B1",
      admissionDate: "2024-01-19",
      status: "Approved"
    }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [filteredAdmissions, setFilteredAdmissions] = useState(admissions);

  useEffect(() => {
    let filtered = admissions.filter(admission => {
      if (!searchTerm) return true;
      
      const searchLower = searchTerm.toLowerCase();
      
      // If no specific filter is selected, search in all fields
      if (filterBy === "all") {
        return admission.studentName?.toLowerCase().includes(searchLower) ||
               (admission.email && admission.email.toLowerCase().includes(searchLower)) ||
               (admission.mobile && admission.mobile.includes(searchTerm)) ||
               (admission.batchCode && admission.batchCode.toLowerCase().includes(searchLower)) ||
               (admission.status && admission.status.toLowerCase().includes(searchLower));
      }
      
      // Filter by specific field
      switch (filterBy) {
        case "name":
          return admission.studentName?.toLowerCase().includes(searchLower);
        case "email":
          return admission.email?.toLowerCase().includes(searchLower);
        case "mobile":
          return admission.mobile?.includes(searchTerm);
        case "batch":
          return admission.batchCode?.toLowerCase().includes(searchLower);
        case "status":
          return admission.status?.toLowerCase().includes(searchLower);
        default:
          return true;
      }
    });
    
    setFilteredAdmissions(filtered);
  }, [searchTerm, filterBy, admissions]);

  const handleSearch = () => {
    // Search is handled by useEffect
    console.log('Search triggered');
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilterBy('all');
    console.log('Search cleared');
  };

  const handleExport = () => {
    console.log('Exporting data...');
    alert('Exporting admission data to Excel/CSV');
    // Add export logic here
  };

  const handleEdit = (admission) => {
    console.log('Edit admission:', admission);
    // Navigate to personal info page with admission data
    navigate('/personal-info', { state: { admission: admission, mode: 'edit' } });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admission?")) {
      setAdmissions(prev => prev.filter(admission => admission.id !== id));
    }
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'status-approved';
      case 'pending':
        return 'status-pending';
      case 'rejected':
        return 'status-rejected';
      case 'under review':
        return 'status-review';
      default:
        return 'status-default';
    }
  };

  return (
    <div className="online-admission-container">
      <Navbar />
      <Sidebar />
      <main className="online-admission-main">
        {/* Header */}
        <div className="online-admission-header">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              <MdArrowBack />
            </button>
            <h1 className="page-title">Online Admission</h1>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="search-section">
          <div className="search-controls">
            <div className="search-group">
              <div className="search-input-container">
                <MdSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search admissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="filter-container">
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Fields</option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="mobile">Mobile</option>
                  <option value="batch">Batch Code</option>
                  <option value="status">Status</option>
                </select>
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
                onClick={handleExport}
                className="btn-export"
                title="Export Data"
              >
                <MdFileDownload />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="admission-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Batch Code</th>
                <th>Admission Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmissions.length > 0 ? (
                filteredAdmissions.map((admission) => (
                  <tr key={admission.id} className="table-row">
                    <td>{admission.id}</td>
                    <td className="name-cell">{admission.studentName}</td>
                    <td className="email-cell">{admission.email}</td>
                    <td className="mobile-cell">{admission.mobile}</td>
                    <td className="batch-cell">{admission.batchCode}</td>
                    <td className="date-cell">{admission.admissionDate}</td>
                    <td className="status-cell">
                      <span className={`status-badge ${getStatusClass(admission.status)}`}>
                        {admission.status}
                      </span>
                    </td>
                    <td className="action-cell">
                      <div className="action-buttons-group">
                        <button
                          onClick={() => handleEdit(admission)}
                          className="action-btn edit-btn"
                          title="Edit Admission"
                        >
                          <MdEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(admission.id)}
                          className="action-btn delete-btn"
                          title="Delete Admission"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-data">
                    No admissions found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}