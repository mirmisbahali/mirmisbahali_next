import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
export default function Home() {
  return (
    <div id="page-top">
      <Sidebar />
      <div className="container-fluid p-0">
        <About />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
      </div>
    </div>
  );
}
