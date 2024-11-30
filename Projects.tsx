import React from 'react';
import "../app/styles/project.css";

import Heading from './Heading';
import Card from './Card';

const data = [
    {
      id: 1,
      title: "Static Resume",
      desc: "A simple static resume built using pure HTML and CSS, showcasing personal information, education, and experience.",
      img: "/Staticresume.png",
      tags: ["HTML", "CSS"]
    },
    {
      id: 2,
      title: "Dynamic Resume",
      desc: "A dynamic resume featuring interactivity and data binding, built with JavaScript and styled with modern CSS.",
      img: "/Dynamicresume.png",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      id: 3,
      title: "Editable Resume",
      desc: "An interactive and dynamic resume built with TypeScript, HTML, and CSS, allowing for real-time updates and customization.",
      img: "/Editableresume.png",
      tags: ["TypeScript", "HTML", "CSS"]
    }
  ];
  

  const Projects = () => {
    return (
      <div id="projects" className="projects-container">
        <Heading title="My Projects" />
        <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
          {data.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;















