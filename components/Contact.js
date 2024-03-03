import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
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

function Contact() {
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Contact Me</h2>
          <form>
            <div className="form-group my-3">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="your_email@example.com" />
            </div>
            <div className="form-group my-3">
              <label for="email-subjecct">Email Subject</label>
              <input type="text" className="form-control" id="email-subjecct" placeholder="Email Subject" />
            </div>
            <div className="form-group my-3">
              <label for="message">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact