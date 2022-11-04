import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <Navbar />
      <div className="principal">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>

        </Routes>
      </div>

    </Router >
  );
}

export default App;