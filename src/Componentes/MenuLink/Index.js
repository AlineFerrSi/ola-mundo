import style from './MenuLinks.module.css';
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink({children, to}){

    const localizacao = useLocation();
    
    return (
        <Link className={`
            ${style.link}
            ${localizacao.pathname === to ? style.linkDestacado : ""}
        `} to={to}>{children}</Link>
    )
}