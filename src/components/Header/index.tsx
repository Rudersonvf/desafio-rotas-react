import './styles.css';
import houseImg from '../../assets/house.svg'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to='/home'>Início</NavLink>
                    <NavLink to='/products'>Produtos</NavLink>
                    <NavLink to='/about'>Sobre nós</NavLink>
                </ul>
                <NavLink to='/home'><img src={houseImg} alt="Casa" /></NavLink>
            </nav>
        </header>
    );
}