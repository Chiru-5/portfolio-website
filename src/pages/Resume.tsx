import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa6";
import "./Resume.css";

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <div className="resume-actions no-print">
        <Link to="/" className="resume-back-btn">
          <FaArrowLeft /> Back to Portfolio
        </Link>
        <button onClick={handlePrint} className="resume-download-btn">
          <FaDownload /> Print / Save PDF
        </button>
      </div>

      <div className="resume-card">
        {/* Header */}
        <header className="resume-header">
          <h1>Chiru Chandan</h1>
          <p className="resume-role">Software Developer</p>
          <div className="resume-contact-bar">
            <a href="mailto:mandavallichiruchandan@gmail.com">
              <FaEnvelope /> mandavallichiruchandan@gmail.com
            </a>
            <a href="tel:+918143217671">
              <FaPhone /> +91-8143217671
            </a>
            <a href="https://github.com/Chiru-5" target="_blank" rel="noreferrer">
              <FaGithub /> github.com/Chiru-5
            </a>
            <a href="https://www.linkedin.com/in/chiruchandan/" target="_blank" rel="noreferrer">
              <FaLinkedin /> linkedin.com/in/chiruchandan
            </a>
          </div>
        </header>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="resume-skills-grid">
            <div>
              <strong>Languages:</strong> Java, JavaScript, C++, Python, HTML, SQL
            </div>
            <div>
              <strong>Frameworks & Libraries:</strong> Spring Boot, Spring Security, React.js
            </div>
            <div>
              <strong>Tools & Cloud:</strong> Docker, Apache Kafka, gRPC, PostgreSQL, MySQL, Git, GitHub, Maven, Postman, Figma
            </div>
            <div>
              <strong>Core CS & Concepts:</strong> Data Structures & Algorithms, OOP, Microservices, REST APIs, Unit & Integration Testing (JUnit 5)
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Hewlett Packard Enterprise Software Engineering Job Simulation (Virtual)</h3>
              <span className="resume-date">Aug 2026</span>
            </div>
            <ul>
              <li>Wrote a technical proposal for a RESTful web service to manage employee records efficiently.</li>
              <li>Built a web server application using Java Spring Boot to accept and respond to HTTP requests and JSON data payloads.</li>
              <li>Developed and executed comprehensive unit tests to evaluate and optimize Spring Boot application performance.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>Key Projects</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>
                Patient Management System | <a href="https://github.com/Chiru-5/Patient-Management" target="_blank" rel="noreferrer">GitHub</a>
              </h3>
              <span className="resume-date">Apr 2026 – May 2026</span>
            </div>
            <ul>
              <li>Built a 5-service healthcare backend to manage patient records, authentication, billing, and analytics using microservices architecture.</li>
              <li>Automated patient onboarding by triggering billing account creation via gRPC and analytics events via Apache Kafka.</li>
              <li>Secured 5+ REST APIs with JWT and Spring Security, validating workflows using JUnit 5 integration testing.</li>
              <li><strong>Tech Used:</strong> Java, Spring Boot, Spring Security, gRPC, Kafka, PostgreSQL, Docker, JUnit 5</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>
                LawEZY – AI Legal Assistance Platform | <a href="https://github.com/Chiru-5/LawEzy" target="_blank" rel="noreferrer">GitHub</a>
              </h3>
              <span className="resume-date">Aug 2025 – Sept 2025</span>
            </div>
            <ul>
              <li>Developed a legal-tech platform connecting clients with lawyers via AI-assisted queries, appointment scheduling, and case tracking.</li>
              <li>Implemented real-time chat and secure document sharing to streamline lawyer-client communication.</li>
              <li>Built REST APIs with JWT authentication for lawyer matching and appointment workflows.</li>
              <li><strong>Tech Used:</strong> HTML, CSS, JavaScript, React.js, MongoDB, REST APIs, JWT, Postman</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>
                E-Commerce Platform Backend | <a href="https://github.com/Chiru-5/ecommerce" target="_blank" rel="noreferrer">GitHub</a>
              </h3>
              <span className="resume-date">2025</span>
            </div>
            <ul>
              <li>Developed a scalable backend using Spring Boot for customer, product, cart, and order management.</li>
              <li>Architected layered Controller-Service-Repository patterns with Spring Data JPA, Hibernate, and MySQL.</li>
              <li><strong>Tech Used:</strong> Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, H2, REST APIs, Maven</li>
            </ul>
          </div>
        </section>

        {/* Training & Certifications */}
        <section className="resume-section">
          <h2>Certifications & Achievements</h2>
          <ul className="resume-cert-list">
            <li><strong>Postman API Fundamentals Student Expert</strong> — Postman (Mar 2026)</li>
            <li><strong>Java Programming (Self-Paced)</strong> — GeeksforGeeks (Jan 2026)</li>
            <li><strong>Linux Mastery: From Basic to Advance</strong> — GeeksforGeeks (Nov 2025)</li>
            <li><strong>Responsive Web Design</strong> — freeCodeCamp (Nov 2023)</li>
            <li><strong>Competitive Problem Solving:</strong> Solved 200+ Data Structures & Algorithms problems across LeetCode and platforms.</li>
          </ul>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Lovely Professional University (Phagwara, Punjab)</h3>
              <span className="resume-date">Aug 2023 – Expected 2027</span>
            </div>
            <p>Bachelor of Technology — Computer Science and Engineering (CGPA: 7.15)</p>
          </div>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Tirumala Educational Institute (Andhra Pradesh)</h3>
              <span className="resume-date">2020 – 2023</span>
            </div>
            <p>Intermediate (98%) | Matriculation (98%)</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
