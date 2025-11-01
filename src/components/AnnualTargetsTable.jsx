import "@styles/components/AnnualTargetsTable.css";

export default function AnnualTargetsTable() {
  return (
    <div className="annual-targets-container">
      <div className="section-header">
        <h2 className="section-title">Annual Targets</h2>
        <button className="export-btn">Export to Excel</button>
      </div>
      
      <div className="table-container">
        <table className="annual-targets-table">
          <thead>
            <tr>
              <th>Training Program Name</th>
              <th>Duration of Program</th>
              <th>Training Program Fees</th>
              <th>Frequency Conducted</th>
              <th>Target Frequency of Batches in Year</th>
              <th>Min. No. of Students per Batch</th>
              <th>Students Admitted (Yearly)</th>
              <th>Yearly Students Target</th>
              <th>Sparkline</th>
              <th>Fees Collected (₹)</th>
              <th>Fees Target</th>
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