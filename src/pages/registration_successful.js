import "./registration_successful.css";

export default function successful() {
  return (
    <div className="card-successful">
      <div className="tick-section"></div>
      <div className="successful-section">
        <p className="awesome">Awesome!</p>
        <p className="info">Your organization has been successfully created.</p>
        <div className="goto"><p>Go to Dashboard</p></div>
      </div>
    </div>
  );
}
