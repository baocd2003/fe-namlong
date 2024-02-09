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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Transaction = () => {
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
	const options = ["TP HCM", "Đà Nẵng", "Hà  Nội"];
	const [name, setName] = useState("");
	const handleChange = (e) => setName(e);
	return (
	  <div className="bookingContainer">
		<div className="booking-menu">
		  <div className="menu-left">
			<button onClick={changeFormVisible}>Filter</button>
		  </div>
		  <div className="menu-right">
			<Link to="/bookings/create">
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
            Customers
          </div>
          <div className="input-group">
            <FormControl sx={{ width: 300 }}>
              <Select onChange={handleChange}>
                <TextField className="select-textField" />
                {options.map((value) => (
                  <MenuItem className="select-item" value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
		<div className="form-group">
          <div className="label">
            Ngày giao dịch
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaRegCalendarAlt className="input-icon" />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker /> 
			  <div style={{padding:'5px',background:'lightgray'}}>-</div>
			  <DatePicker />
            </LocalizationProvider>
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
  
				<TableCell align="left">Loại GD</TableCell>
				<TableCell align="left">Bán</TableCell>
				<TableCell align="left">Mua</TableCell>
				<TableCell style={{ fontWeight: 600, fontSize: "16px" }}>
				  Sale bên MUA
				</TableCell>
				<TableCell align="left">Product</TableCell>
				<TableCell align="left">Giá</TableCell>
				<TableCell align="left">Mã Booking</TableCell>
				<TableCell align="left">Ngày GD</TableCell>
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
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				Giao dịch CĐT (có booking)
				</TableCell>
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				CĐT
				</TableCell>
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				  <div>ĐỖ NGUYỄN ĐỨC NAM</div>
				</TableCell>
  
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				  <div>Nguyễn Thị Hồng Tuyết</div>
				</TableCell>
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				AK7-004.01
				</TableCell>
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				3,483,065,000
				</TableCell>
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				737
				</TableCell>
				<TableCell align="left" style={{ verticalAlign: "top" }}>
				23/04/2022
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
}

export default Transaction