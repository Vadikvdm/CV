import React from 'react'
import style from './ColumnDescription.module.scss'
import foto from '../../foto/044.jpg'
import icons8home from '../../icons/icons8-home2.svg';
import email1 from '../../icons/email1.svg';
import telegram from '../../icons/telegram.svg';
import telephone from '../../icons/telephone.svg';
import github from '../../icons/github.svg';
import music from '../../icons/music.svg';
import d3 from '../../icons/3d.svg';
import modeling from '../../icons/3dModeling.svg';
import saturn from '../../icons/saturn.svg';

export default function ColumnDescription() {
    return (
        <div className={style.columnContact}>
            <div className={style.avatar}>
                <img className={style.fotoCv} src={foto} />
            </div>
            <div className={style.businessCard}>
                <div className={style.rectangle}>CONTACT</div>
                <div className={style.redFon}></div>
                <div className={style.contact}>
                    <img className={style.icons} src={icons8home} />
                    <div className={style.contactText}>Odessa (ready to move)</div>
                    <img className={style.icons} src={email1} />
                    <div className={style.contactText}>vadikvdm@gmail.com</div>
                    <img className={style.icons} src={telegram} />
                    <div className={style.contactText}>https://t.me/vadikvdm31</div>
                    <img className={style.icons} src={telephone} />
                    <div className={style.contactText}>+3 8067 136 64 93</div>
                    <img className={style.icons} src={github} />
                    <div className={style.contactText}>github.com/Vadikvdm</div>
                </div>
            </div>
            <div className={style.language}>
                <div className={style.rectangle}>LANGUAGES</div>
                <div className={style.redFon}></div>
                <p className={style.otherText}>English (Pre-Intermediate)</p>
            </div>
            <div className={style.skills}>
                <div className={style.rectangle}>SKILLS</div>
                <div className={style.redFon}></div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>AutoCAD</li>
                    <li>3ds Max</li>
                </ul>
            </div>
            <div className={style.hobbie}>
                <div className={style.rectangle}>HOBBIES</div>
                <div className={style.redFon}></div>
                <img className={style.icons} src={music} />
                <img className={style.icons} src={d3} />
                <img className={style.icons} src={modeling} />
                <img className={style.icons} src={saturn} />
            </div>
        </div>
    )
}
