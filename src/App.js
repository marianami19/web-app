import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSales from './pages/AddSales';
import TopFive from './pages/TopFive';
import Login from './pages/Login';
import Register from './pages/Registration';
import TotalRevenue from './pages/TotalRev';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Sales App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href='/addsales'>Add sales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/top5">Top 5 sales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/totalrevenue">Total Revenue</a>
              </li>
              {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
            </ul>
          </div>
        </nav>

        <BrowserRouter>
          <Routes>
            <Route path="/addsales" element={<AddSales />}></Route>
            <Route path="/top5" element={<TopFive />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/totalrevenue" element={<TotalRevenue />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
