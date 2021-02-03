import React, { useState, useEffect } from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";

function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    API.getEmployees().then(res => {
      setEmployees(res.data.results)
      console.log(res.data.results)
    })
  },[])
  return (
    
      <div>
        <Header />
        <SearchBar />                 

        <Table
        employees={employees}
        />
      
      <Footer />
      </div>
    
  );
}

export default App;
