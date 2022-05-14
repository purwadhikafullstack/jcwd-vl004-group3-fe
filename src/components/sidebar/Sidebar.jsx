import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { Link } from "react-router-dom";
import {} from "@mui/icons-material";
import { connect } from "react-redux";
import { logoutAdmin } from "../../redux/actions/admin";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Bango Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreMallDirectoryOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span style={{ opacity: "0.5" }}>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span style={{ opacity: "0.5" }}>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedIcon className="icon" />
            <span style={{ opacity: "0.5" }}>Stats</span>
          </li>
          <li onClick={props.logoutAdmin}>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    adminGlobal: state.admin,
  };
};

const mapDispatchToProps = {
  logoutAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
