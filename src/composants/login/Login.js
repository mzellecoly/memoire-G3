import React,{useState}  from "react";
import './login.css'
import { Link } from "react-router-dom";
const Login = ()=>{

  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <div className="form-container sign-up la">
        <form>
          <h1>Creer un Compte</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>ou utiliser une adresse électronique</span>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>S'inscrire</button>
        </form>

      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Se Connecter</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>ou utilisez votre adresse électronique</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Mot de passe oublié</a>
          <Link to="/Acceuil">
            <button>Se Connecter</button>
          </Link>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isActive ? 'active' : ''}`}>
            <h1>Bienvenue!!</h1>
            <p>Saisissez vos données personnelles pour utiliser toutes les fonctionnalités du site</p>
            <button className="hidden" onClick={handleLoginClick}>
              Se Connecter
            </button>
          </div>
          <div className={`toggle-panel toggle-right ${isActive ? '' : 'active'}`}>
            <h1>Bonjour cher utilisateur!!</h1>
            <p>Enregistrez-vous avec vos données personnelles pour utiliser toutes les fonctionnalités du site.</p>
            <button className="hidden" onClick={handleRegisterClick}>
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;