import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaPencilAlt } from "react-icons/fa";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from '@mui/material/Button';
import { FaRegCalendarAlt } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./AddBookingForm.css";
const AddBookingForm = () => {
  const [name, setName] = useState("");
  const options = ["Mizuki", "Waterpoint", "Akari"];
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => setName(e);
  return (
    <div className="create-container">
		
      <form action="" className="form-container">
	  	<div className="create-header">
			<div className="create-header-left">Create</div>
			<Link to="/bookings-event">
			<div className="create-header-right">
				<TfiMenuAlt/>
				List
			</div>
			</Link>
		</div>
        {/* EventNumber */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Event Number
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input Event number"
            />
          </div>
        </div>
        {/* Ngày thông báo */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Ngày thông báo
          </div>
          <div className="input-group">
		  	<div className="input-icon-container">
              <FaRegCalendarAlt className="input-icon" />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>

        {/* Dự án chính */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Dự án chính
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
        {/* Dự án phụ */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Dự án phụ
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

        {/* Thời gian bắt đầu*/}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Thời gian bắt đầu
          </div>
          <div className="input-group">
		  	<div className="input-icon-container">
              <FaRegCalendarAlt className="input-icon" />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>

        {/* Thời gian kết thúc*/}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Thời gian kết thúc
          </div>
          <div className="input-group">
		  	<div className="input-icon-container">
              <FaRegCalendarAlt className="input-icon" />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>

        {/* Chủ tài khoản */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Chủ tài khoản
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input Chủ tài khoản"
            />
          </div>
        </div>

        {/* Số tài khoản */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Số tài khoản
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input Số tài khoản"
            />
          </div>
        </div>

        {/* Ngân hàng */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Ngân hàng
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

        {/* Chi nhánh */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Chi nhánh
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField className="text-input" placeholder="Input Chi nhánh" />
          </div>
        </div>

        {/* Hướng dẫn chuyển khoản */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Hướng dẫn chuyển khoản
          </div>
          <div className="input-group">
            <textarea className="text-editor"></textarea>
          </div>
        </div>

        {/* Số tiền  booking */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Số tiền booking
          </div>
          <div className="input-group">
            <textarea className="text-editor"></textarea>
          </div>
        </div>

        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Trạng thái
          </div>
          <div className="input-group">
            <div className="switch-container" onClick={handleCheck}>
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
          </div>
        </div>
		<div className="btn-container">
			<Button variant="contained" className="submit-button">Submit</Button>
		</div>
      </form>
    </div>
  );
};

export default AddBookingForm;
