import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import { SearchOutlined } from "@material-ui/icons";
let lastscrooltop = 0;
    let navbar = document.getElementById("navbar1__");
    window.addEventListener("scroll", function () {
      let scrolltop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolltop > lastscrooltop) {
        document.getElementById("navbar1__").style.top = "-80px";
      } else {
        document.getElementById("navbar1__").style.top = "0px";
      }
      lastscrooltop = scrolltop;
    });
function Header({Imgsrc}) {
  
  return (
    <div class="container__">
      <div id="navbar1__">
        <nav id="navbar__">
          <img
            src={Imgsrc}
            alt=""
            id="logo"
          />
          <ul id="nav_links__">
            <li>
              <a
                href="https://facebook-7e1e9.web.app/"
                target="_blank"
                id="color_white__"
                className="about"
              >
                About
              </a>
            </li>
            <li>
              <a href="#" id="color_white__" className="res">
              Resources
              </a>
            </li>
            <li>
              <a href="#" id="color_white__" className="contact">
              Contact Us
              </a>
            </li>
            <li>
              <a href="#" id="color_white__" className="inf">
              More Information
              </a>
            </li>
            <li>
             <div className="Search_command">
              <input type="text" id="input_search"/> 
              <button id="btn_search">Search</button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
