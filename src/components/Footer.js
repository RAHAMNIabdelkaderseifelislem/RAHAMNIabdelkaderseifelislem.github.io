import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Abd El Kader Seif El Islem RAHMANI 2025</span>
          </div>
          <div className="col-md-4 text-center">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://wa.link/s3jbio"><i className="fa fa-whatsapp"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/RAHAMNIabdelkaderseifelislem"><i className="fa fa-github"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/aek-seif-el-islem-rahmani/"><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-right">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
