import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
// import Loading from "./components/Loading/Loading";
// components
import Header from "./components/Header/Header";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MedicalTest from "./pages/MedicalTest/MedicalTest";
import Offers from "./pages/Offers/Offers";
import HomeVisit from "./pages/HomeVisit/HomeVisit";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/medicalTest" element={<MedicalTest />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/homeVisit" element={<HomeVisit />} />
          </Routes>
          <Footer />
        </Router>
      </I18nextProvider>
      {/* <Loading></Loading> */}
    </>
  );
}

export default App;
