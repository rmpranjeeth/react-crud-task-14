import React, { useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser  from "./components/AddUser";
import EditUser from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [file, setFile] = useState("");
  return (
    <div className="app" style={{ maxWidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
      <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/add" element={<AddUser file={file} setFile={setFile} />} />
            <Route path="/edit/:id" element={<EditUser file={file} setFile={setFile}/>}/>
       </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
