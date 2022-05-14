import { useState, useEffect } from "react";
import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import { productRows } from "../../datatablesource";
import "./productsDatatable.scss";

const ProductsDatatable = () => {
  const [productRows, setProductRows] = useState([]);

  const fetchProducts = async (offset, limit) => {
    const products = await Axios.get(
      `${API_URL}/product/get/${offset}/${limit}`
    );
    return setProductRows(products?.data);
  };

  useEffect(() => {
    fetchProducts(0, 999);
  }, []);

  function Row(props) {
    const { row } = props;

    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <div className="cellWrapper">
              <img src={row.img_path} className="image" alt="" />
              {row.name}
            </div>
          </TableCell>
          <TableCell align="right">{row.category}</TableCell>
          <TableCell align="right">{row.buy_price}</TableCell>
          <TableCell align="right">{row.sell_price}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Warehouse
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Warehouse Name</TableCell>
                      <TableCell>Stock</TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableBody>
                    {row.warehouse.map((warehouseRow) => (
                      <TableRow key={warehouseRow.warehouseName}>
                        <TableCell component="th" scope="row">
                          {warehouseRow.warehouseName}
                        </TableCell>
                        <TableCell>{warehouseRow.stock}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/admin/products/new" className="link">
          Add New
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nama</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Buy Price</TableCell>
              <TableCell align="right">Sell Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productRows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsDatatable;
