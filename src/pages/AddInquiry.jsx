import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdCancel, MdPerson, MdSchool } from 'react-icons/md';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/pages/AddInquiry.css";

export default function AddInquiry() {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("personal");
  
  const [formData, setFormData] = useState({
    // Personal Information
    studentName: "",
    gender: "",
    dateOfBirth: "",
    mobile: "",
    whatsappNumber: "",
    email: "",
    nationality: "",
    country: "",
    discussion: "",
    
    // Add Discussion Fields
    newDiscussion: "",
    discussionDate: "",
    nextDate: "",
    
    // Inquiry Details
    inquiryDate: new Date().toISOString().split('T')[0],
    modeOfInquiry: "",
    inquirySource: "",
    howTheyKnow: "",
    
    // Training Programme & Batch Details
    selectedTrainingProgramme: "",
    category: "",
    batch: "",
    
    // Education Qualification & Work
    qualification: "",
    discipline: "",
    percentage: "",
    
    // Status Details
    statusDate: new Date().toISOString().split('T')[0],
    status: "New"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically save the data
    navigate('/inquiry');
  };

  const handleCancel = () => {
    navigate('/inquiry');
  };

  const handleSubmitDiscussion = () => {
    // Handle discussion submission logic here
    console.log('Discussion submitted:', {
      discussion: formData.newDiscussion,
      date: formData.discussionDate,
      nextDate: formData.nextDate
    });
    
    // Clear the discussion form fields
    setFormData(prev => ({
      ...prev,
      newDiscussion: "",
      discussionDate: "",
      nextDate: ""
    }));
  };

  const handleCancelDiscussion = () => {
    // Clear the discussion form fields
    setFormData(prev => ({
      ...prev,
      newDiscussion: "",
      discussionDate: "",
      nextDate: ""
    }));
  };

  return (
    <div className="add-inquiry-container">
      <Navbar />
      <Sidebar />
      <main className="add-inquiry-main">
        {/* Header */}
        <div className="add-inquiry-header">
          <div className="header-left">
            <button onClick={handleCancel} className="back-btn">
              <MdArrowBack />
            </button>
            <h1 className="page-title">Add New Inquiry</h1>
          </div>
        </div>

        {/* Form Card */}
        <div className="form-card">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
            >
              <MdPerson />
              Personal Details
            </button>
            <button 
              className={`tab-btn ${activeTab === "inquiry" ? "active" : ""}`}
              onClick={() => setActiveTab("inquiry")}
            >
              <MdSchool />
              Inquiry Details
            </button>
            <button 
              className={`tab-btn ${activeTab === "discussion" ? "active" : ""}`}
              onClick={() => setActiveTab("discussion")}
            >
              <MdSchool />
              Discussion
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="inquiry-form">
            {/* Tab 1: Personal Details */}
            {activeTab === "personal" && (
              <div className="tab-content">
                <h3 className="tab-title">Personal Details</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="studentName" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Name*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dateOfBirth" className="form-label">Date Of Birth</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsappNumber" className="form-label">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Number"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Name*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nationality" className="form-label">Nationality *</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nationality*"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country" className="form-label">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Name*"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Inquiry Details */}
            {activeTab === "inquiry" && (
              <div className="tab-content">
                {/* Inquiry Details Section */}
                <h3 className="tab-title">Inquiry Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inquiryDate" className="form-label">Inquiry Date</label>
                    <input
                      type="date"
                      id="inquiryDate"
                      name="inquiryDate"
                      value={formData.inquiryDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="modeOfInquiry" className="form-label">Mode Of Inquiry</label>
                    <select
                      id="modeOfInquiry"
                      name="modeOfInquiry"
                      value={formData.modeOfInquiry}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Inquiry</option>
                      <option value="Walk-in">Walk-in</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Online">Online</option>
                      <option value="Email">Email</option>
                      <option value="Referral">Referral</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="howTheyKnow" className="form-label">How they come to know about SIT</label>
                    <select
                      id="howTheyKnow"
                      name="howTheyKnow"
                      value={formData.howTheyKnow}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Friends/Family">Friends/Family</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Training Programme & Batch Details Section */}
                <h3 className="tab-title">Training Programme & Batch Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="selectedTrainingProgramme" className="form-label">Selected Training Programme</label>
                    <select
                      id="selectedTrainingProgramme"
                      name="selectedTrainingProgramme"
                      value={formData.selectedTrainingProgramme}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Course</option>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Python Programming">Python Programming</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Category</option>
                      <option value="Regular">Regular</option>
                      <option value="Weekend">Weekend</option>
                      <option value="Fast Track">Fast Track</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="batch" className="form-label">Batch</label>
                    <select
                      id="batch"
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Batch</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                  </div>
                </div>

                {/* Education Qualification & Work Section */}
                <h3 className="tab-title">Education Qualification & Work</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="qualification" className="form-label">Qualification</label>
                    <select
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="discipline" className="form-label">Discipline</label>
                    <select
                      id="discipline"
                      name="discipline"
                      value={formData.discipline}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Discipline</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="percentage" className="form-label">Percentage *</label>
                    <input
                      type="text"
                      id="percentage"
                      name="percentage"
                      value={formData.percentage}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Percentage"
                      required
                    />
                  </div>
                </div>

                {/* Status Details Section */}
                <h3 className="tab-title">Status Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="statusDate" className="form-label">Date</label>
                    <input
                      type="date"
                      id="statusDate"
                      name="statusDate"
                      value={formData.statusDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="status" className="form-label">Set Status</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Status</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Follow up">Follow up</option>
                      <option value="Converted">Converted</option>
                      <option value="Not Interested">Not Interested</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Discussion */}
            {activeTab === "discussion" && (
              <div className="tab-content">
                {/* Add Discussion Section */}
                <h3 className="tab-title">Add Discussion</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="newDiscussion" className="form-label">Discussion</label>
                    <textarea
                      id="newDiscussion"
                      name="newDiscussion"
                      value={formData.newDiscussion || ""}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Enter new discussion details..."
                      rows="4"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="discussionDate" className="form-label">Date</label>
                    <input
                      type="date"
                      id="discussionDate"
                      name="discussionDate"
                      value={formData.discussionDate || ""}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nextDate" className="form-label">Next Date</label>
                    <input
                      type="date"
                      id="nextDate"
                      name="nextDate"
                      value={formData.nextDate || ""}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Discussion Action Buttons */}
                <div className="discussion-actions">
                  <button 
                    type="button" 
                    className="btn-submit-discussion"
                    onClick={handleSubmitDiscussion}
                  >
                    Submit
                  </button>
                  <button 
                    type="button" 
                    className="btn-cancel-discussion"
                    onClick={handleCancelDiscussion}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="btn-save">
                <MdSave />
                Save Inquiry
              </button>
              <button type="button" onClick={handleCancel} className="btn-cancel">
                <MdCancel />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}