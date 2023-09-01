import React, { useState } from "react";
import UserComponent from "./Components/Users/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home"></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
