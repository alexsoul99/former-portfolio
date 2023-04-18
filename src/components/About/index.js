import './styles.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const changeAnimation = () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }

    useEffect(() => changeAnimation)

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"About me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>I am a software developer with experience creating, implementing, and maintaining websites and web applications, and I am looking for an opportunity to work with the latest technologies on challenging and diverse projects so that I can use and continue to grow my knowledge and experience.</p>
                    <p>I am quite curious, confident and secure, and I am continually working to improve myself and become, on a daily basis, the best possible version of myself and thus be useful to my peers and colleagues.
                    </p>
                    <p>Proficient in a variety of technologies, including JS, TS, Python, HTML5, CSS3,  ReactJS, NodeJS, ExpresJS, PostgreSQL, Bootstrap, Docker, Git, Linux.
                    </p>
                    <p>Also, I'm able to effectively self-manage during independent projects, as well as collaborate in a team setting, I'm open to learn and use new technologies and I have a quick adaptation to new work environments.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNodeJs} color='#6cc24a' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>                        
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>                        
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;