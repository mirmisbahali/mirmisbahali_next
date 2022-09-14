import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import Projects from "../components/Projects";

export default function Home(props) {
  return (
    <div id="page-top">
      <Sidebar />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Projects props={props} />
        
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join("projects"));

  // Get slug and frontmatter from projects
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      projects: projects,
    },
  };
}