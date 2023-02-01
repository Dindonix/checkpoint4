import React from "react";

const { VITE_BACKEND_URL } = import.meta.env;

export default function ProjectCard({ projects }) {
  console.warn(projects.project_image);
  return (
    <div className="flex justify-center grid-cols-3">
      <div className="flex flex-col justify-items-center w-[60vw] rounded-xl bg-[#2b2b2b] m-3 p-4">
        <p className="font-bold text-white w-28 pb-2">
          {projects.project_name}
        </p>
        <img
          className="w-[35vw] h-[22vw] border-4 border-violet"
          src={`${VITE_BACKEND_URL}/uploads/${projects.project_image}`}
          alt="project"
        />
      </div>
    </div>
  );
}
