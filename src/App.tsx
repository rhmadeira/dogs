import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./shared/components/Footer";
import Header from "./shared/components/Header";
import Home from "./shared/components/Home";
import Login from "./shared/components/Login/Login";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./shared/components/Elements/ProtectedRoute";
import User from "./shared/components/User/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
