import React from "react";

const { VITE_BACKEND_URL } = import.meta.env;

export default function ProjectCard({ projects }) {
  return (
    <div className="flex justify-center mt-[11vh]">
      <div className="flex flex-col justify-items-center rounded-xl bg-blue m-3 p-4">
        <p className="font-bold text-white text-base w-28 pb-2">
          {projects.project_name}
        </p>
        <img
          className="w-[25vw] h-[22vw] border-4 border-violet"
          src={projects.project_image}
          // src={`${VITE_BACKEND_URL}/uploads/${projects.project_image}`}
          alt="project"
        />
        <p className="text-white mt-2 text-sm italic">
          Catégorie du projet : {projects.name}
        </p>
      </div>
    </div>
  );
}
