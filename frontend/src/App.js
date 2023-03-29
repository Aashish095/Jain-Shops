
// import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Account from "./pages/Account";
import CreateOrder from "./pages/CreateOrder";
import Logout from "./pages/Logout";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path='' Component={Main} />
                <Route path='/create_account' Component={CreateAccount} />
                <Route path='/login' Component={Login} />
                <Route path='/dashboard' Component={Dashboard} />
                <Route path="/products" Component={Products} />
                <Route path="/account" Component={Account}/>
                <Route path="/create/:id" Component={CreateOrder}/>
                <Route path="/logout" Component={Logout}/>
            </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
