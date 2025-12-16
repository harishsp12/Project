import React, { useState } from "react";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate } from "react-router-dom";

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
       e.preventDefault();


    if (!fname || !lname || !username || !pass) {
      toast.error("Please fill all fields");
      return;
    }

    const userData = {
      firstname: fname,
      lastname: lname,
      email: username,
      password: pass
    };

    try {
      const response = await fetch("http://localhost:8080/employee/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.text();
      console.log("Server:", result);

      if (result === "saved successfully") {
        toast.success("Signup successful!");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(result);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error");
    }
  };

  return (
    <div className="contain">
      <ToastContainer />
      <form onSubmit={handleSignup} className="form-box">
        <h1 className="signup">Signup</h1>

        <input
          type="text"
          placeholder="Enter Firstname"
          className="inp-box txt"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Lastname"
          value={lname}
          className="inp-box txt"
          onChange={(e) => setLname(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={username}
          className="inp-box txt"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          className="inp-box txt"
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit" className="inp-box inp-color">SUBMIT</button>

        <Link 
  to="/" 
  style={{ color: "white", textDecoration: "none" }}
>
  login
</Link>  

      </form>
    </div>
  );
}

export default Signup;
