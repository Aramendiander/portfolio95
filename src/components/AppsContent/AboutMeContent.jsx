import aboutme from '../../assets/aboutme.jpeg'

export default function AboutMeContent(props) {

    return (
        <article className="aboutmecontainer">
            <div className="presentation">
                <div className="halfleft">
                    <div className="aboutmecontent">
                        <p>Hi,</p>
                        <p>My name is Ander Aramendi, </p>
                        <p>Full-stack developer and Senior SEO Specialist.</p>
                        <p>And as you can probably guess by this, a nerd.</p>
                        <p>Welcome to my retro-portfolio.</p>
                    </div>
                </div>
                <div className="halfright">
                    <img className='aboutmepic' src={aboutme} alt="" />
                </div>
            </div>
            <div className="rest">
                <div className="techicons">
                    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" className="html" />
                    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" className="css" />
                    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" className="js" />
                    <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="" className="php" />
                    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" className="node" />
                    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" className="react" />
                    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="" className="reactrouter" />
                    <img src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white" alt="" className="wp" />
                    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="" className="mysql" />
                    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="" className="postgres" />
                    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="" className="sequelize" />
                    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" className="mongo" />
                    <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="" className="jwt" />
                    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" className="express" />
                    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="" className="vite" />
                    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="" className="postman" />
                    <img src="https://img.shields.io/badge/Windows%2095-008484?style=for-the-badge&logo=windows95&logoColor=white" alt="" className="windows" />
                    <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="" className="linux" />
                </div>
                <div>
                    <h2>About me</h2>
                    <p>Hey there! 👋 I'm Ander from Spain. I Started my tech journey at a young age, building a private World of Warcraft server at 12 because why not? 🎮</p>
                    <p>I Moderated forums even got to Admin on one, got a taste of SEO, and then jumped into the IT world.</p>
                    <p>Studied as a System and Network Admin, but I jumped into the SEO world. I explored and ejoyed the techy side of websites and decided to become a Full Stack Developer. Now, I'm merging coding magic with SEO tricks to create optimized websites.</p>
                    <p>Passionate about tech, always curious, and ready for the next coding adventure.</p>
                </div>
            </div>
        </article>
    )
}