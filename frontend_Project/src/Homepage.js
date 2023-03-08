import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './All.css'

export default function Homepage() {

  
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://127.0.0.1:8080/getemployee')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  

    const handleDelete = (id) => {
      axios.delete(`http://127.0.0.1:8080/deleteemployeeentity/${id}`)
        .then(response => {
          setData(data.filter(data => data.id !== id));
          console.log(response + "deleted");
        })
        .catch(error => {
          console.log(error);
        });
    };
  return (
        <div>
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>designation</th>
            <th>age</th>
            <th>salary</th>
            <th>mailid</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              
              <td>{item.name}</td>
             
              <td>{item.designation}</td>
              
              <td>{item.age}</td>
              
              <td>{item.salary}</td>
              <td>{item.mailid}</td>
              <td>{item.address}</td>
              
              <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
    
    
  )
}
