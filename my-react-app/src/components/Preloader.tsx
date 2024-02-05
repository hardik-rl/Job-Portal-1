import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader-active');
    const body = document.querySelector('body');

    const hidePreloader = () => {
      preloader.style.transitionDelay = '0.45s';
      preloader.style.opacity = '0';

      setTimeout(() => {
        preloader.style.display = 'none';
        body.style.overflow = 'visible';
      }, 450);
    };

    window.addEventListener('load', hidePreloader);

    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, []);

  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/grp-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
