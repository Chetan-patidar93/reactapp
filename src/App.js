import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import College from './new/College'
import Login from './new/Login'
import Registor from './new/Registor'
import Role from './new/Role'
import Marks from './new/Marks'
import Navbar from "./new/Navbar";
import React, { Component } from 'react'
import Home from "./new/Home";
import Collegereg from "./new/Collegereg";
import Resultsheetreg from "./new/Resultsheetreg";
import Companyereg from "./new/Companyreg";
import user from "./new/user";
import Userreg from "./new/Userreg";
import USerlist from "./new/Userlist";

export default class App extends Component {
  render() {
    return (
     <>     
     <BrowserRouter>
     <Navbar/>
    
    
    
     
     
     <Routes>
     <Route path="Userlist" element={<USerlist/>}/>

      <Route path="user" element={<user/>}/>
     <Route path="Companyreg" element={<Companyereg/>}/>
     <Route path="Userreg" element={<Userreg/>}/>
    

      <Route path="Resultsheetreg" element={<Resultsheetreg/>}/>
      <Route path="Collegereg" element={<Collegereg/>}/>
      <Route path="/" element={<College/>}/>
      <Route path="Login" element={<Login />}/>
      <Route path="Registor" element={<Registor/>}/>
      <Route path="Role" element={<Role/>}/>
      <Route path="Marks" element={<Marks/>}/>
      <Route path="Home" element={<Home/>}/>

      

     </Routes>
     </BrowserRouter>
      </>

    )
  }
}
