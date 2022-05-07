import React from 'react'
import { Link } from 'react-router-dom'
import './aboutSection.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const AboutSection = () => {
  return (
    <section className="aboutSection">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                     <div className="abt-left">
                         <Link to='/' className='video-play'>
                             <PlayArrowIcon className='icon-play'/>
                         </Link>
                     </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="abt-right">
                        <p className='top-sub'>Since Year 1999</p>
                        <h2>
                            We are
                            <span className='orange-text'>Fruitkha</span>
                        </h2>
                        <p>
                        Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.
                        </p>
                        <Link to='/' className='orange-button mt-4'>Know More</Link>
                    </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection