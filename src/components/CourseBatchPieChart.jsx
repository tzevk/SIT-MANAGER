import "@styles/components/CourseBatchPieChart.css";

export default function CourseBatchPieChart() {
  return (
    <div className="pie-chart-container">
      <div className="section-header">
        <h2 className="section-title">Lead Sources Analytics</h2>
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
      
      <div className="chart-content">
        <div className="chart-wrapper">
          <div className="pie-chart-placeholder">
            <div className="chart-message">
              Select course and batch to view lead source distribution
            </div>
          </div>
        </div>
        
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color website"></div>
            <span className="legend-label">Website</span>
          </div>
          <div className="legend-item">
            <div className="legend-color google"></div>
            <span className="legend-label">Google</span>
          </div>
          <div className="legend-item">
            <div className="legend-color unknown"></div>
            <span className="legend-label">Unknown</span>
          </div>
        </div>
      </div>
      
      <div className="chart-stats">
        <div className="stat-card">
          <div className="stat-label">Total Leads</div>
          <div className="stat-value">-</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Website</div>
          <div className="stat-value">-</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Google</div>
          <div className="stat-value">-</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Unknown</div>
          <div className="stat-value">-</div>
        </div>
      </div>
    </div>
  );
}