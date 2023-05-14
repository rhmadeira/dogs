import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./shared/components/Footer";
import { UserStorage } from "./shared/context/UserContext";
import Header from "./shared/components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
