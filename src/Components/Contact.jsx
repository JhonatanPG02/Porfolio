import React from 'react'
import style from '../Styles/Contact.module.css'
import img1 from '../Media/github.png'
import img2 from '../Media/linkedin.png'
import img3 from '../Media/whatsapp.png'

export default function Contact() {
    return (
        <div className={style.total}>
            <div className={style.container}>
            <form action='mailto:jhonatan.prado.gutierrez@gmail.com'>
                <h2 className={style.title}>Contáctame</h2>
                <input className={style.input} type='text' placeholder='Nombre' required/>
                <br/>
                <input className={style.input} type='email' placeholder='E-mail' required/>
                <br/>
                <input className={style.input} type='text' placeholder='Asunto' required/>
                <br/>
                <textarea className={style.text} placeholder="Mensaje..." required>

                </textarea>
                <br/>
                <button type='submit' className={style.button}>Enviar</button>
            </form>
            </div>
            <p className={style.paf}>También puedes contactarme por: </p>
            <div className={style.icons}>
                <a href="https://github.com/JhonatanPG02" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt='not imagen' className={style.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/jhonatan-prado-fullstack/" target="_blank" rel="noopener noreferrer">
                <img src={img2} alt='not imagen' className={style.icon}/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=51991685030" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt='not imagen' className={style.icon}/>
                </a>
            </div>
        </div>
    )
}