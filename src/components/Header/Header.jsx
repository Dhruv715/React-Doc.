import './Header.css';
import img from '../../assets/reactLogo.png';
function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img src={img} alt="Logo" id="logo-image" />
      </div>
      <div className="header-content">
        <h1 id="header-title">React Documentation</h1>
        <p id="header-description">Learn about React, a JavaScript library for building user interfaces.</p>
      </div>
    </header>
  );
}

export default Header;
