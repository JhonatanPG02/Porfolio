import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import style from '../Styles/NavBar.module.css'
import { BsList } from "react-icons/bs"

export default  function NavBar() {
    const [activeMenu, setActiveMenu] = useState(true)

    return(
        <nav>
            <div className={style.container}>
                <span>JP</span>
                <span 
                className={style.menu}
                onClick={() => setActiveMenu(!activeMenu)}
                >
                <BsList/>
                </span>
                <div className={activeMenu ? ` ${style.inactive} ${style.linksContainer}`
                : ` ${style.active} ${style.linksContainer}`} onClick={() => setActiveMenu(!activeMenu)}>
                    <NavLink className={({isActive}) => isActive ? `${style.link} ${style.activebutton}`: `${style.link}`} to='/'><span>Inicio</span></NavLink>
                    <NavLink className={({isActive}) => isActive ? `${style.link} ${style.activebutton}`: `${style.link}`} to='/about'><span>Sobre mí</span></NavLink>
                    <NavLink className={({isActive}) => isActive ? `${style.link} ${style.activebutton}`: `${style.link}`} to='/projects'><span>Proyectos</span></NavLink>
                    <NavLink className={({isActive}) => isActive ? `${style.link} ${style.activebutton}`: `${style.link}`} to='/contact'><span>Contacto</span></NavLink>
                </div>
            </div>
        </nav>
    )
}