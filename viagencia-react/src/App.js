import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="principal">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
