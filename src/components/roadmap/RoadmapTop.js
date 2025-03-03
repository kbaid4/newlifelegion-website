import React from 'react'
import roadmapImg from './roadmap.png';

const RoadmapTop = () => {
  return (
    <div className='rm-top py-md-5 py-4 text-center'>
        <img className="rdmap-img" src={roadmapImg} alt="" />
        <div className="container">
        <h1>Pre-mint Roadmap </h1>
        <p>Initial steps towards our long-term vision. </p>
        </div>
    </div>
  )
}

export default RoadmapTop