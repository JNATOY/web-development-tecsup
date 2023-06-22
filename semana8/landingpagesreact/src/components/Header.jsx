import logoElliotGaramendi from '../assets/img/perfil.png';

const Header = ({ routeLinks }) => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container flexbox flexbox--header">
                    <img src={logoElliotGaramendi} alt="Logo de Elliot Garamendi" width={48} height={48} className="img img--logo" />
                    <ul className="list flexbox flexbox--responsive gap-4xs">
                        {routeLinks.map((element, index) => {
                            const { href, title, content } = element;
                            return (
                                <li key={index}>
                                    <a href={href} title={title} className="link">{content}</a>
                                </li>
                            );
                        })}
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