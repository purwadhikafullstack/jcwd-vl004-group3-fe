import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
const Widget = ({ type }) => {
  let data;

  //temp
  const amount = 100;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(225,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        link: "View all products",
        icon: (
          <StoreMallDirectoryOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        link: "View all orders",
        icon: (
          <CreditCardOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "delivery":
      data = {
        title: "DELIVERY",
        link: "See all status",
        icon: (
          <LocalShippingOutlinedIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
