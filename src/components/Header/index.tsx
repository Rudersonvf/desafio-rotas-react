import './styles.css';
import houseImg from '../../assets/house.svg'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink className={({isActive}) => isActive ? 'fw-700' : 'fw-400'} to='/home'>Início</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'fw-700' : 'fw-400'} to='/products'>Produtos</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'fw-700' : 'fw-400'} to='/about'>Sobre nós</NavLink>
                </ul>
                <NavLink to='/home'><img src={houseImg} alt="Casa" /></NavLink>
            </nav>
        </header>
    );
}