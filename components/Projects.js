import ProjectCard from "./ProjectCard";
const Projects = ({ props }) => {
  return (
    <section className=" resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5"></h2>
        <div className="row">
          <h2 className="mb-5"> Projects</h2>
          {props.projects.map((i) => (
          <div className="col">
            <ProjectCard frontmatter={i.frontmatter} slug={i.slug}  />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

