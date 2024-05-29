import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./nav";
import Products from "./Products";
import Team from "./Team";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
