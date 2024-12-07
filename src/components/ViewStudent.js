import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

const ViewStudent = () => {
  const [result, setResult] = useState(null); 
  const [selectedApplication, setSelectedApplication] = useState({
    name: "",
    email: "",
    age: "",
    phno: "",
    clg: "",
    edu: "",
    year: "",
    gpa: "",
    type: "",
    status:""
  });

  useEffect(() => {
    getAllApplications();
  }, []);

  const getAllApplications = () => {
    axios.get("http://localhost:8080/getapplication")
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditStatusAccept = (application) => {
    setSelectedApplication(application);
    alert(application)
    axios.post("http://localhost:8080/agreeapplication",{
          id : selectedApplication.id, 
    }).then((res)=>{
      alert(res.data)
      setResult(null)
      getAllApplications()
    })
  };

  const handleEditStatusReject = (application) => {
    setSelectedApplication(application);
    alert(application.id)
    axios.post("http://localhost:8080/rejectapplication",{
          id : application.id, 
    }).then((res)=>{
      alert(res.data)
      setResult(null)
      getAllApplications()
    })
  };


  if (result === null) {
    return (
      <div>
        <h1>Data is fetching...</h1>
      </div>
    );
  }

  return (
    <div>
      <AdminNav/>
      <h1>Update Students</h1>
      <table border="2">
        <thead>
          <tr>
            <th>Application Id</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>College</th>
            <th>Education</th>
            <th>Year</th>
            <th>GPA</th>
            <th>Type</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {result
            .filter((obj) => obj.status === null) // Only display applications with `null` status
            .map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.age}</td>
                <td>{obj.phno}</td>
                <td>{obj.clg}</td>
                <td>{obj.edu}</td>
                <td>{obj.year}</td>
                <td>{obj.gpa}</td>
                <td>{obj.type}</td>
                
                <td>
                  <button onClick={() => handleEditStatusAccept(obj)}>Accept</button>
                  <button onClick={() => handleEditStatusReject(obj)}>Reject</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;
