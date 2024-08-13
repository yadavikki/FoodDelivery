import React, { useState } from "react";
import { json, Link } from "react-router-dom";

export default function Signup() {
  const[credentials,setcredentials]=useState({name:"",email:"",password:"",password:"",geolocation:""})
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password, location:credentials.geolocation})
        });
        const json=await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")

        }
        if(json.success){
            alert(" Credentials added successfull")

        }

    }
    const onChange= (event)=>{
       setcredentials({...credentials,[event.target.name]:event.target.value}) 
    }
  return (
    <div>
       <div className="container"> 
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="name" onChange={onChange} value={credentials.name} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={onChange}
            value={credentials.password}
            id="exampleInputAddress"
          />
        </div>
          
          <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            onChange={onChange}
            value={credentials.geolocation}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
      </form>
      </div>
    </div>
  );
}
