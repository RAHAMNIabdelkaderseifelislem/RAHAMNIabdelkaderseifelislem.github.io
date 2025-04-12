import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Abd El Kader Seif El Islem RAHMANI - AI Expert & Full Stack Developer</title>
        <meta name="description" content="Abd El Kader Seif El Islem RAHMANI is a PhD Candidate in AI, Deep Learning Engineer, AI Expert, and Full Stack Developer. Explore his projects and achievements." />
        <meta name="keywords" content="AI, Machine Learning, Deep Learning, Full Stack Developer, Abd El Kader Seif El Islem RAHMANI" />
        <meta name="author" content="Abd El Kader Seif El Islem RAHMANI" />
        <meta property="og:title" content="Abd El Kader Seif El Islem RAHMANI - AI Expert & Full Stack Developer" />
        <meta property="og:image" content="img/logo/logo426.png" />
        <meta property="og:description" content="Abd El Kader Seif El Islem RAHMANI is a PhD Candidate in AI, Deep Learning Engineer, AI Expert, and Full Stack Developer. Explore his projects and achievements." />
        <meta property="og:url" content="https://rahamniabdelkaderseifelislem.github.io" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
