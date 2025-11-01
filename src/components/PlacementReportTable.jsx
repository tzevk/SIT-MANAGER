import "@styles/components/PlacementReportTable.css";

export default function PlacementReportTable() {
  return (
    <div className="placement-report-container">
      <div className="section-header">
        <h2 className="section-title">Placement Report</h2>
        <button className="export-btn">Export to Excel</button>
      </div>
      
      <div className="table-container">
        <table className="placement-report-table">
          <thead>
            <tr>
              <th>Training Program Name</th>
              <th>Batch Number</th>
              <th>Convocation Date</th>
              <th>Pass Students</th>
              <th>Self Placed</th>
              <th>Total Interview</th>
              <th>Total Students in Batch</th>
              <th>Students Placed</th>
            </tr>
          </thead>
          <tbody>
            {/* Data will be populated from backend */}
          </tbody>
        </table>
      </div>
    </div>
  );
}