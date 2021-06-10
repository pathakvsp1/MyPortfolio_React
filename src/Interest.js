import React from 'react'

const Interest = () => {
    return (
        <div>
             <section className="interests" id="interests">
                    <div className="max-width">
                        <h2 className="title">My interests</h2>
                        <div className="serv-content">
                            <div className="card">
                                <div className="box">
                                    <i className="fas fa-book-reader"></i>
                                    <div className="text">Tech News</div>
                                    <p>
                                    I love reading about lastest technology, Esports, gadgets,  
                                    latest softwares and their features.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <i className="fas fa-chart-line"></i>
                                    <div className="text">Learning new Things</div>
                                    <p>
                                        I believe in constantly updating myself by learning something new with practical Implementations.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <i className="fas fa-code"></i>
                                    <div className="text">Competetive Coding</div>
                                    <p>
                                        In my free time I like to do some problem solving on various Competetive Coding platforms.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    
             </section>
            
        </div>
    )
}

export default Interest
