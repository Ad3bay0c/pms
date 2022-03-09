import { connect } from "react-redux";
const Error = ({ auth: { errors } }) => {
  return (
    errors && (
      <div
        className={`alert alert-danger`}
        style={{
          position: "fixed",
          top: "50px",
          right: "15px",
          zIndex: "10000",
        }}
      >
        {Object.keys(errors)
          .map((key) => errors[key][0])
          .join("\n")}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Error);
