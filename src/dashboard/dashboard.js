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
        <div>
        <p className="vision">Organization Vision</p>
        </div>
        
        <div className="itemTwo">paragraph2</div>
      </div>
    </div>
  );
}
