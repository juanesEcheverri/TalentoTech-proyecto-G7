// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/layout/Header";
// import Footer2 from "./components/layout/Footer2";
import Card from "./components/Card";
// import Footer from "./components/layout/Footer";
// import Header2 from "./components/layout/Header2";

import Layout from "./components/layout/Layout";
import  Dashboard  from "./pages/Dashboard";
import Overview from "./pages/OverView";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <>
    
      <Router>
        <Layout className="flex-grow flex-col min-h-screen"
        style={{backgroundImage: "url('./public/background.png.jpg')"}}>
          {/* <Routes>
            <Route path="/" element={<Card />} />
          </Routes> */}
          <Routes>
            <Route path="/overview" element={<Overview />} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={< Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
          </Routes>

        </Layout>
      </Router>
    </>
  );
}

export default App;
