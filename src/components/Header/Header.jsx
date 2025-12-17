import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import { Link } from 'react-router-dom'; 
import logo from '../../../public/img/freshcart-logo.svg';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container">
 
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
   
              {["instagram","facebook","tiktok","twitter","linkedin-in","youtube"].map((social, index) => (
                <li key={index} className="nav-item mx-2">
                  <a 
                    className="nav-link" 
                    href={`https://www.${social}.com`} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <i className={`fa-brands fa-${social}`}></i>
                  </a>
                </li>
              ))}


              <li className="nav-item mx-2">
                <Link className="nav-link" to="/login">LogIn</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
