import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddSales from './pages/AddSales';
import TopFive from './pages/TopFive';
import Login from './pages/Login';
import Register from './pages/Registration';
import TotalRevenue from './pages/TotalRev';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href='/' className="navbar-brand ms-2">Sales App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
          
                  <NavLink
                    to="/addsales" className="nav-link"
                    style={({ isActive }) => ({
                      background: isActive ? '#7600dc' : 'transparent',
                    })}
                  >
                    Add sales
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/top5" className="nav-link"
                    style={({ isActive }) => ({
                      background: isActive ? '#7600dc' : 'transparent',
                    })}
                  >
                    Top 5 sales
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login" className="nav-link"
                    style={({ isActive }) => ({
                      background: isActive ? '#7600dc' : 'transparent',
                    })}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register" className="nav-link"
                    style={({ isActive }) => ({
                      background: isActive ? '#7600dc' : 'transparent',
                    })}
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    to="/totalrevenue" className="nav-link"
                    style={({ isActive }) => ({
                      background: isActive ? '#7600dc' : 'transparent',
                    })}
                  >
                    Total Revenue
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/addsales" element={<AddSales />}></Route>
            <Route path="/top5" element={<TopFive />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/totalrevenue" element={<TotalRevenue />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

