import axios from 'axios';
import React from 'react'

const ApplyScholarship = () => {
    const handleApply = () => {
        axios.post("http://localhost:8080/addapplication",{
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          age: document.getElementById('age').value,
          phno: document.getElementById('phno').value,
          clg: document.getElementById('clg').value,
          edu: document.getElementById('edu').value,
          year: document.getElementById('year').value,
          gpa: document.getElementById('gpa').value,
          type: document.getElementById('type').value,
        }).then((res)=>{
          alert(res.data)
        })
      };
  return (
    <div>
        <div className="apply-contanier">
       Name: <input type="text" name="name" id="name" />
       Email: <input type="text" name="email" id="email" />
       Age: <input type="text" name="age" id="age" />
       Phone number <input type="text" name="phno" id="phno" />
       University/college name <input type="text" name="clg" id="clg" />
       Current Education <input type="text" name="edu" id="edu" />
       current year <input type="text" name="year" id="year" />
       CGPA <input type="text" name="gpa" id="gpa" />
       Type <input type="text" name="type" id="type" />
      </div>
        <button className="apply-button" onClick={handleApply}>
          Apply
        </button>
     
    </div>
  )
}

export default ApplyScholarship