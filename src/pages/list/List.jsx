import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import UserDatatable from "../../components/datatable/UserDatatable";
import ProductsDatatable from "../../components/datatable/ProductsDatatable";

const List = () => {
  switch (window.location.pathname) {
    case "/users":
      return (
        <div className="list">
          <Sidebar />
          <div className="listContainer">
            {/* <Navbar /> */}
            <UserDatatable />
          </div>
        </div>
      );

    case "/products":
      return (
        <div className="list">
          <Sidebar />
          <div className="listContainer">
            {/* <Navbar /> */}
            <ProductsDatatable />
          </div>
        </div>
      );

    default:
      break;
  }
};

export default List;
