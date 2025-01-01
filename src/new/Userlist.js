import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export default class USerlist extends Component {
  constructor(){
    super()
      this.state={
        data : []
      }
  }
  update=()=>{
    fetch("https://manraj-ors-1.onrender.com/user")
     .then((response) => 
    response.json()).then((result) => {
    console.log("result....")
        this.setState({data : result})
      });
      
  }

  componentDidMount(){
    this.update()
  }

  render() {
      console.log("Render...", this.state.data)

    return (
      <>
      {/* <Login/> */}

  <div>
      <table >
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>loginId</th>tu
            <th>password</th>
            <th>roleId</th>
            <th>dob</th>
           
           </tr>
        </thead>
        <body >
          {
            this.state.data.map((item)=>{
              console.log("first", item)

              // key={item._id}
              return(
                <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.loginId}</td>
              <td>{item.password}</td>
              {/* <td >{item.roleId}</td> */}
              <td>{item.dob}</td>
              <td>{item._id}</td>
            
            </tr>
              )
            })
           
          }
        </body>
      </table>
      </div>
     

      
      </>
    )
  }
}