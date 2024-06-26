import aboutme from '../assets/aboutme.png';
import notepad from '../assets/notepad.png';
import contact from '../assets/contact.png';
import photos from '../assets/photos.png';
import resume from '../assets/resume.png';
import doom from '../assets/doom.png';
import projects from "../assets/projects.png"
import linkedinIcon from '../assets/linkedin.png';
import github from '../assets/github.png';
import paint from '../assets/paint.png';
import { useEffect, useState, useRef } from 'react';
import AboutMeContent from './AppsContent/AboutMeContent';
import ContactContent from './AppsContent/ContactContent';
import Window from './Window';
import Bar from './Bar';
import NotepadContent from './AppsContent/NotepadContent';
import ExternalWindowLinkedin from './AppsContent/ExternalWindowLinkedin';
import ExternalWindowGithub from './AppsContent/ExternalWindowGithub';
import ExternalWindowResume from './AppsContent/ExternalWindowResume';
import DoomContent from './AppsContent/DoomContent';
import ProjectsContent from './AppsContent/ProjectsContent';
import PaintContent from './AppsContent/NotepadContent copy';

export default function Desktop(props) {
    const [activeBar, setActiveBar] = useState(false);
    const [openedApps, setOpenedApps] = useState([]);
    const [topAppId, setTopAppId] = useState(null);
    const [appOrder, setAppOrder] = useState([]);
    const [zIndex, setZIndex] = useState(1);
    const desktopRef = useRef(null);
    const audioRef = useRef();

    let zindex = 1;


    const openApp = (app) => {
        const existingApp = openedApps.find(openedApp => openedApp.uniqueClass === app.uniqueClass);

        if (existingApp) {
            if (existingApp.minimized) {
                toggleMinimizeApp(existingApp.id);
            }
            bringToFront(existingApp.id);
        } else {
            const timestamp = Date.now();
            setOpenedApps(prevApps => [...prevApps, { ...app, id: timestamp, closeApp: () => closeApp(timestamp) }]);
            setTopAppId(timestamp); // Set the newly opened app to be on top
            setAppOrder(prevOrder => [...prevOrder, timestamp]);
        }
    };

    const closeApp = (appId) => {
        setOpenedApps(prevApps => prevApps.filter(app => app.id !== appId));
    }

    const minimizeApp = (appId) => {
        setOpenedApps(prevApps => prevApps.map(app =>
            app.id === appId ? { ...app, minimized: true } : app
        ));

        setAppOrder(prevOrder => {
            // Filter out the app with the given appId
            const filteredOrder = prevOrder.filter(id => id !== appId);
            // Return the new array with the app at the beginning
            return [appId, ...filteredOrder];
        });
    }

    const toggleMinimizeApp = (appId) => {
        setOpenedApps(prevApps => prevApps.map(app =>
            app.id === appId ? { ...app, minimized: !app.minimized } : app
        ));

        setAppOrder(prevOrder => {
            // Filter out the app with the given appId
            const filteredOrder = prevOrder.filter(id => id !== appId);
            // Return the new array with the app at the beginning
            return [appId, ...filteredOrder];
        });
    }

    const maximizeApp = (appId) => {
        setOpenedApps(prevApps => prevApps.map(app =>
            app.id === appId ? { ...app, maximized: true } : app
        ));
    }

    const toggleMaximizeApp = (appId) => {
        setOpenedApps(prevApps => prevApps.map(app =>
            app.id === appId ? { ...app, maximized: !app.maximized } : app
        ));
    }

    const bringToFront = (appId) => {
        setTopAppId(appId);
        setAppOrder(prevOrder => {
            // Filter out the app with the given appId
            const filteredOrder = prevOrder.filter(id => id !== appId);
            // Return the new array with the app at the end
            return [...filteredOrder, appId];
        });
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopRef.current && !desktopRef.current.contains(event.target)) {
                const allIcons = document.querySelectorAll('.singleicon div');
                for (let i = 0; i < allIcons.length; i++) {
                    allIcons[i].classList.remove('active');
                }
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClick = () => {
            const allIcons = document.querySelectorAll('.singleicon div');
            for (let i = 0; i < allIcons.length; i++) {
                allIcons[i].classList.remove('active');
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);





    const handleIconClick = (e, item) => {
        e.stopPropagation();

        const allIcons = document.querySelectorAll('.singleicon div');
        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i].classList.remove('active');
        }
        const clickedItem = document.getElementById(item);
        clickedItem.classList.add('active');

        props.setActiveBar(false);
    };

    const SingleIcon = (props) => {
        let timer = 0;
        let prevent = false;

        const handleClick = (e) => {
            timer = setTimeout(() => {
                if (!prevent) {
                    handleIconClick(e, props.id);
                }
                prevent = false;
            }, 0);
        };

        const handleDoubleClick = (e) => {
            clearTimeout(timer);
            prevent = true;
            if (props.onClick) {
                props.onClick();
                openApp({ uniqueClass: props.uniqueClass, name: props.name, icon: props.icon, component: { Component: props.component } });
            }
        };

        return (
            <div className="singleicon" onClick={handleClick} onDoubleClick={handleDoubleClick}>
                <div id={props.id}>
                    <img src={props.icon} className="desktopiconicon" />
                    <p className="desktopiconname">{props.name}</p>
                </div>
            </div>
        );
    };


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
        }
    }, []);

    return (
        <>
            <audio
                id='startupSound'
                src="/startup.mp3"
                ref={audioRef}
                onLoadedData={() => {
                    if (audioRef.current) {
                        audioRef.current.play();
                    }
                }}
            />
            <article id="desktopicons" ref={desktopRef}>

                <SingleIcon id="aboutme" icon={aboutme} uniqueClass={'aboutme'} name={'About me'} component={AboutMeContent} onClick={() => { }} />
                <SingleIcon id="projects" icon={projects} uniqueClass={'projects'} name={'My projects'} component={ProjectsContent} onClick={() => { }} />
                <SingleIcon id="notepad" icon={notepad} uniqueClass={'notepad'} name={'Notepad'} component={NotepadContent} onClick={() => { }} />
                <SingleIcon id="contact" icon={contact} uniqueClass={'contact'} name={'Contact'} component={ContactContent} onClick={() => { }} />
                <SingleIcon id="paint" icon={paint} uniqueClass={'paint'} name={'Paint'} component={PaintContent} onClick={() => { }} />
                {/* <SingleIcon id="photos" icon={photos} uniqueClass={'photos'} name={'Photos'} component={'PhotosContent'} onClick={() => { }} /> */}
                <SingleIcon id="resume" icon={resume} uniqueClass={'resume'} name={'Resume'} component={ExternalWindowResume} onClick={() => { }} />
                <SingleIcon id="LinkedIn" icon={linkedinIcon} uniqueClass={'linkedin'} name={'Linkedin'} component={ExternalWindowLinkedin} onClick={() => { }} />
                <SingleIcon id="github" icon={github} uniqueClass={'github'} name={'Github'} component={ExternalWindowGithub} onClick={() => { }} />
                <SingleIcon id="doom" icon={doom} uniqueClass={'doom'} name={'Doom'} component={DoomContent} onClick={() => { }} />
                {/* Add encarta */}
            </article>
            {openedApps.map(app => (
                <Window
                    key={app.id}
                    name={app.name}
                    icon={app.icon}
                    className={`${app.minimized ? 'minimized' : ''} ${app.maximized ? 'maximized' : ''} ${app.id === topAppId ? 'onTop' : ''}`}
                    uniqueClass={app.uniqueClass}
                    onClose={() => closeApp(app.id)}
                    onMinimize={() => minimizeApp(app.id)}
                    onMaximize={() => toggleMaximizeApp(app.id)}
                    onMouseDown={() => bringToFront(app.id)}
                    style={{ zIndex: app.zIndex }}
                >
                    <app.component.Component closeApp={app.closeApp} />
                </Window>
            ))}
            <Bar openedApps={openedApps} toggleMinimizeApp={toggleMinimizeApp} setActiveBar={setActiveBar} activeBar={activeBar} openApp={openApp} bringToFront={bringToFront} topAppId={topAppId} appOrder={appOrder} />
        </>
    )
}