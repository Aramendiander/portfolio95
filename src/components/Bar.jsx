import { useState, useEffect, useRef } from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import resume from '../assets/resume.png'
import contact from '../assets/contact.png'

export default function Bar() {
    const [activeBar, setActiveBar] = useState(false)
    const barRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const handleClick = (event) => {
        if (barRef.current && !barRef.current.contains(event.target)) {
            setActiveBar(false)
        }
    }

    const handleStartClick = (event) => {
        event.stopPropagation(); // prevent triggering handleClick
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
            <section id="bottombar" ref={barRef}>
                {activeBar && (
                    <article id="openedstart">
                        <div className="winlogo"><span>Aramendi</span> 95</div>
                        <div className="baritems">
                            <BarItem name="LinkedIn" icon={linkedin} />
                            <BarItem name="Github" icon={github} />
                            <BarItem name="Resume" icon={resume} />
                            <BarItem name="Contact" icon={contact} />
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