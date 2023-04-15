import logo from './logo.svg';
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
        <a href='/addsales'>Add sales</a>
        <a href='/top5'>Top 5 sales</a>
        <a href='/login'>Login</a>
        <a href='/register'>Register</a>
        <a href='/totalrevenue'>Total Revenue</a>

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
