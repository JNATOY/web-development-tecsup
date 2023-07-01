import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to="/">Página de inicio</Link >
            </div>
        </section>
    );
};

export default NotFound;


/* a las etiquetas a se le puso la etiqueta link para el ruteo */