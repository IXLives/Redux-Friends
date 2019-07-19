import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
