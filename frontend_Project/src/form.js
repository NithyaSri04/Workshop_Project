import React from 'react'
import './All.css'
export default function form() {
  return (
    <div className='main'>
        <h1>Employee Details</h1>
        <form>
            <input type={"number"} placeholder="Enter Employee Id"></input><br></br><br></br>
            <input type={"text"} placeholder="Enter Employee Name"></input><br></br>  <br></br>         
             <input type={"number"} placeholder="Enter Employee Age"></input><br></br><br></br>
            <input type={"number"} placeholder="Enter Employee Salary"></input><br></br><br></br>
            <input type={"text"} placeholder="Enter Employee Email-id"></input><br></br><br></br>
            <input type={"text"} placeholder="Enter Employee Address"></input><br></br><br></br>
        </form>
        <button>Submit</button>
    </div>
  )
}
