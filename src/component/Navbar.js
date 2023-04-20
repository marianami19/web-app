
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
      <div>
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
      </div>
    );
  }
  
  export default Navbar;
  