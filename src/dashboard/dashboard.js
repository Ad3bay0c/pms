import "./dashboard.css";
export default function dashboard() {
  return (
    <div className="dashboard">
      <div className="item1">header</div>
      <div className="item2">advert</div>
      <div className="item3">
        <div>
          <h4>System Settings</h4>
          <p className="profile">Organization Profile</p>
          <hr />
        </div>
        <div>
          <div className="itemOne">paragraph1</div>
          <hr />
        </div>
        <div className="vision-section">
          <p className="vision">Organization Vision</p>
          <p className="v">Vision</p>
          <input type="text" />
          <hr />
        </div>

        <div className="itemTwo">
          <p>Organization Address</p>
          <label className="street-label">Street</label>
          <input className="street" type="text" name="Street" />

          <div className="country-section">
            <label className="street-label">City</label>
            <input className="street" type="text" name="Street" />

            <label className="street-label">State</label>
            <input className="street" type="text" name="Street" />

            <label className="street-label">Country</label>
            <input className="street" type="text" name="Street" />
          </div>
        </div>
      </div>
    </div>
  );
}
