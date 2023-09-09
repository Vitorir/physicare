import React, { useState } from "react";
import UserComponent from "./Components/Users/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Page404 from "./Pages/Page404/Page404";
import Login from "./Pages/Login/Login";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
