import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='footer py-lg-5 py-5'>
        {/* <p className="connect-wallet text-center mb-lg-5 mb-5">
            <button>Connect Wallet</button>
        </p> */}
        <footer className='footer-content'>
            <div className="container-xxl px-xxl-0 px-3 py-lg-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                </div>
                <div className="">
                    <div className="row text-lg-center text-right">
                        <div className="col">
                            <a href="https://twitter.com/NewLifeLegion">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                        <div className="col">
                            {/* <i className="fa-brands fa-discord"></i> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer