import React from 'react'

export default function Lsb() {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <span className="designation">UI Developer</span>
            </div>
            <img className="me" src="./assets/images/portfolio/profile-pic.jpeg" alt="Me" />
            <h2 className="email">baccarellab@gmail.com</h2>
            <h2 className="address">Based in New Jersey</h2>
            {/* <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p> */}
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://dribble.com/"><i className="lab la-linkedin" aria-label='My LinkedIn'></i></a>
                </li>
                <li>
                    <a href="https://coderbyte.com/profile/bbaccz"><i class="la-sharp la-solid la-code" aria-label='My Coderbytes'></i></a>
                </li>
                <li>
                    <a href="https://github.com/BBaccs"><i className="lab la-github" aria-label='My Github'></i></a>
                </li>
            </ul>
            <a href="mailto: baccarellab@gmail.com" className="theme-btn">
                <i className="las la-envelope"></i> Hire Me!
            </a>
        </div>
    )
}   
