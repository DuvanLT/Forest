import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <header>
    <nav>
      <ul>
      <li>
          <Link to="/">Inicio</Link>
        </li>
      <li>
          <Link to="/arboles">Arboles</Link>
        </li>
      <li>
          <Link to="/captions">Captions</Link>
        </li>
        <li>
          <Link to="/cuidados">Cuidados</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
    <div className="menu">
      <div className="first line"></div>
      <div className="second line"></div>
      <div className="third line"></div>
    </div>
    </header>
    </>
  );
}

export default Header;
