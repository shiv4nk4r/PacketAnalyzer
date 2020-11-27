import React from "react";
import "./Home.scss";
import MenuItem from "../menuItem/menuItem";
import {
  ExitToApp,
  AccountCircleOutlined,
  TimelineOutlined,
} from "@material-ui/icons";

function Home() {
  return (
    <div className="home">
      <div className="nav-bar">
        <div className="menu">
          <MenuItem
            title="Account"
            Icon={AccountCircleOutlined}
            isSignOut={false}
          />
          <MenuItem title="Analyze" Icon={TimelineOutlined} isSignOut={false} />
        </div>
        <div className="settings">
          <MenuItem title="Sign Out" Icon={ExitToApp} isSignOut={true} />
        </div>
      </div>
      <div className="window"></div>
    </div>
  );
}

export default Home;
