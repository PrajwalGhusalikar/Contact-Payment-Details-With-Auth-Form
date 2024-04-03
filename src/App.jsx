import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <div className="App">
      <ContactPage/>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>

        {/*  */}
      </Router>
    </div>
  );
}

export default App;
