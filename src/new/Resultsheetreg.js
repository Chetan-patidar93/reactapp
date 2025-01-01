
import React, { Component } from 'react'
import './Resultsheetreg.css';

export default class Resultsheetreg extends Component {
constructor(){
  super();
  this.state ={
    "name": "",
    "studentId": "",
    "rollNo": "",
    "physics": "",
    "chemistry": "",
    "maths": "",
  }
}
handleData(){
  console.log("Handle data",this.state);

fetch('https://manraj-ors-1.onrender.com/marksheet',{
  method: 'Post',
  body: JSON.stringify(this.state),
  headers: {
    'Content-type':'application/json; charset-UTF-8 ',
  }
}).then((response) => response.json()).then((json) => console.log(json));

}
render(){
  return(
  <div className='main'>
    <h1 className='container'>Marksheet data</h1>
    <div className='group'> 
        <label> name : <input type='text' name='' id='' placeholder='name' value={this.state.name}
    onChange={(event)=>this.setState({name:event.target.value})}/></label><br/> <br/>
     <label> studentId : <input type='text' name='' id='' placeholder='studentID' value={this.state.studentId}
    onChange={(event)=>this.setState({studentId:event.target.value})}/></label><br/> <br/>
     <label> rollNo : <input type='text' name='' id='' placeholder='rollno' value={this.state.rollNo}
    onChange={(event)=>this.setState({rollNo:event.target.value})}/></label><br/> <br/>
   
     <label> physics: <input type='text' name='' id='' placeholder='physics' value={this.state.physics}
    onChange={(event)=>this.setState({physics:event.target.value})}/></label><br/> <br/>

<label> chemistry: <input type='text' name='' id='' placeholder='chemistry' value={this.state.chemistry}
    onChange={(event)=>this.setState({chemistry:event.target.value})}/></label><br/> <br/>

<label> maths: <input type='text' name='' id='' placeholder='maths' value={this.state.maths}
    onChange={(event)=>this.setState({maths:event.target.value})}/></label><br/> <br/>
</div>
 
   
    <button className='button' onClick={()=>this.handleData()}>submit</button>
  </div>
  ) 
}

  }

