import React, { useState } from "react";
import Select from "react-select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import "./Booking.css";
const Booking = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const options1 = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  const [formVisible, setFormVisible] = useState(true);
  const changeFormVisible = () => {
    setFormVisible((prev) => !prev);
  };

  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  const [optionVisible, setOptionVisible] = useState(false);
  const handleOptionVisible = () => {
    setOptionVisible(!optionVisible);
  };

  const [checkboxVisible,setCheckboxVisible] = useState(false);
  const handleCheckboxVisible = () => {
    setCheckboxVisible(!checkboxVisible);
  }
  return (
    <div className="bookingContainer">
      <div className="booking-menu">
        <div className="menu-left">
          <button onClick={changeFormVisible}>Filter</button>
        </div>
        <div className="menu-right">
          <Link to="/bookings-event/create">
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
        <div className="form-title-container">
          <p className="select-title">Du an</p>
          <p className="select-title">Du an con|Phan khu</p>
          <p className="select-title">Is Publish</p>
        </div>
        <div className="form-select-container">
          <Select isMulti options={options} className="multiSelect" />
          <Select
            style={{ width: "657px" }}
            isMulti
            options={options1}
            className="multiSelect"
          />
          <FormControl className="form-radio-container">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="stop" control={<Radio />} label="Stop" />
              <FormControlLabel value="Run" control={<Radio />} label="Run" />
            </RadioGroup>
          </FormControl>
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
              <FormControlLabel
                control={<Checkbox />}
                label="Dự án"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bắt đầu"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Kết thúc"
              />
            </FormGroup>
          </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Số</TableCell>
              <TableCell align="left">Ngày thông báo</TableCell>
              <TableCell align="left">Dự án</TableCell>
              <TableCell align="left">Bắt đầu</TableCell>
              <TableCell align="left">Kết thúc</TableCell>
              <TableCell align="left">Thông tin chuyển khoản</TableCell>
              <TableCell align="left">Ghi chú</TableCell>
              <TableCell align="left">Số tiền</TableCell>
              <TableCell align="left">Trạng thái </TableCell>
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
                02/Waterpoint/2021
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                06/01/2022
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Waterpoint - The Aqua 1
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                14:12:21 01/03/2022
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Cho đến khi có thông báo
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Chủ tài khoản: CÔNG TY TNHH MTV SÀN GIAO DỊCH BẤT ĐỘNG SẢN NAM
                LONG Số tài khoản: 0071001269299 Ngân hàng: (VCB) Ngân hàng TMCP
                Ngoại Thương Việt Nam Chi nhánh: Chi nhánh Hồ Chí Minh
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                CSNL - [Tên Khách Hàng] - [số CMND|CCCD|PP] - dang ky san pham
                [Tên sản phẩm] Waterpoint. Nội dung UNC phải bắt đầu bằng mã sàn
                "SNL" đại diện cho khách hàng của Sàn Nam Long
              </TableCell>
              <TableCell align="left" style={{ verticalAlign: "top" }}>
                Dinh thự vườn và Dinh thự ven kênh - 300tr/suất DInh thự vịnh và
                Dinh thự ven sông - 500tr/suất
              </TableCell>
              <TableCell style={{ verticalAlign: "top" }}>
                <div className="switch-container" onClick={handleChange}>
                  <div
                    className={
                      checked ? "label-container-run" : "label-container-stop"
                    }
                  >
                    <div className="run-label">Run</div>
                    <div className="space"></div>
                    <div className="stop-label">Stop</div>
                  </div>
                </div>
              </TableCell>
              <TableCell style={{ verticalAlign: "top" }}>
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

export default Booking;
