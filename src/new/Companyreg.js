

import React, { Component } from 'react'

export default class Companyereg extends Component {
constructor(){
  super();
  this.state ={
    "name": "",
    "discription": "",
  
  }
}
handleData(){
  console.log("Handle data",this.state);

fetch('https://manraj-ors-1.onrender.com/role',{
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
    <h1>Add Company data</h1>
    <label> name : <input type='text'  placeholder='name' value={this.state.name}
    onChange={(event)=>this.setState({name:event.target.value})}/></label><br/> <br/>
   
     <label> discription : <input type='text'  placeholder='discription' value={this.state.discription}
    onChange={(event)=>this.setState({discription:event.target.value})}/></label><br/> <br/>
   
   
   
    <button onClick={()=>this.handleData()}>submit</button>
  </div>
  ) 
}

  }

