import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import "./styles.scss";
import portfolioData from "../../data/portfolio.json"
import Project from '../Project';


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const changeAnimation = () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }

    useEffect(() => changeAnimation);


    return (
        <>
            <div className="container portfolio-page portfolio-page-resp">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <Project portfolio={portfolioData.portfolio} />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio