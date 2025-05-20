import React, { useState } from "react";
import "./form.css";
// import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Form() {

  
  const [FormData, setFormDate] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormDate({
      ...FormData,
      [name]: value,
    });
    setErrorMessage('');
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if(validateInput()) {
    console.log("form was submitted :", FormData);
    navigate('/About');
    }
  };

  const validateInput = () => {
    if (FormData.name.trim() === '') {
      setErrorMessage('Name is required.');
      return false;
    }
    if (FormData.email.trim() === '') {
      setErrorMessage('Email is required.');
      return false;
    }
    if (FormData.phone.trim() === '') {
      setErrorMessage('Phone number is required.');
      return false;
    }
    return true;
  };

  return (
    <div className="container1">
      <form onSubmit={handlesubmit}>
        <h4 className="name">Name</h4>
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handlechange}
          placeholder="e.g. Stephen King"
          required
          className="input1"
        />
        <h4 className="emailaddress">
          Email Address
        </h4>
        <input
          type="text"
          name="email"
          value={FormData.email}
          onChange={handlechange}
          placeholder="e.g. stephenking@lorem.com"
          required
          className="input2"
        />
        <h4 className="phonenumber">
          Phone Number
        </h4>
        <input
          type="text"
          name="phone"
          value={FormData.phone}
          onChange={handlechange}
          placeholder="e.g.+1 234 567 890"
          required
          className="input3"
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className="btn">Next Step</button>
        {/* <Link to="/About" onClick={validateInput}><button className="btn">Next Step</button></Link> */}
      </form>
    </div>
  );
}
