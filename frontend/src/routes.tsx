import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Login} from "./screen/Login"

export function Routas(){
  return(
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>} />
      </Routes>
    </Router>
  )
}