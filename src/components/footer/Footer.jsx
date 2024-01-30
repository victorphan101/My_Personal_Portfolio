import React from 'react'

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Phan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link" >
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/" className="footer__social-link">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/victorphan101" className="footer__social-link">
                    <i className="bx bxl-github"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
