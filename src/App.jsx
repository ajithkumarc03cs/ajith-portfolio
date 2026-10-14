import {

  Mail,

  Download,

  ArrowUpRight,

  Code2,

  Menu,

  X,

  MapPin

} from "lucide-react";



import { FaGithub, FaLinkedin } from "react-icons/fa";





import { useState } from "react";

import "./App.css";



const skills = [

  "Python", "Django", "Django REST Framework",

  "React.js", "JavaScript", "PHP",

  "Laravel", "MySQL", "HTML", "CSS", "Git", "GitHub",

];



const projects = [

  {

    number: "01",

    title: "Student Management System",

    description:

      "A role-based college management application with student records, attendance, examinations and assignments.",

    tech: ["React.js", "Django REST", "MySQL"],

    github: "https://github.com/ajithkumarc03cs",

  },

  {

    number: "02",

    title: "E-commerce Application",

    description:

      "An e-commerce project focused on product management and role-based access for administrators, sellers and customers.",

    tech: ["PHP", "Laravel", "MySQL"],

    github: "https://github.com/ajithkumarc03cs",

  },

  {

    number: "03",

    title: "Expense Tracker",

    description:

      "An expense tracking application planned with a React frontend and ASP.NET Core Web API backend.",

    tech: ["React.js", "ASP.NET Core", "MySQL"],

    github: "https://github.com/ajithkumarc03cs",

  },

];



export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);



  const closeMenu = () => setMenuOpen(false);



  return (

    <>

      <header className="navbar">

        <a className="logo" href="#home" onClick={closeMenu}>

          AK<span>.</span>

        </a>



        <button

          className="menu-toggle"

          onClick={() => setMenuOpen(!menuOpen)}

          aria-label="Toggle navigation"

        >

          {menuOpen ? <X /> : <Menu />}

        </button>



        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          {["Home", "About", "Skills", "Projects", "Contact"].map(

            (item) => (

              <a

                key={item}

                href={`#${item.toLowerCase()}`}

                onClick={closeMenu}

              >

                {item}

              </a>

            )

          )}

        </nav>



        <a className="nav-contact" href="#contact">

          Let's Talk <ArrowUpRight size={16} />

        </a>

      </header>



      <main>

        <section className="hero section" id="home">

          <div className="hero-content">

            <p className="eyebrow">

              <span className="status-dot" />

              AVAILABLE FOR OPPORTUNITIES

            </p>



            <h1>

              Hi, I'm <span>Ajithkumar</span>

              <br />

              <span className="outline-text">C.</span>

            </h1>



            <h2>Web Developer</h2>



            <p className="hero-description">

              I build web applications with Python, Django, React

              and modern web technologies. I enjoy turning ideas

              into useful, reliable digital experiences.

            </p>



            <div className="hero-actions">

              <a href="#projects" className="button primary">

                Explore My Work <ArrowUpRight size={18} />

              </a>

              <a href="#contact" className="button secondary">

                Contact Me <Mail size={18} />

              </a>

              <a
                href="/AjithkumarC_resume.pdf"
                className="button secondary"
                download
              >
                Download Resume <Download size={18} />
              </a>

            </div>



            <div className="hero-socials">

              <a

                href="https://github.com/ajithkumarc03cs"

                target="_blank"

                rel="noreferrer"

                aria-label="GitHub"

              >

                <FaGithub />

              </a>

              <a

                href="https://www.linkedin.com/in/ajithkumar-c2002/"

                target="_blank"

                rel="noreferrer"

                aria-label="LinkedIn"

              >

                <FaLinkedin />

              </a>

              <span className="location">

                <MapPin size={16} /> Madurai, Tamil Nadu

              </span>

            </div>

          </div>



          <div className="hero-visual">

            <div className="orbit orbit-one" />

            <div className="orbit orbit-two" />

            <div className="code-card">

              <div className="code-header">

                <span /><span /><span />

                <small>developer.py</small>

              </div>

              <div className="code-body">

                <p><span className="code-purple">class</span> Developer:</p>

                <p className="indent">

                  name = <span className="code-green">"Ajithkumar"</span>

                </p>

                <p className="indent">

                  role = <span className="code-green">"Full Stack"</span>

                </p>

                <p className="indent">

                  skills = [

                </p>

                <p className="indent double">

                  <span className="code-orange">"Python"</span>,

                </p>

                <p className="indent double">

                  <span className="code-orange">"Django"</span>,

                </p>

                <p className="indent double">

                  <span className="code-orange">"React"</span>

                </p>

                <p className="indent">]</p>

                <p className="code-comment">

                  # Always learning...

                </p>

              </div>

              <div className="code-footer">

                <Code2 size={15} /> Building something useful

              </div>

            </div>

            {/* <div className="floating-badge badge-python">Python</div> */}

            {/* <div className="floating-badge badge-react">React.js</div> */}

            {/* <div className="floating-badge badge-django">Django REST</div> */}

          </div>



          <a className="scroll-hint" href="#about">

            <span /> Scroll to explore

          </a>

        </section>



        <section className="section about-section" id="about">

          <div className="section-heading">

            <p className="section-label">01 — ABOUT ME</p>

            <h2>Building with <span>purpose.</span></h2>

          </div>



          <div className="about-grid">

            <div className="about-copy">

              <p>

                I'm a Computer Science postgraduate and web developer

                interested in building practical, user-friendly

                applications using modern technologies.

              </p>

              <p>

                My experience includes CRM-based web application

                development. I work with backend APIs, database

                integration and frontend development.

              </p>

              <p>

                I'm continuously learning and improving my skills

                by building real-world projects.

              </p>

              <a className="text-link" href="#contact">

                Let's connect <ArrowUpRight size={17} />

              </a>

            </div>



            <div className="about-facts">

              <div className="fact-card">

                <span className="fact-icon"><Code2 /></span>

                <h3>Full Stack</h3>

                <p>Frontend and backend development</p>

              </div>

              <div className="fact-card">

                <span className="fact-icon"><FaGithub /></span>

                <h3>Project Driven</h3>

                <p>Learning through hands-on projects</p>

              </div>

              <div className="fact-card">

                <span className="fact-icon"><MapPin /></span>

                <h3>Based in India</h3>

                <p>Madurai, Tamil Nadu</p>

              </div>

              <div className="fact-card">

                <span className="fact-icon"><Mail /></span>

                <h3>Open to Work</h3>

                <p>Developer opportunities</p>

              </div>

            </div>

          </div>

        </section>



        <section className="section skills-section" id="skills">

          <div className="section-heading">

            <p className="section-label">02 — MY TOOLKIT</p>

            <h2>Skills & <span>technologies.</span></h2>

            <p className="section-subtitle">

              Technologies I use and continue to develop my skills in.

            </p>

          </div>



          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div className="skill-card" key={skill}>

                <span className="skill-index">

                  {String(index + 1).padStart(2, "0")}

                </span>

                <span>{skill}</span>

                <ArrowUpRight size={16} className="skill-arrow" />

              </div>

            ))}

          </div>

        </section>



        <section className="section projects-section" id="projects">

          <div className="section-heading">

            <p className="section-label">03 — SELECTED WORK</p>

            <h2>Projects I've <span>worked on.</span></h2>

            <p className="section-subtitle">

              A selection of applications built or currently in development.

            </p>

          </div>



          <div className="projects-grid">

            {projects.map((project) => (

              <article className="project-card" key={project.number}>

                <div className="project-top">

                  <span className="project-number">{project.number}</span>

                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    aria-label={`GitHub for ${project.title}`}

                  >

                    <ArrowUpRight />

                  </a>

                </div>

                <div className="project-icon"><Code2 size={27} /></div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>{tech}</span>

                  ))}

                </div>

                <a

                  className="project-link"

                  href={project.github}

                  target="_blank"

                  rel="noreferrer"

                >

                  View GitHub <FaGithub size={16} />

                </a>

              </article>

            ))}

          </div>

        </section>



        <section className="section contact-section" id="contact">

          <div className="contact-panel">

            <p className="section-label">04 — GET IN TOUCH</p>

            <h2>Have a project in <span>mind?</span></h2>

            <p>

              I'm interested in developer opportunities and meaningful

              projects. Feel free to reach out.

            </p>

            <a className="button primary" href="mailto:ajithkumarc03cs@gmail.com">

              Send Me an Email <Mail size={18} />

            </a>

            <div className="contact-socials">

              <a

                href="https://github.com/ajithkumarc03cs"

                target="_blank"

                rel="noreferrer"

              >

              <FaGithub size={18} />GitHub

              </a>

              <a

                href="https://www.linkedin.com/in/ajithkumar-c2002/"

                target="_blank"

                rel="noreferrer"

              >

                <FaLinkedin size={18} /> LinkedIn

              </a>

            </div>

          </div>

        </section>

      </main>



      <footer className="footer">

        <a className="logo" href="#home">AK<span>.</span></a>

        <p>Designed & built by Ajithkumar C.</p>

        <a href="#home">Back to top ↑</a>

      </footer>

    </>

  );

}
