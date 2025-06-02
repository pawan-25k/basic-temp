import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
}, [darkMode]);

  return (
    <div className="App">
      {/* Navigation Bar */}
      
      <nav className="navbar">
  <div className="nav-logo">NAME</div>
  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
    {darkMode ? '☀️ Light' : '🌙 Dark'}
  </button>
</nav>


      {/* Landing Section */}
<section className="landing">
  <h1>Hi, ------</h1>
  <p>Welcome to my portfolio website</p>
  <a href="#projects" className="button">
    View My Projects
  </a>
</section>

{/* About Me Section */}
<section id="about" className="about">
  <h2>About Me</h2>
  <p>
    I'm a Computer Science student with a passion for web development...
  </p>
  <p>
    Currently improving my skills in React, JavaScript, and backend tools...
  </p>
</section>

{/* Skills Section */}
<section id="skills" className="skills">
  <h2>Skills</h2>
  <ul className="skills-list">
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Git & GitHub</li>
    <li>Firebase</li>
    <li>Node.js (Basic)</li>
  </ul>
</section>


      
            {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>project 1</h3>
            <p>Description ----</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>project 2</h3>
            <p>Description ----</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          
                {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email:</p>
        <a href="mailto:-------" className="email-link">
          ??????????????
        </a>
      </section>


          {/* Add more project cards here */}
        </div>
      </section>

    </div>
  );
}

export default App;
