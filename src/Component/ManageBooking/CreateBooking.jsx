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

const CreateBooking = () => {
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
		  {/* Đợt booking */}
		  <div className="form-group">
			<div className="label">
			  <span style={{ color: "red" }}>*</span>Đợt booking
			</div>
			<div className="input-group">
			  <FormControl sx={{ width: 660 }}>
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
  
		  {/* Mã số khách hàng */}
		  <div className="form-group">
			<div className="label">
			  <span style={{ color: "red" }}>*</span>Mã số khách hàng
			</div>
			<div className="input-group">
			  <div className="input-icon-container">
				<FaPencilAlt className="input-icon" />
			  </div>
			  <TextField className="text-input" placeholder="Input Chi nhánh" />
			</div>
		  </div>

		  {/* Số tiền booking */}
		  <div className="form-group">
			<div className="label">
			  <span style={{ color: "red" }}>*</span>Số tiền booking
			</div>
			<div className="input-group">
			  <div className="input-icon-container">
				đ
			  </div>
			  <TextField className="text-input" sx={{width : 200 }}/>
			</div>
		  </div>
  
		  {/* Hình CMND mặt trước */}
		  <div className="form-group">
			<div className="label">
			Ủy nhiệm chi 1
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
				Ủy nhiệm chi 2 (nếu có)
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
}

export default CreateBooking