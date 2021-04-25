import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./SideBar.css";
import {
  ChevronLeftOutlined as CollapseIcon,
  ChevronRightOutlined as ExpandIcon,
  AccountTreeOutlined as OBSMIcon,
} from "@material-ui/icons";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar__container ${collapsed && " sidebar__collpase"}`}>
      <button
        className="sidebar__button"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="collapse__button">
          {collapsed ? (
            <ExpandIcon fontSize="small" />
          ) : (
            <CollapseIcon fontSize="small" />
          )}
        </div>
      </button>
      <NavLink className="sidebar__button" to="/obsm">
        <div className="menu__button">
          <OBSMIcon fontSize="small" htmlColor="lightblue" />
          <span className="menu__button__text">OBSM</span>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
