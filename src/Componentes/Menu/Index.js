
import style from './Menu.module.css'
import MenuLink from '../MenuLink/Index'


export default function Menu(){

    return (
        <header>
            <nav className={style.navegacao}>
                <MenuLink to="/">Inicio</MenuLink>
                
                <MenuLink to="/sobremim">Sobre Mim</MenuLink>
            </nav>
        </header>
    )
}

