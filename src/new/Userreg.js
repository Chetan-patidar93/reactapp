


import React, { Component } from 'react'


export default class Userreg extends Component {
constructor(){
  super();
  this.state ={
    "firstName": "",
    "lastName": "",
    "loginId": "",
    "password": "",
    "roleId": "",
    "dob": "",
  }
}
handleData(event){
  event.
  console.log("Handle data",this.state);

fetch('https://manraj-ors-1.onrender.com/marksheet',{
  method: 'Post',
  body: JSON.stringify(this.state),
  headers: {
    'Content-type':'application/json; charset-UTF-8 ',
  }
}).then((response) =>response.json()).then((json) => console.log(json));

}
render(){
  return(
  <div>
    <h1>Marksheet data</h1>
    <label> firstName : <input type='text' name='' id='' placeholder='firstName' value={this.state.firstName}
    onChange={(event)=>this.setState({firstName:event.target.value})}/></label><br/> <br/>
     <label> lastName : <input type='text' name='' id='' placeholder='lastName' value={this.state.lastName}
    onChange={(event)=>this.setState({lastName:event.target.value})}/></label><br/> <br/>
     <label> loginId : <input type='text' name='' id='' placeholder='loginId' value={this.state.loginId}
    onChange={(event)=>this.setState({loginId:event.target.value})}/></label><br/> <br/>
   
     <label> password: <input type='text' name='' id='' placeholder='password' value={this.state.password}
    onChange={(event)=>this.setState({password:event.target.value})}/></label><br/> <br/>

<label> roleId: <input type='text' name='' id='' placeholder='roleId' value={this.state.roleId}
    onChange={(event)=>this.setState({roleId:event.target.value})}/></label><br/> <br/>

<label> dob: <input type='text' name='' id='' placeholder='dob' value={this.state.dob}
    onChange={(event)=>this.setState({dob:event.target.value})}/></label><br/> <br/>

   
    <button onClick={()=>this.handleData()}>submit</button>
  </div>
  ) 
}

  }

