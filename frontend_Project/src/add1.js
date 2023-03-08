import React, {Component} from 'react';
import axios from 'axios';
import './All.css'
class Create extends Component {
    constructor(props){
      super(props);
      this.state = {
        id : '',
        name : '',
        designation : '',
        age : '',
        salary : '',
        mailid : '',
        address : ''
      }
    }
  
    handleIdChange = (event) =>{
      this.setState({id : event.target.value});
    }
    handleNameChange = (event) =>{
      this.setState({name : event.target.value});
    }
    handleDesignationChange = (event) =>{
      this.setState({designation : event.target.value});
    }
    handleAgeChange = (event) =>{
      this.setState({age : event.target.value});
    }
    handleSalaryChange = (event) =>{
      this.setState({salary : event.target.value});
    }
    handleMailidChange = (event) =>{
      this.setState({mailid : event.target.value});
    }
    handleAddressChange = (event) =>{
        this.setState({address : event.target.value});
      }
    
  
    handleSubmit = (event) => {
      event.preventDefault();
      // console.log({ id, name, designation, age });
      const data = {
        id : this.state.id ,
        name : this.state.name , 
        designation : this.state.designation,
        age  : this.state.age ,
        salary : this.state.salary,
        mailid  : this.state.mailid,
        address  : this.state.address 
      }
      console.log(data);
      axios.post('http://127.0.0.1:8080/addemployee', data)
    };
  
    render (){
      return(
          <container>
      <h1>Add Details</h1>
        <form className='add' onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="id"
            value={this.state.id}
            onChange={this.handleIdChange}
          /><br></br><br></br>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          /><br></br><br></br>
          <input
            type="text"
            placeholder="designation"
            value={this.state.designation}
            onChange={this.handleDesignationChange}
          /><br></br><br></br>
          <input
            type="number"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          /><br></br><br></br>
          <input
            type="number"
            placeholder="salary"
            value={this.state.salary}
            onChange={this.handleSalaryChange}
          /><br></br><br></br>
          <input
            type="text"
            placeholder="mailid"
            value={this.state.mailid}
            onChange={this.handleMailidChange}
          /><br></br><br></br>
          <input
            type="text"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleAddressChange}
          /><br></br><br></br>
          <button className='but' type="submit">Add Value</button>
        </form>
      </container>
    );
  }
  }
  export default Create