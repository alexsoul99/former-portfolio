import './styles.scss';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Info from '../Info';

const Project = ({ portfolio }) => {
    const [showInfo, setShowInfo] = useState(-1);

    return (
        <div className='images-container'>
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className='image-box' key={idx}>
                            <img
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio"
                            />
                            {showInfo === idx &&
                                <Info
                                    title={port.title}
                                    description={port.description}
                                    technologies={port.technologies}
                                    closeInfo={() => setShowInfo(-1)}
                                />}
                            <div className="content">
                                <h2 className="title">{port.title}</h2>
                                {
                                    port.type === "private"
                                        ?
                                        <p>
                                            <FontAwesomeIcon icon={faLock} className="lock-icon" color='#ff0000' />
                                            Private project
                                        </p>
                                        : <button
                                            className='btn'
                                            onClick={
                                                () => window.open(port.url)
                                            }
                                        >View
                                        </button>
                                }
                                <button
                                    className='btn btn-info'
                                    onClick={() => setShowInfo(idx)}
                                >Info</button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Project;