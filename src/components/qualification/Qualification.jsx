import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="qualifications">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle"></span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Experience
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Extracurriculars
                </div>
            </div>

            <div className="qualification__section">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle">iXperience</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>Jan 2022 - Feb 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Developer Intern</h3>
                            <span className="qualification__subtitle">Hexfork</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>May 2023 - July 2023
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">LAEP Research Assistant</h3>
                            <span className="qualification__subtitle">Cal Poly CS and SE Department</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>Feb 2024 - Aug 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Information Technology Coordinator</h3>
                            <span className="qualification__subtitle">Union of Vietnamese Student Association </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>July 2024 - Present
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information Technology Cabinet Staff</h3>
                            <span className="qualification__subtitle">Union of North American Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>October 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Administrative Coordinator</h3>
                            <span className="qualification__subtitle">Union of Vietnamese Student Association </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>November 2024 - Present
                            </div>
                        </div>

                        
                    </div>

                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Week of Welcome Orientation Leader</h3>
                            <span className="qualification__subtitle">Cal Poly New Student & Transition Program </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>May 2022 - September 2022
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Polycultural Weekend Operations Committee Head</h3>
                            <span className="qualification__subtitle">Cal Poly Multicultural Center</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>December 2022 - April 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Internal Vice President</h3>
                            <span className="qualification__subtitle">Thai Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>March 2023 - March 2024
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Programming and Logistics Staff for Project LEAD Camp</h3>
                            <span className="qualification__subtitle">Union of Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>May 2023 - September 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Volunteers Committee Dispatch Staff for Tet Festival</h3>
                            <span className="qualification__subtitle">Union of Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>October 2023 - February 2024
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">External Vice President</h3>
                            <span className="qualification__subtitle">Thai Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>March 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intercollegiate Council Representative</h3>
                            <span className="qualification__subtitle">Union of Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>June 2024 - Present
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Programming Staff for Project LEAD Camp</h3>
                            <span className="qualification__subtitle">Union fo Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>May 2024 - September 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Operations Committee Staff for Tet Festival</h3>
                            <span className="qualification__subtitle">Union of Vietnamese Student Association</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>October 2024 - Present
                            </div>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
