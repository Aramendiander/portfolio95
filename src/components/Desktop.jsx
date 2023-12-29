import aboutme from '../assets/aboutme.png';
import notepad from '../assets/notepad.png';
import contact from '../assets/contact.png';
import photos from '../assets/photos.png';
import resume from '../assets/resume.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import { useEffect, useState } from 'react';

export default function Desktop() {
    const [activeWindow, setActiveWindow] = useState('');
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
    const [isNotepadOpen, setIsNotepadOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isPhotosOpen, setIsPhotosOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLinkedinOpen, setIsLinkedinOpen] = useState(false);
    const [isGithubOpen, setIsGithubOpen] = useState(false);

    let zindex = 1;


    const SingleIcon = (props) => {
        return (
            <>
                <div className="singleicon" onClick={() => handleIconClick(props.id)}>
                    <div id={props.id}>
                        <img src={props.icon} className="desktopiconicon" />
                        <p className="desktopiconname">{props.name}</p>
                    </div>
                </div>
            </>
        )
    }




    const handleIconClick = (item) => {
        console.log(item)
    }

    return (
        <>
            <article id="desktopicons">
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