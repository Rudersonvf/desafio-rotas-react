import { NavLink } from 'react-router-dom';
import './styles.css';

export default function ProductNavbar() {
    return (
        <nav className='prod-nav-container'>
            <ul>
                <NavLink className={({ isActive }) => isActive ? 'fw-700' : 'fw-400'} to='computers'>Computadores</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'fw-700' : 'fw-400'} to='eletronics'>Eletrônicos</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'fw-700' : 'fw-400'} to='books'>Livros</NavLink>
            </ul>
        </nav>
    );
}