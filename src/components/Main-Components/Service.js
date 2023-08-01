import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="services-area page-section scroll-to-page" id="services">
            <div className="custom-container">
                <div className="services-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-stream"></i> Services
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                    </div>

                    <div className="services-items">
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-bezier-curve"></i>
                            <h2>Website Accessibility</h2>
                            <p>ADA complaince not only broadens a companies target market, it creates a much BETTER UX for everyone!
                                From the little things like color contrast that effect everyone, down to screen reader accessibility,
                                accessibility is a fundamnetal part of web development that is only growing in importance.</p>
                                <p>On an awkard note, this website was created using a react template that I purchased, and is not ADA accessible. My main website projects in 
                                my portoflio are.</p>
                        </div>
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-code"></i>
                            <h2>UI Development</h2>
                            <p>HTML5, CSS, JavaScript, SASS, React.js, & Git. Other responsibilities included creating dev builds & testing code, creating QA/Prod change requests, 
                                participating in PR reviews.

                                Experince with other basic dev tools - Visual Studio, Visual Code, Azure, SQL Server (very basic experience), XML/XSLT (very basic). </p>
                        </div>
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-bezier-curve"></i>
                            <h2>Web Design</h2>
                            <p>I don't consider myself a designer but I've designed several websites for Bloomin' Brands out of neccesity. 
                                Including Aussie Grill & Tendershack. I've had input into other major sites - Outback, Carrabbas, Dine Rewards, Bonefish Grill.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
