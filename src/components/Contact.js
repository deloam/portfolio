// src/components/Contact.js
import React from 'react';
import './Contact.css'; // CSS específico do Contact

const Contact = () => (
  <section id="contact" data-aos="fade-up" data-aos-delay="300">
    <h3>Contato</h3>
    <p>Email: <a href="mailto:deyvison@example.com">deyvison@example.com</a></p>
    <p>Telefone: (XX) XXXXX-XXXX</p>
    <div className="social-links">
      <a href="https://linkedin.com/in/deyvison">LinkedIn</a> | 
      <a href="https://github.com/deyvison">GitHub</a>
    </div>
  </section>
);

export default Contact;
