
import React, { Component } from 'react'

export default class Collegereg extends Component {
constructor(){
  super();
  this.state ={
    "collegeName": "",
    "address": "",
    "city": "",
    "mobileNo": '',

  }
}
handleData(event){
  event.preventDefault()
  console.log("Handle data",this.state);

fetch('https://manraj-ors-1.onrender.com/college',{
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
    <h1>Add college data</h1>
    <label> collegeName : <input type='text' name='' id='' placeholder='collegeName' value={this.state.collegeName}
    onChange={(event)=>this.setState({collegeName:event.target.value})}/></label><br/> <br/>
     <label> address : <input type='text' name='' id='' placeholder='address' value={this.state.address}
    onChange={(event)=>this.setState({address:event.target.value})}/></label><br/> <br/>
     <label> city : <input type='text' name='' id='' placeholder='city' value={this.state.city}
    onChange={(event)=>this.setState({city:event.target.value})}/></label><br/> <br/>
   
     <label> mobileNo: <input type='text' name='' id='' placeholder='mobile' value={this.state.mobileNo}
    onChange={(event)=>this.setState({mobileNo:event.target.value})}/></label><br/> <br/>
   
    <button onClick={(event)=>this.handleData(event)}>submit</button>
  </div>
  ) 
}

  }

