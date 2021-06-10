import React from 'react'
import bg1 from './images/school.jpg'
import bg2 from './images/College.jpg'

const Projects = () => {
    return (
        <div>
             <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Education</h2>
            <div className="carousel">
                <div className="card">
                    <div className="box">
                        <a href="https://www.dpsindiranagar.com/?__cf_chl_jschl_tk__=c455d6cc529bf641c75e7e7a8a2ee42f860622f5-1620035630-0-AbsFgTNs6M3dqYO5ZB2noxjtola7TJCT9a_ec9TaGUbMoAR-zBjSjFtft5tcWgg_7kalZsV0_m8xvOIRo4v7a1MD244KcgfOikuhHnc9A70VMZrW_cWH2kxYt6SdyIBhWX_9uh2sUm4JNJhxBoqTnxUx6BIa9ekkIc37y_K63lsx8wQl6hmzdQkVBsOwTw0mQIK1qJOs20OGB02U6CGu2ReUFmIv3f_Y-I4ybnEunIumkKZcebNP-LtjFthJeBJ9jv0ldSiGKDbKfTiPd2vWR_35z0_X2cYAV0Zu1lyekuHUwKQYKLdziGurujeN-CJJDqITYJt29EnUbndwYF8MwNZ8r3yqNfri8_vdk3VyyXcMN1azsv1ttX9KgKX0N3S1fAbLRo2jpdyZpUhVDJ8xhxQ" target="_blank">                            
                            <img src={bg1}  alt=""/>
                            </a>
                        <div className="text">Schooling</div>
                        <p>
                            Did my schooling from Delhi Public School, Lucknow 
                            with 88% in 12th.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <a href="https://www.srmist.edu.in/" target="_blank">
                            <img src={bg2} alt=""/></a>
                        <div className="text">My College</div>
                        <p>
                       Pursing my Btech in Computer science and engineering from SRM Institute of Science and Engineering,
                        Chennai.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
            
        </div>
    )
}

export default Projects
