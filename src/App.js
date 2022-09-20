import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HelloPage from "./components/HelloPage";
import Login from "./components/Login";
import Register from "./components/Register";
import SuccessfullyPage from "./components/SuccessfullyPage";


function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
              <Route path="/" exact element={<HelloPage/>}/>
              <Route path="/login" exact element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/successfully" element={<SuccessfullyPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
