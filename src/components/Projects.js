// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Importa o CSS

const projectsData = [
  {
    title: 'System OS',
    technologies: ['typescript', 'react', 'tailwind-css'],
    description: 'A little more about me. Also looks like Windows.',
    icon: 'fa-solid fa-microchip', // Ícone de exemplo
  },
  {
    title: 'Studay',
    technologies: ['typescript', 'react', 'tailwind-css'],
    description: 'See your homework in an organized and clean way.',
    icon: 'fa-solid fa-book', // Ícone de exemplo
  },
  {
    title: 'Quizzed!',
    technologies: ['typescript', 'react', 'tailwind-css'],
    description: 'A quiz app built with modern technologies.',
    icon: 'fa-solid fa-face-meh-blank', // Ícone de exemplo
  },
  {
    title: 'Portfolio',
    technologies: ['typescript', 'next.js', 'styled-components'],
    description: 'My personal portfolio built with Next.js and styled-components.',
    icon: 'fa-solid fa-face-meh-blank', // Ícone de exemplo
  }
];

const Projects = () => {
  return (
    <section className='projects-section' id="projects" data-aos="fade-up" data-aos-delay="200">
      <h3 className='h3x'>🌐 PROJETOS</h3>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className='project-image'>
              <i className={project.icon}></i> {/* Renderiza o ícone */}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech">
              {project.technologies.join(' • ')}
            </p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

