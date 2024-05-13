import { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Bar from './components/Bar';
import energyStar from './assets/energy-star.png';
import biosIcon from './assets/bios-icon.png';
import w95logo from "./assets/w95logo.png";
import startupsound from "./assets/startup.mp3";
import computer from "./assets/computer.png";
import CountUp from 'react-countup';

function App() {
  const [activeBar, setActiveBar] = useState(false);
  const [startingUp, setStartingUp] = useState("stepzero");
  const [animate, setAnimate] = useState(false);


  useEffect(() => {
    const img = new Image();
    img.src = w95logo;
  }, []);

  useEffect(() => {
    if (startingUp === 'stepone') {
      const classes = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth'];
      let accumulatedDelay = 0;
      classes.forEach((className, index) => {
        const randomDelay = Math.random() * 0.750 + 0.150; // Random number between 0.5 and 2
        accumulatedDelay += randomDelay;
        setTimeout(() => {
          const element = document.querySelector(`.${className}`);
          if (element) {
            element.style.animationDelay = `${index * 0.5}s`;
            element.style.visibility = 'visible';
          }
        }, accumulatedDelay * 1000);
      });
      setTimeout(() => {
        setStartingUp('steptwo');
      }, accumulatedDelay * 1000 + 500);
    }
  }, [startingUp]);

  useEffect(() => {
    if (startingUp === 'steptwo') {
      const classes = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth'];
      let accumulatedDelay = 0;
      classes.forEach((className, index) => {
        const randomDelay = Math.random() * 0.750 + 0.150; // Random number between 0.5 and 2
        accumulatedDelay += randomDelay;
        setTimeout(() => {
          const element = document.querySelector(`.${className}`);
          if (element) {
            element.style.animationDelay = `${index * 0.5}s`;
            element.style.visibility = 'visible';
          }
        }, accumulatedDelay * 1000);
      });
      setTimeout(() => {
        setStartingUp('stepthree');
      }, accumulatedDelay * 1000 + 500);
    }
  }, [startingUp]);

  useEffect(() => {
    if (startingUp === 'stepthree') {
      setTimeout(() => {
        setStartingUp('desktop');
      }, 2000);

    }
  }, [startingUp]);

  const startup = () => {
    document.querySelector('#root').style.backgroundColor = 'black';
    setAnimate(true);
    setTimeout(() => {
      setStartingUp('stepone');
      document.querySelector('#root').style.backgroundColor = '#018181';
    }, 1000);
  }


  return (
    <>
      {startingUp === 'stepzero' ? (
        <div id='computer' className={animate ? 'animate' : ''}>
          {animate ? null : (
            <>
              <div className="clicktostart">
                <p>Ander Aramendi - Windows 95</p>
                <p onClick={startup} className='start-button'>Start</p>
              </div>
            </>
          )}
        </div>
      ) : startingUp === 'stepone' ? (
        <div id="startupscreen">
          <div id="stepone">
            <div className='biostop'>
              <div className='bios-top-left-wrapper'>
                <img src={biosIcon} className='biosicon' alt="" />
                <div>
                  <p>Phoenix - AwardBIOS v6.00PG, An Energy Star Ally</p>
                  <p>Copyright (C) 1984-2025, Phoenix Technologies, LTD</p>
                </div>
              </div>
              <img src={energyStar} className='energystar' alt="" />
            </div>
            <p className='first'>ASUS A8N-SLI Premium ACPI BIOS Revision 1023-002</p>
            <p className='second'>Main Processor : AMD Athlon(tm) 64 Processor 7000+</p>
            <p className='third'>Memory Testing : <CountUp start="0" end="131072" duration="2" suffix="K" delay="2" /></p>
            <p className='fourth'>Chipset Model : nForce 9</p>
            <p className='fifth'>Primary IDE Master     : WD2500J-22HC  6.00.100 </p>
            <p className='sixth'>Primary IDE Slave      : Media Error</p>
            <p className='seventh'>Secondary IDE Master   : None</p>
            <p className='eigth'>Secondary IDE Slave    : Media Error</p>
          </div>
        </div>
      ) : startingUp === 'steptwo' ? (
        <div id="startupscreen">
          <div>
            <p>This driver is provided by Oak Technology, Inc.</p>
            <p>OTI-99X ATAPI CD-ROM device driver, Rev D91XBV553</p>
            <p>(C)Copyright Oak Technology inc. 1987-1997</p>
          </div>
          <div className="second steptwo">
            <p>Device Name        : OTI-99X CD-ROM</p>
            <p>Transfer Mode      : Programmed I/O</p>
            <p>Number of drives   : 1</p>
          </div>
          <div className="third steptwo">
            <p>MSCDEX Version 2.23</p>
            <p>Copyright (C) Microsoft Corp. 1986-1993 All rights reserved</p>
            <p>       Drive D: = Driver CDROM Unit 0</p>
          </div>
          <p className="fourth steptwo">C:\&gt;PATH C:\DOS;C:\WINDOWS;C:MSIE50</p>
          <p className="fifth steptwo">C:\&gt;SET BLASTER=A220 15 D1 H5 P330 T6</p>
          <p className="sixth steptwo">C:\&gt;SET TEMP=C:\TEMP</p>
          <p className="seventh steptwo">C:\&gt;C:</p>
          <p className="eigth steptwo">Starting MS-DOS...</p>
        </div>
      ) : startingUp === 'stepthree' ? (
        <div id="winstartup">
          <img id='w95logo' src={w95logo} alt="" />
        </div>
      ) : (
        <section id="desktop">
          <Desktop setActiveBar={setActiveBar} />
        </section>
      )}
    </>
  )
}

export default App
