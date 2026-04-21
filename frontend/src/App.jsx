import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GioiThieu from './pages/GioiThieu';
import ThietKeLogo from './pages/ThietKeLogo';
import ThietKeThuongHieu from './pages/ThietKeThuongHieu';
import LienHe from './pages/LienHe';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/thiet-ke-logo" element={<ThietKeLogo />} />
        <Route path="/thiet-ke-thuong-hieu" element={<ThietKeThuongHieu />} />
        <Route path="/lien-he" element={<LienHe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
