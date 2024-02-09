import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import './CardBox.css'
const CardBox = ({ title, children }) => {
	const [isContentVisible, setIsContentVisible] = useState(true);
	const toggleContentVisibility = () => {
	  setIsContentVisible((prev) => !prev);
	};
	const isChildrenArray = Array.isArray(children);

	return (
	  <Card className={isContentVisible ? 'card' : 'card-hidden'}>
		<Typography className="box-header">
			<div>{title}</div>
		<IconButton className="removeButton" onClick={toggleContentVisibility}>
		  <RemoveIcon />
		</IconButton>
		</Typography>
		<CardContent className={`card-content ${isContentVisible ? '' : 'content-hidden'}`}>
		  {isChildrenArray ? (
			children.map((child, index) => (
			  <div key={index}>{child}</div>
			))
		  ) : (
			children
		  )}
		</CardContent>
	  </Card>
	);
}

export default CardBox