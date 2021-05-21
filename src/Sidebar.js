import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { Sidebardata } from "./Sidebardata";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
function Sidebar({username}) {
  return (
    <div className="sidebar">
      <div className="main">
        <div className="Details">
          <Avatar className="avatar" src= "https://yinnepal.files.wordpress.com/2017/11/admin.png?w=640"></Avatar>
          <h3 className="name">{username}</h3>
        </div>

        <div className="down_">
         
            <NotificationsIcon className="options" id="notication" />
            <SearchIcon className="options" id="searchbar"/>
            <MessageIcon className="options" id="messagebar" />
           
        </div>
        <hr className="line_break" />
      </div>

      <ul className="Sidebarlist">
        {Sidebardata.map((val, key) => {
          return (
            <li
              key={key}
              className="row_"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.href = val.link;
              }}
            >
              <div id="icon">{val.Icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="logout">
        <ExitToAppIcon className="icon_logout" />
        <h3 className="Data">Logout</h3>
      </div>
    </div>
  );
}

export default Sidebar;
