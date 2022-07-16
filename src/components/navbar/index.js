import logo from "../../assets/images/logo.png";

// styles
import "./styles.modules.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <h1>fampay</h1>
      <img src={logo} alt="fampay-logo" />
    </div>
  );
};

export default Navbar;
