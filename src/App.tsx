import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import ChallengePage from "./pages/CodeChallenge";
import Header from "./Component/Header";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protected from "./routes/Protected";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Protected isSignedIn={isLoggedIn}>
              <Header onLogout={handleLogout}/>
                <Home />
              </Protected> : <Login onLogin={handleLogin} />
          } />
          <Route path="/signup" element={
          <Protected isSignedIn={!isLoggedIn}>
          <Signup onLogin={handleLogin} />
        </Protected>} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Header onLogout={handleLogout}/>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Header onLogout={handleLogout}/>
                <Products/>
              </Protected>
            }
          />
          <Route
            path="/cart"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Header onLogout={handleLogout}/>
                <Checkout/>
              </Protected>
            }
          />
        <Route
            path="/challenge"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Header onLogout={handleLogout}/>
                <ChallengePage/>
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Header onLogout={handleLogout}/>
                <Profile/>
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;