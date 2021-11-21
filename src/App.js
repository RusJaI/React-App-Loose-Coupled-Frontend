import React, { Component } from "react";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStudent from "./components/addStudent";
import UpdateStudent from "./components/updateStudent";
import ViewStudents from "./components/viewStudents";

class App extends Component{

  render(){
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-secondary">
          <Link to={"/students"} className="navbar-brand" style={{paddingLeft:"5%"}}>
            StudentApp
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/students"} className="nav-link">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/new"} className="nav-link">
                New
              </Link>
            </li>
          </div>
        </nav>
        
        <div className="container mt-3">
        <Routes>
            <Route path='/' element={<ViewStudents/>} />
            <Route path="/students" element={<ViewStudents/>} />
            <Route path='/new' element={<AddStudent/>} />
            <Route path="/students/:id" element={<UpdateStudent/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
