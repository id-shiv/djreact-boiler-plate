import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

import {
  SettingsOutlined as SettingsIcon,
  EmojiEmotionsOutlined as FeedbackIcon,
  InfoOutlined as AboutIcon,
  HelpOutlineOutlined as HelpIcon,
  NotificationsOutlined as NotificationsIcon,
  AccountCircleOutlined as AccountsIcon,
} from "@material-ui/icons";

import { ContextConsumer } from "../../context";

const Header = () => {
  return (
    <div className="header__container">
      <NavLink className="header__logo" to="/">
        <h4 className="header__logo__text">ORION Portal</h4>
      </NavLink>

      <div className="header__icon__container">
        <NavLink className="header__icon" to="/notifications">
          <NotificationsIcon fontSize="small" />
          <ContextConsumer>
            {(value) => (
              <p className="notifications__count">
                {value.notifications.length}
              </p>
            )}
          </ContextConsumer>
        </NavLink>

        <div className="header__icon">
          <SettingsIcon fontSize="small" />
        </div>

        <div className="header__icon">
          <HelpIcon fontSize="small" />
        </div>

        <div className="header__icon">
          <FeedbackIcon fontSize="small" />
        </div>

        <div className="header__icon">
          <AboutIcon fontSize="small" />{" "}
        </div>

        <button className="header__user__container">
          <p className="header__user__text">Shiva_Prasad1@dell.com</p>
          <AccountsIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
