import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.230:3000/student?email=${email}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        console.log("Login successful");
        // Add logic to handle successful login, e.g., redirect to another page.
      } else {
        console.error("Login failed");
        // Add logic to handle failed login, e.g., display an error message.
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle other errors that may occur during the fetch.
    }
  };
  

  return (
    <>
      <div class="bg-gray-100 p-8 w-96 mx-auto rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-4 ">Login</h1>
        <label class="block ">Email:</label>
        <input
          class="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label class="block ">Password:</label>
        <input
          class="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Submit</button>
      </div>
    </>
  );
};

export default Login;
