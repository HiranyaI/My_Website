import React from "react";
import {useNavigate} from 'react-router-dom';
import './styles.scss';
import {Animate} from 'react-simple-animate';

const Home=()=>{

    const navigate =useNavigate();
    console.log(navigate);
    const handleNavigateToContactMEPage=()=>{
        navigate('/contact')
    }
    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Hiranya
                    <br/>
                    A Software Developer

                </h1>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform:'translateY(550px)'
                }}

                end={{
                    transform:'translateY(0px)'
                }}
                >
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactMEPage}>Get in Touch</button>
                </div>
            </Animate>
            </div>
        </section>
    )
}
export default Home;