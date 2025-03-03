import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar.js";
import Showcase from "./components/showcase/Showcase.js";
import bg from './images/showcase-bg-2.png';

import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';
import ShowcaseBG from './images/showcase-bg-5.png';

import Roadmap from "./components/roadmap/Roadmap.js";
import Footer from "./components/footer/Footer.js";
import Perks from "./components/perks/Perks.js";
import Loader from "./components/loader/Loader.js";

function App() {
  const [loaderClass, SetLoaderClass] = useState('');
  const [homeClass, SetHomeClass] = useState('homeclass hide')
  setTimeout(()=> {
    SetLoaderClass('loader hidden');
    SetHomeClass('homeclass');
  }, 3000);
  return (
    <div>
        <div className={loaderClass}>
          <Loader />
        </div>
        <div className={homeClass}>
          <div className="home" style={{
                  background: `url(${bg}) no-repeat center center/cover`,
          }}>

            <img src={img1} alt="" className="img-1" />
            <img src={img2} alt="" className="img-2" />
            <img src={img3} alt="" className="img-3" />
            <div className="home-overlay">
              <Navbar />
              <Showcase />
            </div>
          </div> 
          <Roadmap />
          <Perks />
          <Footer />
        </div>

    </div>
  );
}

export default App;
