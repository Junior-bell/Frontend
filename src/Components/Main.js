import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Main.css';

const Main = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['<i>Web</i> Developer.', 'Full Stack Java Developer.'],
      typeSpeed: 50,
    });
    return () => typed.destroy(); // Cleanup
  }, []);

  return (
    <main className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>
            Hi, My name is <span className="purple">Shivam</span>
          </h1>
          <p>and I am a Passionate</p>
          <span id="element"></span>
        </div>
        <div className="col-md-6 text-center">
          <img src="bg.jpg" alt="Background" className="img-fluid rounded-circle" />
        </div>
      </div>
    </main>
  );
};

export default Main;
