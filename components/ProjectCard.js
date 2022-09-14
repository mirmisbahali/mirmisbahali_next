const ProjectCard = ({ frontmatter, slug }) => {
  return (
    <div className="card">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img
          src={frontmatter.cover_image}
          className="img-fluid"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{frontmatter.title}</h5>
        <p className="card-text">{frontmatter.excerpt}</p>
        <a href={`/projects/${slug}`} className="btn btn-outline-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
