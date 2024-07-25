import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HospitalEmergencyForm = () => {
  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  // const [nic, setNic] = useState("");
  // const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
 

 
  // const [doctors, setDoctors] = useState([]);
  // useEffect(() => {
  //   const fetchDoctors = async () => {
  //     const { data } = await axios.get(
  //       "http://localhost:4000/api/v1/user/doctors",
  //       { withCredentials: true }
  //     );
  //     setDoctors(data.doctors);
  //     console.log(data.doctors);
  //   };
  //   fetchDoctors();
  // }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
     
      console.log("name",name);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/emergency/post",
        {
          name,
          phone,
          age,
          gender,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setName("");
        setPhone("");
        setAge("");
        setGender("");

        navigate(`/`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
    <div className="container form-component appointment-form" style={{ marginTop: "250px" }}>
    <h2>Emergency Form</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            
            <input
              type="age"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          
          <button style={{ margin: "0 auto" }}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default HospitalEmergencyForm;
