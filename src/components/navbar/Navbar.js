import React, { useState } from 'react'
import logo from './logo.png';

const Navbar = () => {
  const [customClass, SetCustomClass] = useState('custom-slider d-lg-none hidden');

  const setClass = () => {
    if(customClass == 'custom-slider d-lg-none hidden'){
      SetCustomClass('custom-slider d-lg-none')
    }
    else {
      SetCustomClass('custom-slider d-lg-none hidden')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className={customClass} onBlur={()=>{
          setClass();
        }}>
            <i className="fa fa-times fa-2x" onClick={()=>{
              setClass();
            }}></i>
            <ul className="navbar-nav">
                <li className="nav-item me-lg-3 mb-3" onClick={()=>{
              setClass();
            }}>
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#roadmap")} aria-current="page"
                  >Roadmap</a>
                </li>
                <li className="nav-item me-lg-3 mb-3"onClick={()=>{
              setClass();
            }}>
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#perks")}>Perks of ownership</a>
                </li>
                <li className="nav-item" onClick={()=>{
              setClass();
            }}>
                  <a className="nav-link active text-uppercase" href='https://twitter.com/NewLifeLegion'>Follow us</a>
                </li>
            </ul>
        </div>
        <div className="container-xxl px-xxl-0 px-3">
            <a className="navbar-brand logo" href="#">
              <img src={logo} alt="" />
            </a>
            <button className="navbar-toggler" onClick={()=> {
              setClass();
            }}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mt-lg-0 mt-2">
                <li className="nav-item me-lg-3 mb-lg-2 mb-1">
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#roadmap")} aria-current="page">Roadmap</a>
                </li>
                <li className="nav-item me-lg-3 mb-lg-2 mb-1">
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#perks")}>Perks of ownership</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#contact")}>Follow us</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar