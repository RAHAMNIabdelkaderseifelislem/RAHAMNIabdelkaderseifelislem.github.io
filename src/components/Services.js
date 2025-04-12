import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Let me help make better use of your data. I offer a range of services to help you with your data visualization and data analytics.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 text-center">
            <i className="fa fa-comment-o services-logo"></i>
            <h4>AI for Business</h4>
            <p>Transform your business with custom chatbot solutions and advanced NLP technologies. Leverage AI-powered data analysis to gain insights and drive growth effortlessly.</p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fa fa-plus-circle services-logo"></i>
            <h4>AI Creation</h4>
            <p>Unlock the power of AI with expert model creation and fine-tuning services. Partner with us for cutting-edge machine learning consultation and seamless implementation.</p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fa fa-cube services-logo"></i>
            <h4>Application Development</h4>
            <p>Bring your vision to life with innovative app development services, catering to desktop, web, and mobile platforms. We craft seamless digital experiences that engage users and enhance your brand across all devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
