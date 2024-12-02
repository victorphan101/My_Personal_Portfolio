import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4th Year Software Engineering Student</span>
        </div>

        <div className="about__box">
            <i className='bx bx-basketball about__icon'></i>
            <h3 className="about__title">Hobbies</h3>
            <span className="about__subtitle">Basketball, Gym, Running, Coffee Runs</span>
        </div>

        <div className="about__box">
            <i className='bx bx-list-check about__icon'></i>
            <h3 className="about__title">Interest</h3>
            <span className="about__subtitle">Social Services Applications, Data Analytics, Sports Management</span>
        </div>
    </div>
    )
}

export default Info
