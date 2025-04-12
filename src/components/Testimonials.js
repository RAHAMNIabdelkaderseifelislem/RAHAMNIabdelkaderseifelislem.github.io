import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 text-center">
            <img src="img/reference/ismail.jpeg" alt="Ismail Bentabet" style={{ borderRadius: '50%', width: '170px' }} />
            <p>"Abd El Kader doesn't just aim to get the job done; he strives to deliver exceptional results that truly make a difference."</p>
            <p><a href="https://www.linkedin.com/in/ismailbentabett/">B. Ismail</a> - Software Engineer</p>
          </div>
          <div className="col-lg-4 text-center">
            <img src="img/reference/khial.jpeg" alt="Abderrahmane Khial" style={{ borderRadius: '50%', width: '170px' }} />
            <p>"He consistently demonstrated exceptional problem-solving skills and proficiency in data science and full-stack development."</p>
            <p><a href="https://www.linkedin.com/in/khial-abderrahman/">K. Abderrahmane</a> - Python Developer & Web Developer</p>
          </div>
          <div className="col-lg-4 text-center">
            <img src="img/reference/sidnas.jpeg" alt="Abderrahman Sidnas" style={{ borderRadius: '50%', width: '170px' }} />
            <p>"Their ability to translate theoretical concepts into practical solutions was invaluable to our team."</p>
            <p><a href="https://www.linkedin.com/in/abderrahman-sidnas-a20403259/">S. Abderrahmane</a> - Angular and Flutter Fullstack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
