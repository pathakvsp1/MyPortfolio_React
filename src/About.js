import React from 'react'
import bg from './images/profile-1.jpeg'
import resume from './assests/vpresume.pdf'

const About = () => {
    return (
        <div>
         <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={bg} alt=""/>
                        
                </div>
                <div className="column right">
                    <div className="text">I am Varun and i like <br/><h5 className="ml2">Coding, Learning and Designing</h5>
                    

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script></div>
                    <p className="about-para">
                        <b>
                        An incessant learner and A keen observer, Skilled in Computer Science, Web Development and Designing. 
                    Always ready to learn something new and apply it in real life Scenarios. Open to Opportunities related to Front end coding.</b></p>
                    
                    <a href={resume} target="_blank">Open CV</a>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default About
