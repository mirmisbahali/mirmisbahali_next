import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsPage({
  frontmatter: { title, date, cover_image, tags },
  slug,
  content,
}) {
  return (
    <>
<div className="container mt-5">
<Link href="/">
          <a className="btn btn-outline-secondary"><FontAwesomeIcon icon={faArrowLeft} /> Back</a>
        </Link>
</div>
      <div className="container mt-5">
      
        <div className="row">
          <div className="col-lg-8">
            <article>
              <header className="mb-4">
                <h1 className="fw-bolder mb-1">{title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {date}
                </div>

                {tags.map((i, index) => {
                  return (
                    <a
                      key={index}
                      className="badge mx-1 bg-secondary text-decoration-none link-light"
                      href="#"
                    >
                      {i}
                    </a>
                  );
                })}
              </header>

              <Image src={cover_image} alt={title} width="720" height="720" layout="responsive" objectFit="contain" />

              <section
                className="mb-5"
                dangerouslySetInnerHTML={{ __html: marked(content) }}
              ></section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
