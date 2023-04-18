import Loader from 'react-loaders';
import './styles.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    const changeAnimation = () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }

    useEffect(() => changeAnimation)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lx87cw7', 'template_tvp7lys', form.current, 'ynxZpoxIFilS2nqH7')
            .then((result) => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
                (error) => {
                    alert('Failed to send the message, please try again');
                });
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Contact me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in job opportunities as part-time or full-time developer. If you have any request or question you want to ask me, do not hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='wrap-map'>
                    <div className='info-map'>
                        Address:
                        <br />
                        24th Street 1-A, Harlem.
                        <br />
                        Holguín, Cuba.
                    </div>
                    <MapContainer center={[20.879423, -76.271593]} zoom={16}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[20.879423, -76.271593]} >
                            <Popup>I live here, do you want a cup of coffee?</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;