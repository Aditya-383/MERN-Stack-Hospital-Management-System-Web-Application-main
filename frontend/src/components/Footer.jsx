import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "08:00 - 23:00",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "08:00 - 23:00",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "08:00 - 23:00",
    },
    {
      id: 4,
      day: "Thursday",
      time: "08:00 - 23:00",
    },
    {
      id: 5,
      day: "Friday",
      time: "08:00 - 23:00",
    },
    {
      id: 6,
      day: "Saturday",
      time: "08:00 - 23:00",
    },
    {
      id: 7,
      day: "Sunday",
      time: "09:00 - 22:00",
    }
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/image.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Day</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Time</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <div>
              <FaPhone />
              <span>+91-1234567890</span>
            </div>
            <div>
              <MdEmail />
              <span>hello@trustcare.in</span>
            </div>
            <div>
              <FaLocationDot />
              <span>Burdwan, West Bengal</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
