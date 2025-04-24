import React, { useState } from "react"
import { useNavigate } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [Name, setName] = useState("");

  const navigate = useNavigate()

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handelNameChange = e => {
    setName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handelQualification = e => {
    setQualification(e.target.value);
  };
  const handelPhoneNumber = e => {
    setPhoneNo(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://192.168.0.230:3000/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          email: email,
          phone_no: phoneNo,
          password: password,
          qualification: qualification,
        }),
      });

      if (response.ok) {
        console.log("SignUp successful");
        navigate("/")
        // Handle successful signup, e.g., redirect to login page
      } else {
        console.error("SignUp failed");
        // Handle failed signup, e.g., display an error message
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle other errors that may occur during the fetch
    }
  };

  return (
    <>
      <div className="bg-gray-100 p-8 w-96 mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <label className="block">Name:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={Name}
          onChange={handelNameChange}
        />
        <label className="block">Email:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label className="block">Phone_no:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="number"
          name="number"
          id="number"
          placeholder="Enter phone no"
          value={phoneNo}
          onChange={handelPhoneNumber}
        />
        <label className="block">Password:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label className="block">Qualification:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="password"
          name="Qualification"
          id="Qualification"
          placeholder="Qualification"
          value={qualification}
          onChange={handelQualification}
        />
        <button onClick={handleSignUp}>Signup</button>
      </div>
    </>
  );
};

export default SignUp;
