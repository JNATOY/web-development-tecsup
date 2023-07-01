import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/primaryLayout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: '/personajes',
                element: <h1 style={{ padding: '5rem' }}>Personajes</h1>
            },
            {
                path: '/ubicaciones',
                element: <h1 style={{ padding: '5rem' }}>Ubicaciones</h1>
            },
            {
                path: '/episodios',
                element: <h1 style={{ padding: '5rem' }}>Episodios</h1>
            }
        ]
    },
]);