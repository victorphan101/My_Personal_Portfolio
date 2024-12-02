import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work experience</span>

        <Works/>

        <h2 className="temp__comment">**Note: Portfolio 'Check it out' pages are still in progress**</h2>
    </section>
  )
}

export default Work
