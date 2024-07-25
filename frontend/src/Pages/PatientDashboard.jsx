// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";

// const PatientDashboard = () => {

  
//   const [appointment, setAppointment] = useState({
//     doctorFirstName: '',
//     doctorLastName:'',

//     status: '',
//     firstName: '',
//     lastName:''
//   });

//   useEffect(() => {
//     // Fetch data from the backend
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/v1/user/patient/appointment',
//           { withCredentials: true }
//         );
//         // console.log("response", response.data.appointments[0].doctor.firstName);
//         const doctorFirstName = response.data.appointments[0].doctor.firstName;
//         const doctorLastName = response.data.appointments[0].doctor.lastName;
//         // console.log("doctor",doctorFirstName,doctorLastName);
//          const firstName = response.data.appointments[0].firstName; 
//           const lastName  = response.data.appointments[0].lastName;
//           const status = response.data.appointments[0].status;
//         // const { firstName, lastName, status } = response.data;
//         // console.log(response.data);
//         setAppointment({ doctorFirstName,doctorLastName, firstName, lastName,status });
//       } catch (error) {
//         console.error('Here is error!', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="container form-component appointment-form " style={{ marginTop: '300px' }}>
//         <h2>Appointment Details</h2>
//       <p><strong>Doctor Name:</strong> {appointment.doctorFirstName} {appointment.doctorLastName}</p>
//       <p><strong>Patient Name:</strong> {appointment.firstName} {appointment.lastName}</p>
//       <p><strong>Status:</strong> {appointment.status}</p>
        
//       </div>
//     </>
//   );
// };

// export default PatientDashboard;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const PatientDashboard = () => {
  const [appointment, setAppointment] = useState({
    doctorFirstName: '',
    doctorLastName: '',
    status: '',
    firstName: '',
    lastName: ''
  });

  const [appointmentId, setAppointmentId] = useState(null); // Add state to store the appointment ID

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user/patient/appointment', {
          withCredentials: true
        });

        const appointmentData = response.data.appointments[0];
        const { doctor: { firstName: doctorFirstName, lastName: doctorLastName }, firstName, lastName, status, _id } = appointmentData;

        setAppointment({ doctorFirstName, doctorLastName, firstName, lastName, status });
        setAppointmentId(_id); // Set the appointment ID
      } catch (error) {
        console.error('Here is error!', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    if (!appointmentId){
    toast.success("Don't have appointment");
    return;
    }

    try {
        const {data} = await axios.delete(`http://localhost:4000/api/v1/appointment/delete/${appointmentId}`, {
        withCredentials: true
      });
      toast.success(data.message);
      // Handle successful deletion (e.g., show a message, clear state, etc.)
      setAppointment({
        doctorFirstName: '',
        doctorLastName: '',
        status: '',
        firstName: '',
        lastName: ''
      });
      setAppointmentId(null); // Clear the appointment ID
    } catch (error) {
      console.error('here is error', error);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form" style={{ marginTop: '300px' }}>
        <h2>Appointment Details</h2>
        <p><strong>Doctor Name:</strong> {appointment.doctorFirstName} {appointment.doctorLastName}</p>
        <p><strong>Patient Name:</strong> {appointment.firstName} {appointment.lastName}</p>
        <p><strong>Status:</strong> {appointment.status}</p>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default PatientDashboard;
