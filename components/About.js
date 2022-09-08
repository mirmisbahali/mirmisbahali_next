import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">Mir MIsbah Ali</h1>
          <p className="lead mt-5 mb-5">
            I a Mechanical Engineer specializing in Mechanical Design, Thermal
            Sciences, CAD and Mechatronics
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://linkedin.com/in/mirmisbahali"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="social-icon"
              href="https://github.com/mirmisbahali"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
