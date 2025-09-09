import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaMobile, FaDatabase } from "react-icons/fa";

const personal_details = [
  {
    label: "Name",
    value: "Hiranya Induwara",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "7 Orchard Gate, London",
  },
  {
    label: "Email",
    value: "hiranyainduwara@icloud.com",
  },
];

const job_summary =
  "I am a highly driven and detail-oriented graduated Software Engineering student who has a solid background in software development, problem-solving, and system design. I have worked with the idea of modern technologies and applications such as JavaScript, Node.js, React, Flutter, and MongoDB. I have a good team spirit, and I would love to work in cross-functional teams and contribute to innovative projects that make actual changes. I am advancing constantly and adjusting to new technologies and systems to keep pace in this rapidly changing profession.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personal_wrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Software Developer</h3>
            <p>{job_summary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personal_information_header_text">
              Personal Information
            </h3>
            <ul>
              {personal_details.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about_content_services_wrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_services_wrapper_inner_content">
              <div>
                <FaMobile size={60} color="#964B00" />
              </div>
              <div>
                <DiAndroid size={60} color="#964B00" />
              </div>
              <div>
                <FaDatabase size={60} color="#964B00" />
              </div>
              <div>
                <DiApple size={60} color="#964B00" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
