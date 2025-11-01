import "@styles/components/EnquiryReportBar.css";

export default function EnquiryReportBar() {
  return (
    <div className="enquiry-report-container">
      <div className="section-header">
        <h2 className="section-title">Enquiry Report</h2>
        <div className="filters-container">
          <select className="filter-select">
            <option value="">Select Course</option>
            {/* Options will be populated from backend */}
          </select>
          <select className="filter-select">
            <option value="">Select Batch</option>
            {/* Options will be populated from backend */}
          </select>
        </div>
      </div>
      
      <div className="enquiry-stats">
        <div className="enquiry-widget-grid">
          <div className="enquiry-widget new">
            <h4>New</h4>
            <p>-</p>
          </div>
          <div className="enquiry-widget progress">
            <h4>In Progress</h4>
            <p>-</p>
          </div>
          <div className="enquiry-widget admitted">
            <h4>Admitted</h4>
            <p>-</p>
          </div>
          <div className="enquiry-widget lost">
            <h4>Lost</h4>
            <p>-</p>
          </div>
          <div className="enquiry-widget total">
            <h4>Total</h4>
            <p>-</p>
          </div>
        </div>
        
        <div className="progress-bar-container">
          {/* Progress segments will be populated from backend */}
        </div>
      </div>
    </div>
  );
}