import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  MdArrowBack,
  MdSave,
  MdCancel,
  MdPerson,
  MdSchool,
  MdBusiness,
  MdChat,
  MdAttachFile
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/PersonalInfo.css";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { admission, mode } = location.state || {};

  const [activeTab, setActiveTab] = useState(0);
  
  const [formData, setFormData] = useState({
    id: '',
    studentName: '',
    email: '',
    mobile: '',
    batchCode: '',
    admissionDate: '',
    status: '',
    address: '',
    dateOfBirth: '',
    fatherName: '',
    motherName: '',
    qualification: '',
    experience: '',
    gender: '',
    nationality: '',
    password: '',
    presentAddress: '',
    permanentAddress: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    familyMobile: '',
    trainingProgram: '',
    category: '',
    onlineAdmissionDate: '',
    statusDate: '',
    companyName: '',
    designation: '',
    workExperience: ''
  });

  const tabs = [
    { id: 0, name: "Personal Info", icon: MdPerson },
    { id: 1, name: "Academic/Qualification", icon: MdSchool },
    { id: 2, name: "Company Information", icon: MdBusiness },
    { id: 3, name: "Discussion", icon: MdChat },
    { id: 4, name: "Documents", icon: MdAttachFile }
  ];

  useEffect(() => {
    if (admission) {
      setFormData({
        id: admission.id || '',
        studentName: admission.studentName || '',
        email: admission.email || '',
        mobile: admission.mobile || '',
        batchCode: admission.batchCode || '',
        admissionDate: admission.admissionDate || '',
        status: admission.status || '',
        address: admission.address || '',
        dateOfBirth: admission.dateOfBirth || '',
        fatherName: admission.fatherName || '',
        motherName: admission.motherName || '',
        qualification: admission.qualification || '',
        experience: admission.experience || ''
      });
    }
  }, [admission]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleCancel = () => {
    navigate('/online-admission');
  };

  const renderPersonalInfoTab = () => (
    <div className="form-container">
      {/* Student Details Section - Extended to the right */}
      <div className="form-section compact extended-section">
        <div className="extended-content">
          <div className="student-details-left">
            <div className="section-header">
              <h2 className="section-title">Student Details :</h2>
            </div>
            
            <div className="form-grid compact-grid">
              <div className="form-group">
                <label className="form-label">B.M. ID *</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="Name*"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="Name*"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-select compact"
                >
                  <option value="">Male</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Nationality *</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="nationality*"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date Of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="dd/mm/yyyy"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="Name*"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label className="form-label">How did they come to know about SIT</label>
              <input
                type="text"
                name="howKnowSit"
                value={formData.howKnowSit || ''}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Ex. Google"
              />
            </div>
          </div>

          <div className="student-image-right">
            <div className="section-header">
              <h2 className="section-title">Student Image</h2>
            </div>
            
            <div className="image-container">
              <img 
                src="/api/placeholder/200/250" 
                alt="Student" 
                className="student-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Training Programme & Batch Detail Section */}
      <div className="form-section compact extended-section">
        <div className="extended-content">
          <div className="training-details-full">
            <div className="section-header">
              <h2 className="section-title">Training Programme & Batch Detail</h2>
            </div>
            
            <div className="form-grid compact-grid">
              <div className="form-group">
                <label className="form-label">Training Programme</label>
                <select
                  name="trainingProgram"
                  value={formData.trainingProgram}
                  onChange={handleInputChange}
                  className="form-select compact"
                >
                  <option value="">Piping Engineering</option>
                  <option value="Piping Engineering">Piping Engineering</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select compact"
                >
                  <option value="">Select Catego</option>
                  <option value="Regular">Regular</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Batch Code</label>
                <select
                  name="batchCode"
                  value={formData.batchCode}
                  onChange={handleInputChange}
                  className="form-select compact"
                >
                  <option value="">Select batch</option>
                  <option value="FS-2024-B1">FS-2024-B1</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Admission Details Section */}
      <div className="form-section compact extended-section">
        <div className="extended-content">
          <div className="online-admission-full">
            <div className="section-header">
              <h2 className="section-title">Online Admission Details</h2>
            </div>
            
            <div className="form-grid compact-grid online-admission-grid">
              <div className="form-group">
                <label className="form-label">Online Admission Date</label>
                <input
                  type="date"
                  name="onlineAdmissionDate"
                  value={formData.onlineAdmissionDate}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="dd/mm/yyyy"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  name="statusDisplay"
                  value="Ex. Closed"
                  className="form-input compact"
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status Date</label>
                <input
                  type="text"
                  name="statusDateDisplay"
                  value="Date"
                  className="form-input compact"
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label">Set Status</label>
                <select
                  name="setStatus"
                  value={formData.setStatus || ''}
                  onChange={handleInputChange}
                  className="form-select compact"
                >
                  <option value="">Conducted</option>
                  <option value="Conducted">Conducted</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="setStatusDate"
                  value={formData.setStatusDate || ''}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="address-sections">
        <div className="form-section half-width compact">
          <div className="section-header">
            <h2 className="section-title">Present Address :</h2>
          </div>
          
          <div className="form-grid compact-grid">
            <div className="form-group full-width">
              <label className="form-label">Address</label>
              <textarea
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                className="form-textarea compact"
                placeholder="presentAdress"
                rows="2"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Number"
              />
            </div>
          </div>
        </div>

        <div className="form-section half-width compact">
          <div className="section-header">
            <h2 className="section-title">Permanent Address :</h2>
          </div>
          
          <div className="form-grid compact-grid">
            <div className="form-group full-width">
              <label className="form-label">Address</label>
              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                className="form-textarea compact"
                placeholder="permanentAdress"
                rows="2"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Pincode *</label>
              <input
                type="text"
                name="permanentPincode"
                value={formData.permanentPincode || ''}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">City *</label>
              <input
                type="text"
                name="permanentCity"
                value={formData.permanentCity || ''}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">State *</label>
              <input
                type="text"
                name="permanentState"
                value={formData.permanentState || ''}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Country *</label>
              <input
                type="text"
                name="permanentCountry"
                value={formData.permanentCountry || ''}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Name*"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Family Mobile</label>
              <input
                type="tel"
                name="familyMobile"
                value={formData.familyMobile}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Number"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input compact"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademicTab = () => (
    <div className="form-container">
      {/* Add Qualification Section */}
      <div className="form-section compact">
        <div className="qualification-header">
          <h2 className="section-title">Add Qualification</h2>
          <button className="btn-add-qualification">
            Add +
          </button>
        </div>
        
        {/* Qualification Table */}
        <div className="qualification-table-container">
          <div className="table-actions">
            <button className="btn-export">
              EXPORT
            </button>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>

          <div className="data-table">
            <table className="qualification-table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Qualification</th>
                  <th>Discipline</th>
                  <th>College/Institute</th>
                  <th>University</th>
                  <th>Passing Year</th>
                  <th>Grade/Percentage</th>
                  <th>Status</th>
                  <th>Total no. of KTs</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>B.E.</td>
                  <td>Civil</td>
                  <td>G.V.ACHRYA INST...</td>
                  <td>MUMBAI</td>
                  <td>2020</td>
                  <td>71</td>
                  <td>pass</td>
                  <td>0</td>
                  <td></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-edit" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-delete" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-pagination">
            <span>1–1 of 1</span>
            <div className="pagination-controls">
              <button disabled>‹</button>
              <button disabled>›</button>
            </div>
          </div>
        </div>

        {/* Other Training Section */}
        <div className="other-training-section">
          <h3 className="section-subtitle">Other Training, If Any :</h3>
          <textarea
            className="other-training-textarea"
            placeholder="Enter other training details..."
            rows="3"
          />
        </div>

        {/* Passport Details Section */}
        <div className="passport-details-section">
          <h3 className="section-subtitle">Passport Details</h3>
          <div className="passport-form-grid">
            <div className="form-group">
              <label className="form-label">Passport No.*</label>
              <input
                type="text"
                className="form-input compact"
                placeholder="University"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Issue Date*</label>
              <input
                type="date"
                className="form-input compact"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Expiry Date*</label>
              <input
                type="date"
                className="form-input compact"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
        </div>

        <div className="section-actions">
          <button className="btn-save-section">Save</button>
        </div>
      </div>
    </div>
  );

  const renderCompanyTab = () => (
    <div className="form-container">
      {/* Add Company Information Section */}
      <div className="form-section compact">
        <div className="company-header">
          <h2 className="section-title">Add Company Information</h2>
          <button className="btn-add-company">
            Add +
          </button>
        </div>
        
        {/* Company Information Table */}
        <div className="company-table-container">
          <div className="table-actions">
            <button className="btn-export">
              EXPORT
            </button>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>

          <div className="data-table">
            <table className="company-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Company</th>
                  <th>Business Nature</th>
                  <th>Designation</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {/* Company data will be populated dynamically */}
              </tbody>
            </table>
          </div>

          <div className="table-pagination">
            <span>0–0 of 0</span>
            <div className="pagination-controls">
              <button disabled>‹</button>
              <button disabled>›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiscussionTab = () => (
    <div className="form-container">
      {/* Add Discussion Section */}
      <div className="form-section compact">
        <div className="discussion-header">
          <h2 className="section-title">Add Discussion</h2>
          <button className="btn-add-discussion">
            Add +
          </button>
        </div>
        
        {/* Discussion Table */}
        <div className="discussion-table-container">
          <div className="table-actions">
            <button className="btn-export">
              EXPORT
            </button>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>

          <div className="data-table">
            <table className="discussion-table">
              <thead>
                <tr>
                  <th>Discussion Date</th>
                  <th>Remark</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Discussion data will be populated dynamically */}
              </tbody>
            </table>
          </div>

          <div className="table-pagination">
            <span>0–0 of 0</span>
            <div className="pagination-controls">
              <button disabled>‹</button>
              <button disabled>›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="form-container">
      <div className="documents-layout">
        {/* Documents List Section */}
        <div className="documents-list-section">
          <div className="documents-header">
            <h2 className="section-title">Add Documents</h2>
          </div>
          
          <div className="documents-list-container">
            <h3 className="list-subtitle">Documents List</h3>
            
            <div className="documents-table-container">
              <table className="documents-table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Document Name</th>
                    <th>Image</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Documents data will be populated dynamically */}
                </tbody>
              </table>
              
              <div className="table-pagination">
                <span>0–0 of 0</span>
                <div className="pagination-controls">
                  <button disabled>‹</button>
                  <button disabled>›</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Documents Section */}
        <div className="upload-documents-section">
          <h3 className="upload-subtitle">Upload Documents</h3>
          
          <div className="upload-form">
            <div className="form-group">
              <label className="form-label">Name*</label>
              <select className="form-select compact">
                <option value="">Select</option>
                <option value="photo">Photo</option>
                <option value="certificate">Certificate</option>
                <option value="marksheet">Marksheet</option>
                <option value="photo_id_proof">Photo ID Proof</option>
                <option value="address_proof">Address Proof</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Upload*</label>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="document-upload"
                  className="file-input"
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
                <label htmlFor="document-upload" className="file-upload-btn">
                  Choose File
                </label>
                <span className="file-status">No file chosen</span>
              </div>
            </div>

            <div className="upload-actions">
              <button className="btn-save-upload">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="personal-info-container">
      <Navbar />
      <Sidebar />
      <main className="personal-info-main">
        {/* Header */}
        <div className="personal-info-header">
          <div className="header-left">
            <button onClick={handleCancel} className="back-btn">
              <MdArrowBack />
            </button>
            <h1 className="page-title">
              {mode === 'edit' ? 'Edit Personal Information' : 'Personal Information'}
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 0 && renderPersonalInfoTab()}
            {activeTab === 1 && renderAcademicTab()}
            {activeTab === 2 && renderCompanyTab()}
            {activeTab === 3 && renderDiscussionTab()}
            {activeTab === 4 && renderDocumentsTab()}
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button className="btn-accept">Accept</button>
            <button className="btn-denied">Denied</button>
            <button className="btn-admission">Admission</button>
            <button className="btn-save">Save</button>
            <button className="btn-close">close</button>
          </div>
        </div>
      </main>
    </div>
  );
}