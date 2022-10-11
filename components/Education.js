import React from "react";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Bachelor of Engineering</h3>
            <div className="subheading mb-3">Osmania University</div>
            <div>Mechanical Engineering</div>
            <p>GPA: 7.85/10</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2018 - 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Class 12</h3>
            <div className="subheading mb-3">
              Board of Intermediate Education, Telangana, India
            </div>
            <p>Percentage: 84.3%</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2017 - 2018</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Class 10</h3>
            <div className="subheading mb-3">
              Board of Secondary Education, Telangana, India
            </div>
            <p>GPA: 8.5/10</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2015 - 2016</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
