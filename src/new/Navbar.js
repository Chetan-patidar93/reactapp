
import React, { Component } from 'react';
// import Login2 from './loginpage/Login2';
// import Registration2 from './Registration2';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
  render() {
    return (
      <>

<nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid ">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="Registration">Registration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
                </li>
                </ul>

                <div className="dropdown p-2">
                  <div className="nav-link dropdown-toggle" to="about" data-bs-toggle="dropdown">
                    College
                  </div>
                  <div className="dropdown-menu border border-none" >
                    <li><Link className="dropdown-item" to='Collegelist' type="button">Collegelist</Link></li>
                    <li><Link className="dropdown-item" to='Collegereg' type="button">Collegereg</Link></li>
                  </div>
                </div>


                <div className="dropdown p-2">
                  <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Marks
                  </div>
                  <div className="dropdown-menu border border-none" >
                    <li><Link className="dropdown-item" to='Marsheetlist' type="button">Marksheet list</Link></li>
                    <li><Link className="dropdown-item" to='Resultsheetreg' type="button">Resultsheetreg</Link></li>
                  </div>
                </div>

               
                


                <div className="dropdown p-2">
                  <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Role
                  </div>
                  <div className="dropdown-menu border border-none" >
                    <li><Link className="dropdown-item" to='Companylist' type="button"> Company List </Link></li>
                    <li><Link className="dropdown-item" to='Companyreg' type="button"> Companyreg</Link></li>
                  </div>
                </div>

                <div className="dropdown p-2">
                  <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    user
                  </div>
                  <div className="dropdown-menu border border-none" >
                    <li><Link className="dropdown-item" to='Userlist' type="button">User List</Link></li>
                    <li><Link className="dropdown-item" to='Userreg' type="button">User Reg</Link></li>
                  </div>
                </div>


            </div>
          </div>
        
        </nav >
      </>
    )
  }
}