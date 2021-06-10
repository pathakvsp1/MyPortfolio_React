import React from 'react'

const Skills = () => {
    return (
        <div>
             <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text"><h1 className="ml3">My Skills and Self Learnings</h1>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script></div>
                    <p className="skilltext">I have acquired knowledge of Web Development through constantly updating myself with new and improved ways of doing things.
                    <br/>
                    I have a knowledge of mySQL and I have experience in Competitive coding.
                    </p>
                    <a href="https://github.com/pathakvsp1" target="_blank">Go to my Github</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C/C++</span>
                            <span>70%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Data Structures</span>
                            <span>65%</span>
                        </div>
                        <div className="line nodejs"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>50%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            
        </div>
    )
}

export default Skills
