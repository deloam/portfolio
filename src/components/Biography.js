// src/components/Biography.js
import React from 'react';
import './Biography.css'; // CSS específico do Biography
import foto from '../assets/images/foto.JPG';
import TypingEffect from 'react-typing-effect';

const Biography = () => {
  return (
    <section className='about-me' id="biography" data-aos="fade-up">
      <div className='about-container'>
        <div className='about-image'>
          <img src={foto} alt='Deyvison Amorim - Desenvolvedor' />
        </div>
        <div className='about-text'>
          <h3>{'🧑🏽‍💻 SOBRE MIM'}</h3>
          <p>
            Saudações! Meu nome é Deyvison Amorim, e sou um desenvolvedor web versátil,
            especializado tanto em front-end quanto em back-end. Minha expertise
            abrange uma ampla gama de tecnologias, incluindo React, Angular, Flutter,
            MySQL, Node.js e muito mais. Sou dedicado a conceber soluções inovadoras que não apenas
            atendam às necessidades funcionais, mas também encantem visualmente.
            Com um olhar atento para os detalhes e um compromisso com a excelência,
            estou sempre em busca de superar os desafios técnicos e elevar a experiência
            do usuário a novos patamares.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Biography;
