import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-2">
      <a className="navbar-brand" href="/">Misha Dyer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;