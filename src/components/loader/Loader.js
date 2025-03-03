import React from 'react';
import earthImg from './earth-bg.png';
import earthImg2 from './earth-2.png';
import characterImg from './character.png';
import bgImg from './loader-bg.png';

const Loader = () => {
    return (
        <div className='first' style={{
          background: `url(${bgImg}) no-repeat center center/cover`,
          height : '100vh',
          overflow: 'hidden',
        }}>
            <div className="overlay" style={{
              background : 'rgba(0, 0, 0, .75)',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <img className='earthImg' src={earthImg} alt="" />
              <img className='earthImg2' src={earthImg2} alt="" />
              <img className='characterImg' src={characterImg} alt="" />
      
              <div>
              <span><i className="fa-solid fa-star one"></i></span>
              <span><i className="fa-solid fa-star two"></i></span>
              <span><i className="fa-solid fa-star three"></i></span>
              <span><i className="fa-solid fa-star four"></i></span>
              <span><i className="fa-solid fa-star five"></i></span>
              <span><i className="fa-solid fa-star six"></i></span>
              <span><i className="fa-solid fa-star seven"></i></span>
              <span><i className="fa-solid fa-star eight"></i></span>
              <span><i className="fa-solid fa-star nine"></i></span>
              </div>
            </div>    
        </div>
      )
}

export default Loader