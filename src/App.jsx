import { useState } from 'react'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/Signin';
import Home from './Pages/Home';
import Sam from './Pages/sam';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

        {/* <Route path="/" element={<Sam />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
