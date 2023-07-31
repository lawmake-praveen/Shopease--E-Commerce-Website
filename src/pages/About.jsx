import React from "react";
import resume from "../assets/Resume - Lawmake Praveen.pdf";
import { about, social } from "../components/content";

const About = () => {
  return (
    <div className="about">
      <h1 className="heading">About Me</h1>
      <div className="para">
        <p>
          This website is created by{" "}
          <a
            href="https://lawmake.vercel.app/"
            target="_blank"
            className="regular-link"
          >
            Lawmake Praveen
          </a>
          .
        </p>
        <p>
          A passionate fresher web developer who recently entered the field of
          web development. Proficient in HTML, CSS, JavaScript, and frameworks
          such as React.
        </p>
        <p>
          As a self-taught web developer, I have learned tools and languages
          such as JavaScript, React, HTML, CSS, Node.js and jQuery.
          Additionally, I have a good understanding of UI/UX design. I have been
          learning these skills and tools for the past eight months through
          online courses and now looking to start my professional web developer
          career. I am excited to connect with like-minded professionals to
          create stunning websites.
        </p>
        <p>
          You can download my{" "}
          <a
            href={resume}
            target="_blank"
            download="Resume-Lawmake Praveen"
            className="regular-link"
          >
            resume here
          </a>
        </p>
      </div>
      <h1 className="heading">My Social</h1>
      <div className="para links">
        {social.map((item, index) => {
          return (
            <a
              href={item.link}
              key={index}
              title={item.title}
              target="_blank"
              className="logo-link"
            >
              <img src={item.image} alt={item.title} />
            </a>
          );
        })}
      </div>
      <div className="company-about-us">
        {about.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="second-heading">{item.heading}</h1>
              <p>{item.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
