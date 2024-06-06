import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [nav,setNav] = useState(false)

  nav ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
  function handleClick() {
    setNav(!nav)
    
  }

  return (
    <>
    <header>
    <nav>
      <ul className={`${nav ? "openNav" : ""} `}>
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
    <div className="menu" onClick={() => {handleClick()}}>
      <div className="first line"></div>
      <div className="second line"></div>
      <div className="third line"></div>
    </div>
    </header>
    </>
  );
}

export default Header;
