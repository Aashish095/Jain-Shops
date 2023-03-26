import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path='' Component={Main} />
            </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
