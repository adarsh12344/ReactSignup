import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Appbar from './appbar';
import Signup from './signup';
import Signin from './signin';

function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"
    }}>

      <Appbar />
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
