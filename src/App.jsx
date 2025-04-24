import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Awareness from "./Pages/Awareness"
import LastDay from "./Pages/LastDay";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Awareness" element={<Awareness />}/>
            <Route path="/LastDay" element={<LastDay />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
