import React from "react";
import "./Dashboard.css";
import { AiFillDashboard } from "react-icons/ai";
import CardBox from "./CardBox";
import Stack from "@mui/material/Stack";
const Dashboard = () => {
  return (
    <div class="dashboard">
      <div class="dashHeader">
        <div className="head-left">
          <p className="title">Dashboard</p>
          <p className="sub-title">Description...</p>
        </div>
        <div className="head-right">
          <AiFillDashboard className="dashIcon" />
          <p>Home</p>
        </div>
      </div>
      <div className="dash-container">
      <Stack direction="row" spacing={2} className="cardBox-container">
        <CardBox title="Card Title">
          <div>
            <p>This is the content of the card.</p>
            <p>Another paragraph.</p>
          </div>
        </CardBox>

        <CardBox title="Card 2">
          <div>
            <p>This is the content of the card.</p>
            <p>Another paragraph.</p>
          </div>
        </CardBox>
        <CardBox title="Card 3">
          <div>
            <p>This is the content of the card.</p>
            <p>Another paragraph.</p>
          </div>
        </CardBox>
      </Stack>
      </div>
      
    </div>
  );
};

export default Dashboard;
