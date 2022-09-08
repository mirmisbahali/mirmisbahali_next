import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">Mir MIsbah Ali</h1>
          <p class="lead mt-5 mb-5">
            I a Mechanical Engineer specializing in Mechanical Design, Thermal
            Sciences, CAD and Mechatronics
          </p>
          <div class="social-icons">
            <a
              class="social-icon"
              href="https://linkedin.com/in/mirmisbahali"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              class="social-icon"
              href="https://github.com/mirmisbahali"
              target="_blank"
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
