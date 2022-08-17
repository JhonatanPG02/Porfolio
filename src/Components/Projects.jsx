import React from 'react'
import img1 from '../Media/mainstage.jpeg'
import img2 from '../Media/dogsapp.jpeg'
import style from '../Styles/Projects.module.css'

export default  function Projects() {
    return(
        <div className={style.total}>
            <div className={style.container}>
                <div className={style.card}>
                    <img src={img2} alt='not imagen' />
                    <h2 className={style.subtitle}>Dogs App</h2>
                    <p className={style.paf}>Proyecto Individual la cual desarrolle para mostrar el listado de razas de perros, toma en cuenta la data desde una API. Tiene las siguientes funcionalidades: filtros por temperamentos o pesos, ordenamiento alfabeticamente, búsqueda por nombre, paginado, formulario controlado de creación de nueva raza.  </p>
                    <a href="https://pi-dogs-teal.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className={style.button}>Ver web</button>
                    </a>
                    <a href="https://github.com/JhonatanPG02/PI-Dogs" target="_blank" rel="noopener noreferrer">
                        <button className={style.button}>Ver proyecto</button>
                    </a>
                </div>
                <div className={style.card}>
                    <img src={img1} alt='not imagen' />
                    <h2 className={style.subtitle}>MainStage</h2>
                    <p className={style.paf}>Proyecto Grupal en la cual desarrollamos un E-commerce de eventos que permite conectar a usuarios y organizadores, tiene las siguientes funcionalidades: Lista de eventos disponibles, búsqueda, filtros, carrito de compras, método de pago, añadir a favoritos, geolocalización, Panel del Administrador y Organizador.</p>
                    <a href="https://mainstage.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className={style.button}>Ver web</button>
                    </a>
                    <a href="https://github.com/Hecatonquir/Final_Project_18-07-2022" target="_blank" rel="noopener noreferrer">
                        <button className={style.button}>Ver proyecto</button>
                    </a>
                </div>
                
            </div>
        </div>
    )
}