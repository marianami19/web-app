import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSales from './pages/AddSales';
import TopFive from './pages/TopFive';
import Login from './pages/Login';
import Register from './pages/Registration';
import TotalRevenue from './pages/TotalRev';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route exact path="/addsales" element={<AddSales />}></Route>
            <Route exact path="/top5" element={<TopFive />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/totalrevenue" element={<TotalRevenue />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

