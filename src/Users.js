import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from './Main';
import "./User.css";
function Users() {
  return (
    <div className="User">
      <Header Imgsrc="https://media-exp1.licdn.com/dms/image/C4E0BAQEP-5NrA-Pftg/company-logo_200_200/0/1620818954407?e=1629331200&v=beta&t=Epg8djW1rsa4zq_6l5MZv1FK9vNLVx-O0ZHh1IpJpvY" />
      <Sidebar username="Saurabh" />
      <Main/>
    </div>
  );
}

export default Users;
