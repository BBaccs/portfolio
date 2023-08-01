import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                    <p><a href="">Full resume</a></p>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">August 2019 - Present</span>
                        <h2>Jr. Developer (Contract) - Bloomin' Brands</h2>
                        <h2>Developer I (FTE) - Bloomin' Brands</h2>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">July 2018 - May 2019</span>
                        <h2>Jr. Web Developer - Branded Holdings</h2>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2010 - 2013</span>
                        <h2>B.S. Business Administration & Entrepreneurial Studies - Rider University</h2>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
