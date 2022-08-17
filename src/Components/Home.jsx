import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Styles/Home.module.css'

export default  function Home() {
    return(
        <div className={style.total}>
            <div id={style.space}>
                <div className={style.stars}></div>
                <div className={style.stars}></div>
                <div className={style.stars}></div>
                <div className={style.stars}></div>
                <div className={style.stars}></div>
            </div>


            <div className={style.wrapper}>
                <div className={style.statictxt}>I'm </div>
                <ul className={style.dynamictxts}>
                <li><span>Jhonatan Prado</span></li>
                <li><span>a Developer</span></li>
                <li><span>a FullStack</span></li>
                </ul>
            </div>
            
         
        </div>
    )
}
