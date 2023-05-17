import './styles.css';
import houseImg from '../../assets/house.svg'
import { NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <NavLink to='/home'>Início</NavLink>
                    <NavLink to='/home'>IProdutos</NavLink>
                    <NavLink to='/home'>Sobre nós</NavLink>
                </ul>
                <img src={houseImg} alt="Casa" />
            </nav>
        </header>
    );
}