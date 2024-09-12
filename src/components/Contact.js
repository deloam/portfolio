import React from 'react';
import './Contact.css';

const contacts = [
    {
        name: 'Email',
        icon: 'fa-solid fa-envelope',
        link: 'mailto:deyvisondnl@gmail.com',
    },
    {
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        link: 'https://github.com/deloam',
    },
    {
        name: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/deyvison-amorim-607929187/',
    },
    {
        name: 'Discord',
        icon: 'fa-brands fa-discord',
        link: 'https://discordapp.com/users/411559822471987200',
    },
    {
      name: 'Whatsapp',
      icon: 'fa-brands fa-whatsapp',
      link: 'https://api.whatsapp.com/send?phone=5591983382407&text=Ol%C3%A1%2C%20vim%20do%20seu%20portfolio!',
  },
    {
        name: 'Currículo',
        icon: 'fa-solid fa-file-pdf',
        link: '/curriculo.pdf',  
        download: true,  // Indica que este link baixa o arquivo
    }
];

const Contact = () => {
    return (
        <section id="contact" className="contact-section" data-aos="fade-up">
            <h3>📞 CONTATOS</h3>
            <div className="contact-container">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        className="contact-card"
                        target="_blank"
                        rel="noopener noreferrer"
                        download={contact.download ? true : undefined}
                    >
                        <div className="contact-icon">
                            <i className={contact.icon}></i>
                        </div>
                        <h4 className="contact-name">{contact.name}</h4>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
