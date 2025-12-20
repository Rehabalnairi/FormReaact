import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/home.jsx";
import Reg from "./components/reg/reg.jsx";
import Errors from "./components/errors/errors.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Reg />} />
        <Route path="*" element={<Errors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
