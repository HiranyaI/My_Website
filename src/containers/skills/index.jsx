import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill, BsPaperclip} from 'react-icons/bs'
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from 'rc-progress';
import './styles.scss';


const Skills=()=>{
    return(
        <section id="skills" className="skills">
            <PageHeaderContent 
                headerText="My Skills"
                icon={<BsPaperclip size={40}/>}
            />
            <div className="skills_content_wrapper">
                {
                    skillsData.map((item,i)=>(
                        <div className="skills_content_wrapper_inner_content">
                            <Animate
                            play
                                duration={1.5}
                                delay={0.3}
                                start={{
                                    transform:'translateX(0px)'
                                }}

                            >
                                <h3 className="skills_content_wrapper_inner_content_category_text">
                                    {item.label}
                                </h3>
                                <div className="skills_content_wrapper_inner_content_progressbar_container">
                                    {
                                        item.data.map((skillItem,j)=>(
                                            <AnimateKeyframes
                                            play
                                            duration={1}
                                            keyframes={["opacity:1","opacity:0" ]}
                                            iterationCount ="1"
                                            >
                                                <div className="progressbar_wrapper" key={j}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line 
                                                    percent={skillItem.percentage}
                                                    strokeWidth="2"
                                                    strokeColor="var(--yellow--theme-main-color)"
                                                    trailWidth={"2"}
                                                    strokelinecap="square"
                                                    
                                                    
                                                    />
                                                </div>

                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>

                        </div>
                    ))
                }

            </div>

        </section>
    )
}
export default Skills;