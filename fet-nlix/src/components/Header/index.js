import './header.css';
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header>
            <Link class="logo" to="/">Fet Nlix</Link>
            <Link class="favoritos" to ="/favoritos">Meus filmes</Link>
        </header>
    );
}

export default Header;