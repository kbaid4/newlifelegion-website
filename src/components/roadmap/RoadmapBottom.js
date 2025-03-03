import React from 'react'
import bg from './showcase-bg.png';
import phaseImg from './phase-1.png';

const RoadmapBottom = () => {
  return (
    <div className='rm-bottom' >
        <div className="rm-bottom-bg" style={{
                height:'100%',
                background: `url(${bg}) no-repeat center center/cover`,
            }} >
            <div className="overlay py-5">
                <div className="container">
                    <div className="rdmap-phases">
                        <div className='rdmap-phase-1 my-5'>
                            <img className="img-phase-1" src={phaseImg} alt="" />
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Legions, descend.</h2>
                                    <p>3131 legionnaires are ready to be minted and descent into the uncharted world of New Life Legion. Each one with their unique powers must now explore this uninhabited world to face each other and fight for their survival in this mortal world.</p>
                                </div>
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                    <div className='ver ver-1' />
                                    <div className='hor hor-1' />
                                </div>
                            </div>
                        </div>
                        <div className='rdmap-phase-2 my-5'>
                            <div className="row align-items-center">
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                    <div className='ver ver-2' />
                                    <div className='hor hor-2' />
                                </div>
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Your choices matter.</h2>
                                    <p>Be part of a gripping and lore-filled storyline where your choices matter. From collaborations, promotions, partnerships, and even expansion of the community - you shape this world.</p>
                                </div>
                            </div>
                        </div>
                        <div className='rdmap-phase-3 my-5'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Presale.</h2>
                                    <p>The moment that we’ve all been waiting for: the pre-sale of our legionnaires finally begins.</p>
                                </div>
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                    <div className='ver ver-3' />
                                    <div className='hor hor-3' />
                                </div>
                            </div>
                        </div>
                        <div className='rdmap-phase-4 my-5'>
                            <div className="row align-items-center">
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                </div>
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>But wait. There's more. </h2>
                                    <p>Think that’s all we have stored for you? Witness the exclusive launch of Roadmap 1.0 right after the pre-sale. The world of New Life Legion awaits you, adventurer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoadmapBottom