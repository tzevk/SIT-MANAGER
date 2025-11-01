import "@styles/components/UpcomingBatchesTable.css";

export default function UpcomingBatchesTable() {
  return (
    <div className="upcoming-batches-container">
      <div className="section-header">
        <h2 className="section-title">Upcoming Batches</h2>
      </div>
      
      <div className="table-container">
        <table className="upcoming-batches-table">
          <thead>
            <tr>
              <th>Training Program Name</th>
              <th>Batch Number</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Min. No. of Students per Batch</th>
              <th>Students Admitted</th>
              <th>Percentage Filled</th>
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