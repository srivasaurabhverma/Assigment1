import React from 'react'
import './Login.css'
const gotoadmin = ()=>{
    let ans = prompt("Plese Enter The Secrect Code");
    if(ans == 'gotoadmin')
    {
         
        window.location.href = './Admin'
    }
 
}

const gotoUser = ()=>{
    window.location.href = '/User'
}

{/* <button onClick={gotoadmin} id="Admin_btn">Admin</button>
<button onClick={gotoUser} id="Admin_btn">User</button> */}
function Login() {
    return (
        <div className="Login_page" id="Login_page">
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEP-5NrA-Pftg/company-logo_200_200/0/1620818954407?e=1629936000&v=beta&t=NzK9zqlTgh7ylE9j4YShfMgejkJ7X4gQKfPFemklBlw" alt="" className="login_image" />
             <h2 className="user_title"> Great Food is Wating For You </h2>
            <div className="main_login">
              <button id="Admin" onClick={gotoadmin}>ADMIN</button>
              <button id="User" onClick={gotoUser} >USER</button>
            </div>
        </div>
    )
}

export default Login
