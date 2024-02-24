import PropTypes from "prop-types";

function Logo({ width = "50px", height = "50px" }) {
  return (
    <div>
      <img
        src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"
        alt="MovieFlix Logo"
        style={{ width, height }}
      />
    </div>
  );
}

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
