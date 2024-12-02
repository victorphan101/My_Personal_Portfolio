import React from 'react'
import './work.css'
import { useNavigate } from 'react-router-dom'

const WorksItems = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <h4 className="work__company">{item.company}</h4>
        <button onClick={() => navigate(item.link, { replace: true })} className="work__button">
          Check it out <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </button>
    </div>
  )
}

export default WorksItems
