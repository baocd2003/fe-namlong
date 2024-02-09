import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './CustomerPage.css'

const CustomerPage = () => {
  const [formVisible, setFormVisible] = useState(true);
  const changeFormVisible = () => {
    setFormVisible((prev) => !prev);
  };

  const [checkboxVisible, setCheckboxVisible] = useState(false);
  const handleCheckboxVisible = () => {
    setCheckboxVisible(!checkboxVisible);
  };

  const [optionVisible, setOptionVisible] = useState(false);
  const handleOptionVisible = () => {
    setOptionVisible(!optionVisible);
  };
  return (
    <div className="bookingContainer">
      <div className="booking-menu">
        <div className="menu-left">
          <button onClick={changeFormVisible}>Filter</button>
        </div>
        <div className="menu-right">
          <Link to="/customers/create">
            <button className="addForm">
              <FaPlus />
              <div>New</div>
            </button>
          </Link>
          <button className="addForm">
            <FaDownload />
            <div>Export</div>
          </button>
          <button className="addForm" onClick={handleCheckboxVisible}>
            <FaTableCells />
            <div>
              <FaCaretDown />
            </div>
          </button>
        </div>
      </div>

      <div className={formVisible ? "form-select" : "form-hidden"}>
        <div className="form-select-container">
		<div className="form-group">
          <div className="label">
			Tìm kiếm khách hàng
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField className="text-input" placeholder="Tìm Mã Khách hàng, Họ Tên, CMND hoặc Số Điện Thoại" />
          </div>
        </div>
		<div className="action-btn-group">
			<Button className="action-btn search-btn">Search</Button>
			<Button className="action-btn reset-btn">Reset</Button>
		</div>
		</div>
      </div>

      <TableContainer component={Paper} style={{ yOverflow: "scroll" }}>
        <div className={`checkbox-container ${checkboxVisible ? "open" : ""}`}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Số"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Ngày thông báo"
            />
            <FormControlLabel control={<Checkbox />} label="Dự án" />
            <FormControlLabel control={<Checkbox />} label="Bắt đầu" />
            <FormControlLabel control={<Checkbox />} label="Kết thúc" />
          </FormGroup>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell style={{ fontWeight: 600, fontSize: "16px" }}>
                CODE
              </TableCell>
              <TableCell align="left">Member</TableCell>
              <TableCell align="left">Ông|Bà</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Điện thoại</TableCell>
              <TableCell align="left">Ngày sinh</TableCell>
              <TableCell align="left">CMND</TableCell>
              <TableCell align="left">Ngày cấp</TableCell>
              <TableCell align="left">Nơi cấp</TableCell>
              <TableCell align="left">Sale</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ verticalAlign: "top" }}
              >
                <input type="checkbox" />
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ verticalAlign: "top" }}
              >
                <div
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  SNL22146270
                </div>
              </TableCell>
              <TableCell
                align="left"
                style={{ verticalAlign: "top" }}
              ></TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Ông
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                <div>Trương Huỳnh Quốc</div>
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                <div>Khánh</div>
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                khanhthq.unicons@gmail.com
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                0907642855_
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                01/01/1987
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                331498129
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                16/11/2016
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Vĩnh Long
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Ngô Thị Kim Ngân
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                <div className="dot-container">
                  <BsThreeDotsVertical
                    onClick={handleOptionVisible}
                    className="threeDotIcon"
                  />
                  <ul className={`dot-option ${optionVisible ? "open" : ""}`}>
                    <li>Edit</li>
                    <li>Delete</li>
                  </ul>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="table-footer">
        <div className="table-foot-left">
          <p>
            Showing <b>1</b> to <b>7</b> of <b>7</b> entries
          </p>
        </div>
        <div className="table-foot-right">
          <p>Show</p>
          <select>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
            <option>100</option>
          </select>
          <p>entries</p>
          <Pagination count={7} shape="rounded" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
