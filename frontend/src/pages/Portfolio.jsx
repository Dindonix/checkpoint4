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
    <div className="bg-gray-700">
      <Navbar />
      <div className="bg-gray-700">
        {project.map((projects) => (
          <ProjectCard key={projects.id} projects={projects} />
        ))}
      </div>
    </div>
  );
}
