import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MdArrowBack, 
  MdEdit, 
  MdDelete, 
  MdSearch,
  MdFileDownload,
  MdFilterList,
  MdSave,
  MdCancel
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/Discipline.css";

export default function Discipline() {
  const navigate = useNavigate();
  const [disciplines, setDisciplines] = useState([]);

  const [formData, setFormData] = useState({
    name: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDisciplines, setFilteredDisciplines] = useState(disciplines);

  useEffect(() => {
    const filtered = disciplines.filter(discipline =>
      discipline.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDisciplines(filtered);
  }, [searchTerm, disciplines]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) return;
    
    if (editingId) {
      // Update existing discipline
      setDisciplines(prev => prev.map(discipline => 
        discipline.id === editingId 
          ? { ...discipline, name: formData.name, updatedDate: new Date().toISOString().split('T')[0] }
          : discipline
      ));
      setEditingId(null);
    } else {
      // Add new discipline
      const newDiscipline = {
        id: Date.now(),
        name: formData.name,
        status: "Active",
        createdDate: new Date().toISOString().split('T')[0]
      };
      setDisciplines(prev => [...prev, newDiscipline]);
    }

    // Reset form
    setFormData({
      name: ""
    });
  };

  const handleEdit = (discipline) => {
    setFormData({
      name: discipline.name
    });
    setEditingId(discipline.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this discipline?")) {
      setDisciplines(prev => prev.filter(discipline => discipline.id !== id));
    }
  };

  const handleCancel = () => {
    setFormData({
      name: ""
    });
    setEditingId(null);
  };

  const handleExport = () => {
    // Export functionality - could export to CSV, Excel, etc.
    console.log("Exporting disciplines...", filteredDisciplines);
  };

  return (
    <div className="discipline-container">
      <Navbar />
      <Sidebar />
      
      <main className="discipline-main">
        {/* Header */}
        <div className="discipline-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate('/dashboard')}>
              <MdArrowBack />
            </button>
            <h1 className="page-title">Discipline</h1>
          </div>
        </div>

        {/* Add New Discipline Form - Horizontal */}
        <div className="add-discipline-section">
          <div className="form-card">
            <div className="card-header">
              <h2 className="card-title">
                {editingId ? "Edit Discipline" : "Add New Discipline"}
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="horizontal-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter discipline name"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  <MdSave />
                  {editingId ? "Update" : "Add"}
                </button>
                {editingId && (
                  <button type="button" onClick={handleCancel} className="btn-secondary">
                    <MdCancel />
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-section">
          <div className="table-card">
            <div className="table-header">
              <div className="table-title">
                <h2>Discipline List</h2>
                <span className="record-count">({filteredDisciplines.length} records)</span>
              </div>
              
              <div className="table-actions">
                <div className="search-box">
                  <MdSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search disciplines..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                
                <div className="button-group">
                  <button onClick={handleExport} className="btn-export">
                    <MdFileDownload />
                    Export
                  </button>
                  
                  <button className="btn-filter">
                    <MdFilterList />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="table-container">
              <table className="discipline-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Discipline Name</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDisciplines.length > 0 ? (
                    filteredDisciplines.map((discipline, index) => (
                      <tr key={discipline.id}>
                        <td>{index + 1}</td>
                        <td className="discipline-name">{discipline.name}</td>
                        <td>
                          <span className={`status-badge status-${discipline.status.toLowerCase()}`}>
                            {discipline.status}
                          </span>
                        </td>
                        <td>{discipline.createdDate}</td>
                        <td className="actions-cell">
                          <button
                            onClick={() => handleEdit(discipline)}
                            className="action-btn edit-btn"
                            title="Edit"
                          >
                            <MdEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(discipline.id)}
                            className="action-btn delete-btn"
                            title="Delete"
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="no-data">
                        No disciplines found
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