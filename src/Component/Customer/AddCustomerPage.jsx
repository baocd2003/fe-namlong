import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaPencilAlt } from "react-icons/fa";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const AddCustomerPage = () => {
  const [name, setName] = useState("");
  const options = ["TP HCM", "Đà Nẵng", "Hà  Nội"];
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => setName(e);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="create-container">
      <form action="" className="form-container">
        <div className="create-header">
          <div className="create-header-left">Create</div>
          <Link to="/customers">
            <div className="create-header-right">
              <TfiMenuAlt />
              List
            </div>
          </Link>
        </div>
        {/* Ông bà */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Ông|Bà
          </div>
          <div className="input-group">
            <RadioGroup row>
              <FormControlLabel value="female" control={<Radio />} label="Bà" />
              <FormControlLabel value="male" control={<Radio />} label="Ông" />
            </RadioGroup>
          </div>
        </div>
        {/* Họ và chữ lót */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Họ và chữ lót
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input Họ và chữ lót"
            />
          </div>
        </div>

        {/* Tên */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Tên
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField className="text-input" placeholder="Input Tên" />
          </div>
        </div>
        {/* Ngày sinh */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Ngày sinh
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
        {/* Email */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Email
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <MdEmail className="input-icon" />
            </div>
            <TextField className="text-input" placeholder="Input Email" />
          </div>
        </div>

        {/* Phone */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Phone
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPhoneAlt className="input-icon" />
            </div>
            <TextField className="text-input" placeholder="Input Phone" />
          </div>
        </div>
        {/* CMND | CCCD | PP */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>CMND | CCCD | PP
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input CMND | CCCD | PP"
            />
          </div>
        </div>

        {/* Ngày cấp */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Ngày cấp
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
        {/* Nơi cấp */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Nơi cấp
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField className="text-input" placeholder="Input Nơi cấp" />
          </div>
        </div>
        {/* Địa chỉ thường trú */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Địa chỉ thường trú
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input Địa chỉ thường trú"
            />
          </div>
        </div>
        {/* Tỉnh thành */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Tỉnh thành
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
        {/* Quận Huyện */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Quận Huyện
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

        {/* Phường Xã */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Phường Xã
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

        {/* Tài khoản NH */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Tài khoản NH
          </div>
          <div className="input-group">
            <div className="input-icon-container">
              <FaPencilAlt className="input-icon" />
            </div>
            <TextField
              className="text-input"
              placeholder="Input Tài khoản NH"
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

        {/* Note  */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Note
          </div>
          <div className="input-group">
            <textarea className="text-editor"></textarea>
          </div>
        </div>

        {/* Hình CMND mặt trước */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Hình CMND mặt trước
          </div>
          <div className="input-group">
              <TextField
                className="text-input"
                placeholder="Select Image"
                disabled
              />
			  <div>
			  <Button
                component="label"
                variant="contained"
                startIcon={<FaRegFolderOpen />}
				style={{width:'120px', height:'30px',backgroundColor : '#3c8dbc'}}
              >
                Browse
                <VisuallyHiddenInput type="file" />
              </Button>
			  </div>
			  
          </div>
        </div>

		{/* Hình CMND mặt sau */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Hình CMND mặt sau
          </div>
          <div className="input-group">
              <TextField
                className="text-input"
                placeholder="Select Image"
                disabled
              />
			  <div>
			  <Button
                component="label"
                variant="contained"
                startIcon={<FaRegFolderOpen />}
				style={{width:'120px', height:'30px',backgroundColor : '#3c8dbc'}}
              >
                Browse
                <VisuallyHiddenInput type="file" />
              </Button>
			  </div>
			  
          </div>
        </div>

        {/* Chọn Sales */}
        <div className="form-group">
          <div className="label">
            <span style={{ color: "red" }}>*</span>Chọn Sales
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
        <div className="btn-container">
			
          <Button variant="contained" className="submit-button">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomerPage;
