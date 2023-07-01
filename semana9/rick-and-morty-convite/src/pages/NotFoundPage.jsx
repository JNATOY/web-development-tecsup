import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const routeError = useRouteError();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1>404</h1>
        <h2>{routeError.statusText || routeError.message}</h2>
        <Link to="/">Página de inicio</Link >
      </div>
    </section>
  );
};

export default NotFoundPage;


/* a las etiquetas a se le puso la etiqueta link para el ruteo

usar esta guia https://bluuweb.dev/*/