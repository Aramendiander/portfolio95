import aboutme from '../assets/aboutme.png';
import notepad from '../assets/notepad.png';
import contact from '../assets/contact.png';
import photos from '../assets/photos.png';
import resume from '../assets/resume.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import { useEffect, useState, useRef } from 'react';

export default function Desktop(props) {
    const [activeIcon, setActiveIcon] = useState('');
    const [activeWindow, setActiveWindow] = useState('');
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
    const [isNotepadOpen, setIsNotepadOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isPhotosOpen, setIsPhotosOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLinkedinOpen, setIsLinkedinOpen] = useState(false);
    const [isGithubOpen, setIsGithubOpen] = useState(false);
    const desktopRef = useRef(null);

    let zindex = 1;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopRef.current && !desktopRef.current.contains(event.target)) {
                const allIcons = document.querySelectorAll('.singleicon div');
                for(let i = 0; i < allIcons.length; i++) {
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
            for(let i = 0; i < allIcons.length; i++) {
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
        for(let i = 0; i < allIcons.length; i++) {
            allIcons[i].classList.remove('active');
        }
        const clickedItem = document.getElementById(item);
        clickedItem.classList.add('active');
    
        // Set activeBar to false
        props.setActiveBar(false);
    };

    const SingleIcon = (props) => {
        return (
            <div className="singleicon" onClick={(e) => handleIconClick(e, props.id)} >
                <div id={props.id}>
                        <img src={props.icon} className="desktopiconicon" />
                    <p className="desktopiconname">{props.name}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <article id="desktopicons" ref={desktopRef}>
                <SingleIcon id="aboutme" icon={aboutme} name={'About me'} />
                <SingleIcon id="notepad" icon={notepad} name={'Notepad'}  />
                <SingleIcon id="contact" icon={contact} name={'Contact'} />
                <SingleIcon id="photos" icon={photos} name={'Photos'}  />
                <SingleIcon id="resume" icon={resume} name={'Resume'}  />
                <SingleIcon id="linkedin" icon={linkedin} name={'Linkedin'}  />
                <SingleIcon id="github" icon={github} name={'Github'} />
            </article>
        </>
    )
}