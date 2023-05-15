import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./shared/components/Footer";
import { UserStorage } from "./shared/context/UserContext";
import Header from "./shared/components/Header";
import Home from "./pages/Home";
import { useEffect } from "react";
import { getPhotos } from "./shared/services/photos";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/services/react-query";

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
