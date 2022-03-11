import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Countries from "./Components/CountriesComponent/Countries";
import { Decode } from "./Components/DecodeComponent/Decode";


export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/countries" />} />
        <Route exact path="/countries" element={<Countries />} />
        <Route exact path="/decode" element={<Decode />}  />    
      </Routes>
    </Router>
  );
}
