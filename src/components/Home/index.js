import './styles.scss';
import LogoTitle from '../../assets/images/logo-a-no-bg.png'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const changeAnimation = () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }

    useEffect(() => changeAnimation)

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Hi,".split("")}
                            idx={10} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"I'm".split("")}
                            idx={13} />
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"lejandro".split("")}
                            idx={16} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Almaguer".split("")}
                            idx={24} />
                    </h1>
                    <h2>Software Engineer & Web Developer</h2>
                    {/* <Link to="/contact" className='flat-button'>CONTACT ME</Link> */}
                    <a
                        href='https://drive.google.com/file/d/1B4ikmXn2qSTBGAfO9FyeVLiNd1Y_y0q6/view?usp=share_link'
                        className="flat-button"
                        rel='noreferrer'
                        target='_blank'
                    >Download CV</a>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;