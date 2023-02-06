import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((result) => {
        setProject(result);
      });
  }, []);

  return (
    <div className="bg-gray-700 h-[100vh]">
      <Navbar />
      <div className="bg-gray-700 md:flex md:flex-row md:pl-8 md:justify-center flex-col h-[100vh]">
        {project.map((projects) => (
          <ProjectCard key={projects.id} projects={projects} />
        ))}
      </div>
      <div className="flex bg-gray-700 justify-center md:h-[0vh] h-[100vh]" />
    </div>
  );
}
