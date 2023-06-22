import './App.css';
import Header from './components/Header';

function App() {

  const routeLinks = [
    { href: '#projects', title: 'Proyectos', content: 'Proyectos' },
    { href: '#skills', title: 'Habilidades', content: 'Habilidades' },
    { href: '#contact', title: 'Contacto', content: 'Contacto' }
  ];

  return (
    <Header routeLinks={routeLinks} />
  );
}

export default App;