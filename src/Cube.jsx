import React, { useEffect, useState } from 'react';
import img1 from './assets/1edd2008-8ef7-41b7-bc2d-359674e8f26d-removebg-preview.png';
import img2 from './assets/963f4090-1cff-49ed-aa20-84f30c6068e2-removebg-preview.png';
import img3 from './assets/blackpowerbtn.png';
import img4 from './assets/black-volume.png';
import img5 from './assets/227f1c44-b181-4558-a1c9-7952b4382156-removebg-preview.png';
import img6 from './assets/nothing_frame-removebg-preview.png';
import './Cube.css'; // Assuming you have a separate CSS file for styles

const Cube = () => {
  const [state, setState] = useState('0');
  const cube = document.querySelector(".box")
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (state === '1') {
        let x = e.clientX;
        let y = e.clientY;
       const dd = cube.style = `--y:${y};` + `--x:${x};`;
       console.log(dd);
      }
    };

    const handleTouchMove = (e) => {
      if (state === '1') {
        let touch = e.touches[0];
        let x = touch.clientX;
        let y = touch.clientY;
        cube.style = `--y:${y};` + `--x:${x};`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [state]);

  const showfront = () => {
    setState(state === '1' ? '0' : '1');
  };

  return (
    <div id="tridiv">
      <div className="scene" style={{ transform: 'rotateX(-25deg) rotateY(473deg)' }}>
        <div className={`shape cuboid-1 cub-1 box state-${state}`} data-state={state}>
          <div className="face ft">
            <div className="photon-shader-ft" style={{ backgroundColor: '#36363A' }}>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="face bk">
            <div className="photon-shader-bk" style={{ backgroundColor: '#302E2A' }}>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="face rt">
            <div className="photon-shader-rt" style={{ backgroundColor: '#36363A' }}>
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="face lt">
            <div className="photon-shader-lt" style={{ backgroundColor: '#36363A' }}>
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="face bm">
            <div className="photon-shader-bm">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="face tp">
            <div className="photon-shader-tp" style={{ backgroundColor: '#afafaf' }}>
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="cr cr-0">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
          <div className="cr cr-1">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
          <div className="cr cr-2">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
          <div className="cr cr-3">
            <div className="face side s0">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s1">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
            <div className="face side s2">
              <div className="photon-shader" style={{ backgroundColor: '#36363A' }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="button"> */}
        <button id="bb" onClick={showfront}>Roate</button>
      {/* </div> */}
    </div>
  );
};

export default Cube;
