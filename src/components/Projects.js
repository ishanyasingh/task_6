import React from 'react';
import './styles/project.css'

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <section id="projects">
        <div className="project-card">
          <img src='./img2.png' alt='img'/>
          <h3>Whisp</h3>
          <p>
            Whisp is a cutting-edge end-to-end chat application designed to provide 
            users with a seamless messaging experience. With a strong focus on 
            user-friendly features, Whisp enables individuals and groups to connect and 
            communicate in real-time without compromising their data security.
          </p>
        </div>
        <div className="project-card">
          <img src='./img1.png' alt='img'/>
          <h3>Spectrum</h3>
          <p>
            Spectrum is the ultimate music streaming application designed to bring 
            the world of music to your fingertips. Whether you're an avid music lover, 
            a casual listener, or an artist looking to share your creations, Spectrum 
            has something special for everyone.
          </p>
        </div>
        <div className="project-card">
          <img src='./img3.jpeg' alt='img'/>
          <h3>Commune</h3>
          <p>
          Commune is a versatile community chat channel application that empowers 
          users to forge connections, communicate seamlessly, and create meaningful 
          experiences through text, audio, and video interactions. It's the all-in-one 
          hub for communities to thrive and come together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;