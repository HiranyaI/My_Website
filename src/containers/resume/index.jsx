import {react}from 'react';
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill, BsPersonBadge, BsPersonCheck, BsPersonFillExclamation} from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {data} from './utils';
import './styles.scss';
import 'react-vertical-timeline-component/style.min.css';
import{MdWork,MdSchool} from 'react-icons/md'



const Resume=()=>{
    return(
        <section id="resume" className="resume">
            <PageHeaderContent 
                headerText="My Resume"
                icon={<BsPersonCheck size={40}/>}
            />
            <div className="timeline">
                <div className="timeline_experience">
                    <h3 className="timeline_experience_header_text">
                        Experience
                    </h3>

                    <VerticalTimeline
                    layout={"1-column"}
                    lineColor="#964B00">
                        {
                            data.experience.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timmeline_experience_vertical_timeline_element"
                                contentStyle={
                                        {
                                            background:'none',
                                            color:'#964B00',
                                            border:'1.5px solid #FFFFFF',
                                            
                                        }
                                    }
                                    icon={<MdWork/>}
                                    iconStyle={{
                                        background:'#964B00',
                                        color:"#FFFFFF"
                                    }}
                                    >
                                    
                                    <div className="vertical_timeline_element_title_wrapper">
                                        <h3 className="vertical_timeline_element_title"> {item.title}</h3>
                                        <h4 className="vertical_timeline_element_subtitle">{item.subTitle}</h4>
                                        
                                    </div>
                                    <p className='vertical_timeline_element_title_wrapper_description'>{item.description}</p>

                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>

                </div>
                <div className="timeline_education">
                    <h3 className="timeline_education_header_text">
                        Education
                    </h3>
                    <VerticalTimeline
                    layout={"1-column"}
                    lineColor="#964B00">
                    {
                            data.education.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timmeline_experience_vertical_timeline_element"
                                contentStyle={
                                        {
                                            background:'none',
                                            color:'#964B00',
                                            border:'1.5px solid #FFFFFF',
                                            
                                        }
                                    }
                                    icon={<MdSchool/>}
                                    iconStyle={{
                                        background:'#964B00',
                                        color:"#FFFFFF"
                                    }}
                                    >
                                
                                    <div className="vertical_timeline_element_title_wrapper">
                                        <h3 className="vertical_timeline_element_title"> {item.title}</h3>
                                        <h4 className="vertical_timeline_element_subtitle">{item.subTitle}</h4>
                                        
                                    </div>
                                    <p className='vertical_timeline_element_title_wrapper_description'>{item.description}</p>

                                </VerticalTimelineElement>
                            ))
                        }
                        </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}
export default Resume;