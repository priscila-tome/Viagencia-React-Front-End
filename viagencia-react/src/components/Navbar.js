import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <div className="logo">
                    <h1>Viagência</h1>
                </div>
            </Link>

            <div className="menu-section">
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <ul>
                    <li><Link to="/">A Viagência</Link></li>
                    <li><Link to="/">Destinos</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/cadastro">Cadastro</Link></li>
                </ul>
            </div>
        </nav>);
}

export default Navbar;