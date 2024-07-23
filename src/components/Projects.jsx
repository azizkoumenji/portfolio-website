import Card from "./project/Card";

function Projects() {
  return (
    <div id="projects">
      <h1 className="text-white font-semibold text-5xl">Projects</h1>
      <div className="flex justify-around my-16 flex-wrap">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
