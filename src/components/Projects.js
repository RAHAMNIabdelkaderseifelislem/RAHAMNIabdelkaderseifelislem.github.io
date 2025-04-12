import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Projects</h2>
            <h3 className="section-subheading text-muted">A glimpse of the projects I've been working on</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/portfolio/PlantAfterDetection.png`} alt="Plant Disease Detection" />
              <div className="card-body">
                <h5 className="card-title">Plant Disease Detection</h5>
                <p className="card-text">An online tool to detect plant diseases using machine learning.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/portfolio/ChatBot3.png`} alt="AgriChat" />
              <div className="card-body">
                <h5 className="card-title">AgriChat</h5>
                <p className="card-text">An agriculture expert system using Mixture of Experts (MoE) and Retrieval-Augmented Generation (RAG) techniques.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/portfolio/fingerprint.jpeg`} alt="Fingerprint Recognition" />
              <div className="card-body">
                <h5 className="card-title">Fingerprint Recognition</h5>
                <p className="card-text">A cloud-based fingerprint recognition system using AI algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
