import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"; // router

// ROOT

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<p>Onboarding</p>} />
          <Route exact path="/register" element={<p>Register</p>} />
          <Route exact path="/dashboard" element={<p>Dashboard</p>} />
          <Route path="*" element={<p>404: This page does not exist!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
