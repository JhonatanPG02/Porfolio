import React from 'react'
import img from '../Media/fotosinfondo.png'
import style from '../Styles/About.module.css'
import pdf from '../Media/cvJhonatanPrado.pdf'


export default  function About() {
    return(
        <div className={style.total}>
            <div className={style.about}>
                <div className={style.containerabout}>
                    <p>
                    Hola! Me llamo Jhonatan Prado, soy un desarrollador web Full Stack, focalizado en el área de Front-end con muchas ganas de aportar y seguir aprendiendo en el mundo laboral IT. He tenido experiencia previa como capacitador y coordinador de equipos operativos en el área de atención al cliente y hoy estoy en busca de la oportunidad de mostrar mis habilidades en todo lo referente a programación.
                    </p>
                    <a href={pdf} download='CV Jhonatan Prado'>
                        <button className={style.download}>Descargar CV</button>
                    </a>
                </div>
                <img src={img} alt='imagen sinfoto' className={style.img}/>
            </div>

            <div>
                    <h2 className={style.subtitle}>Tecnologías:</h2>
                    <div className={style.tecnologias}>
                        <div>
                            <h4>Front-end:</h4>
                            <p>- HTML5</p>
                            <p>- CSS</p>
                            <p>- Javascript</p>
                            <p>- React</p>
                            <p>- Redux</p>
                        </div>
                        <div>
                            <h4>Back-end:</h4>
                            <p>- Node.js</p>
                            <p>- Express</p>
                            <p>- PostgreSQL</p>
                            <p>- Sequelize</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}