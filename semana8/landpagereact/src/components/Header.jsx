import logoElliotGaramendi from '../assets/img/perfil.png';

const Header = () => {
return (
    <header className="header">
    <nav className="nav">
        <div className="container">
        <img src={logoElliotGaramendi} alt="Logo de Elliot Garamendi" width={48} height={48} />
        <ul>
            <li>
            <a href="#projects">Proyectos</a>
            </li>
            <li>
            <a href="#skills">Habilidades</a>
            </li>
            <li>
            <a href="#contact">Contacto</a>
            </li>
        </ul>

        <ul>
            <li>
            <a href="https://www.youtube.com/@elliotgaramendi" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube"></i>
            </a>
            </li>
            <li>
            <a href="https://github.com/elliotgaramendi" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/elliotgaramendi/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/elliotgaramendi/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
            </a>
            </li>
        </ul>
        </div>
    </nav>
    </header>
  );
};

export default Header;