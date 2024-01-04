import { useState, useEffect, useRef } from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import resume from '../assets/resume.png'
import contact from '../assets/contact.png'
import ExternalWindowLinkedin from './AppsContent/ExternalWindowLinkedin';
import ExternalWindowGithub from './AppsContent/ExternalWindowGithub';
import ExternalWindowResume from './AppsContent/ExternalWindowResume';
import ContactContent from './AppsContent/ContactContent';

export default function Bar(props) {
    const barRef = useRef(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const handleClick = (event) => {
        if (barRef.current && !barRef.current.contains(event.target)) {
            props.setActiveBar(false)
        }
    }

    const handleStartClick = (event) => {
        event.stopPropagation();
        props.setActiveBar(!props.activeBar)
    }

    const BarItem = (props) => {
        const handleClick = () => {
            const app = {
                name: props.name,
                component: { Component: props.component },
                icon: props.icon,
                uniqueClass: props.uniqueClass
            };
            props.openApp(app);
        };

        return (
            <div className="baritem" onClick={handleClick}>
                <img src={props.icon} className="baritemicon" />
                <p className="baritemname">{props.name}</p>
            </div>
        );
    };


    const handleBarIconClick = (appId) => {
        const app = props.openedApps.find(app => app.id === appId);
        if (appId === props.appOrder[props.appOrder.length - 1]) {
            props.toggleMinimizeApp(appId);
        } else if (app.minimized) {
            props.toggleMinimizeApp(appId);
            props.bringToFront(appId);
        } else {
            props.bringToFront(appId);
        }
    };


    return (
        <section id="bottombar" ref={barRef}>
            {props.activeBar && (
                <article id="openedstart">
                    <div className="winlogo"><span>Aramendi</span> 95</div>
                    <div className="baritems">
                        <BarItem id="LinkedIn" icon={linkedin} uniqueClass={'linkedin'} name={'Linkedin'} component={ExternalWindowLinkedin} openApp={props.openApp} />
                        <BarItem id="github" icon={github} uniqueClass={'github'} name={'Github'} component={ExternalWindowGithub} openApp={props.openApp} />
                        <BarItem id="resume" icon={resume} uniqueClass={'resume'} name={'Resume'} component={ExternalWindowResume} openApp={props.openApp} />
                        <BarItem id="contact" icon={contact} uniqueClass={'contact'} name={'Contact'} component={ContactContent} openApp={props.openApp} />
                    </div>
                </article>
            )}
            <article id="bar">
                <div id="start" onClick={handleStartClick}></div>
                <div className="separator"></div>
                <div className="baricons">
                    {props.openedApps.map((app) => (
                        <button className="baricon" key={app.id} onClick={() => handleBarIconClick(app.id)}>
                            <img src={app.icon} className="bariconicon" />
                            <p className="bariconname">{app.name}</p>
                        </button>
                    ))}
                </div>
                <div className="datecontainer">
                    <div className='date'>{`${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`}</div>
                </div>
            </article>
        </section>
    )
}