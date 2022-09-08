import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faGit,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading">Computer Aided Design</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <Image
              src="/assets/img/fusion360.svg"
              alt="Fusion 360"
              width="42"
              height="42"
            />
          </li>
          <li className="list-inline-item">
            <Image
              src="/assets/img/solidworks.svg"
              alt="Solidworks"
              width="42"
              height="42"
            />
          </li>
        </ul>
        <div className="subheading mt-5">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <Image
              src="/assets/img/c.svg"
              alt="C Language"
              width="42"
              height="42"
            />
          </li>
          <li className="list-inline-item">
            <Image
              src="/assets/img/cpp.svg"
              alt="C++ Language"
              width="42"
              height="42"
            />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faPython} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJsSquare} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faGit} />
          </li>
        </ul>
        <div className="subheading mt-5">Web Technologies</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faCss3} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faWordpress} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
