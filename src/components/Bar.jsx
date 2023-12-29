import { useState } from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import resume from '../assets/resume.png'
import contact from '../assets/contact.png'

export default function Bar() {

    const [activeBar, setActiveBar] = useState(false)


    const handleStartClick = () => {
        setActiveBar(!activeBar)
    }

    const BarItem = (props) => {
        return (
            <>
                <div className="baritem">
                    <img src={props.icon} className="baritemicon" />
                    <p className="baritemname">{props.name}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <section id="bottombar">
                {activeBar && (
                    <article id="openedstart">
                        <div className="winlogo"><span>Windows</span> 95</div>
                        <div className="baritems">
                            <BarItem name="About Me" icon={linkedin} />
                            <BarItem name="Github" icon={github} />
                            <BarItem name="Resume" icon={resume} />
                            <BarItem name="Contact" icon={contact} />
                            {/* <div className="baritem">Linkedin</div>
                            <div className="baritem">Github</div>
                            <div className="baritem">Resume</div>
                            <div className="baritem">Photos</div>
                            <div className="baritem">Contact</div> */}
                        </div>
                    </article>
                )}
                <article id="bar">
                    <div id="start" onClick={handleStartClick}></div>
                    <div className="separator"></div>
                </article>
            </section>
        </>
    )
}