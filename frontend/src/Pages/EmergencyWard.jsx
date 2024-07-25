// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";

// const EmergencyWard = () => {

  
//   const [appointment, setAppointment] = useState({
//     doctorName: '',
//     status: '',
//     patientName: ''
//   });

//   useEffect(() => {

//     axios.get('http://localhost:4000/api/v1/emergency')
//       .then(response => {
//         // const { doctorName, patientName, status } = response.data;
//         console.log(response.data);
//         setAppointment({ doctorName, patientName, status });
//       })
//       .catch(error => {
//         console.error('There was an error fetching the appointment data!', error);
//       });
//   }, []);

//   return (
//     <>
//       <div className="container form-component appointment-form " style={{ marginTop: '300px' }}>
//         <h2>Appointment Details</h2>
//       {/* <p><strong> Name:</strong> {appointment.doctorName}</p> */}
//       <p><strong>Patient Name:</strong> {appointment.patientName}</p>
//       <p><strong>Age:</strong> {appointment.status}</p>
//       <p><strong>Contact:</strong> {appointment.status}</p>
        
//       </div>
//     </>
//   );
// };

// export default EmergencyWard;


// *******************************************************************


import axios from "axios";
import React, { useEffect, useState } from "react";

const EmergencyWard = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/emergency')
      .then(response => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointment data!', error);
      });
  }, []);

  return (
    <>
      <div className="container form-component " style={{ marginTop: '300px' }}>
        <h2>Emergency Ward Details</h2>
        {details.length > 0 ? (
          details.map((details, index) => (
            <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              {/* <p><strong>Doctor Name:</strong> {details.doctorName || 'N/A'}</p> */}
              <p><strong>Patient_id:</strong> {details._id}</p>
              <p><strong>Patient Name:</strong> {details.name}</p>
              <p><strong>Age:</strong> {details.age}</p>
              <p><strong>Contact:</strong> {details.phone}</p>
              <p><strong>Gender:</strong> {details.gender}</p>
              <p><strong>Date:</strong> {details.updatedAt}</p>
            </div>
          ))
        ) : (
          <p>No Details found.</p>
        )}
      </div>
    </>
  );
};

export default EmergencyWard;
