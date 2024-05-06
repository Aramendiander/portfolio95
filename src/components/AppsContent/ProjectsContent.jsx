import aboutme from '../../assets/aboutme.jpeg'
import moodup from "../../assets/moodup.png";
import moodupadmin from "../../assets/moodupadmin.png";
import geogame from "../../assets/geogame.png";
import tasaweb from "../../assets/tasaweb.png";

export default function ProjectsContent(props) {

    return (
        <article className="projectscontainer">
            <h2>Web Projects</h2>
            <p>Below are some of my personal projects i've been working on</p>

            <div>
                <h3>MoodUp</h3>
                <div className='moodupWrapper'>
                    <img src={moodup} alt="" />
                    <div className='crt' ><img src={moodupadmin} className='crt-image'  alt="" /></div>
                </div>
                <p>A jam project about building an app that records employees' moods and allows them to communicate with HR</p>
                <p>HR can view graphics to observe the evolution of employees' moods. They can also respond to their messages</p>
                <div className="twobuttonwrapper"><a href="https://moodup.aramendi.dev" target="_blank"><button>Try the user version</button></a><a href="https://moodup.aramendi.dev/admin" target="_blank"><button>Try the admin version</button></a></div>
            </div>
            <div>
                <h3>Geogame</h3>
                <img src={geogame} className='geogameimg' alt="" />
                <p>Geography game using the RestCountries API. Play <i>Guess the flag</i>, <i>Guess the capital</i>, or <i>learn about each country</i> in the world</p>
                <div className="buttonwrapper"><a href="https://geogame.aramendi.dev" target="_blank"><button>Try it out</button></a></div>
            </div>
            <div>
                <h3>TasaWeb</h3>
                <img src={tasaweb} className='tasawebimg' alt="" />
                <p>A jam project that calculates the rental price for a house based on multiple parameters. It uses a predictive model built in Python using over 1 million house listings scraped from Spain's largest real state portal </p>
                <div className="buttonwrapper"><a href="https://tasaweb.aramendi.dev" target="_blank"><button>Try it out</button></a></div>
            </div>
        </article>
    )
}