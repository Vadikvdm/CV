import React from 'react'
import style from './ColumnContact.module.scss'
export default function ColumnContact() {
    return (
        <div className={style.columnDescription}>
            <p className={style.titl}>Vadim Vidomenko</p>
            <div className={style.experience}>
                <div className={style.profile}>WORK EXPERIENCE</div>
                <div className={style.triangle}></div>
                <div className={style.text}>
                    <h4 className={style.titleJob}>Last job:</h4>
                    <p className={style.Job}>Chief engineer in a construction company - (08.2019 – 01.2022).
                        My main responsibilities include monitoring the quality of work, responding to project changes in a timely manner, giving a quick schedule, coordinating technical documentation, cost estimates with the customer for payment.
                    </p>
                    <div>
                        <p>Computer School of Odessa National Polytechnic
                            University (Web design: HTML, CSS) – 0.5 year.</p>
                    </div>
                    <div>
                        <p>CURSOR.EDUCATION
                            (FRONT-END ADVANCED: JavaScript, React) – 0.5 year.</p>
                    </div>
                </div>
            </div>

            <div className={style.education}>
                <div className={style.profileEducation}>EDUCATION</div>
                <div className={style.triangle}></div>
                <div className={style.titleEducation}>
                    <p className={style.textEducation}>Odessa State Academy of Civil Engineering and Architecture 2003--2008 year.</p>
                </div>
            </div>
        </div>
    )
}
