import React from 'react'

const Contact = () => {
    return (
        <div>
             <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>
                        Feel free to ping me for any queries.
                    </p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Varun Sunil Pathak</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Lucknow, Uttar Pradesh</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">pathakvsp1@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <p className="quote"><h3>
                    “If You Are Working On Something That You Really Care About, 
                    You Don’t Have To Be Pushed. The Vision Pulls You.”</h3> 
                    <b>– Steve Jobs</b>
                </p>
                    </div>
                    
                    </div>
                  
   
            
        </div>
        </section>
        </div>
    )
}

export default Contact
