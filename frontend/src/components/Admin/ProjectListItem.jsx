/* eslint-disable react/prop-types */
import React, { useState } from "react";
import EditProjects from "./EditProjects";

function ProjectListItem({ setRefresh, project, handleDelete }) {
  const [editModal, setEditModal] = useState(false);

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <div className="flex justify-between mt-20 text-gray-400">
      <div className="font-normal px-3 pt-0 pb-3 ">{project.project_name}</div>
      <div className="flex flex-col">
        <div className="font-normal italic px-3 pt-0 pb-3 ">
          catégorie : {project.name}
        </div>
      </div>
      <div className="font-normal px-3 pt-0 pb-20">
        <img
          className="md:w-[20vw] md:h-[40vh] w-[50vw] h-[10vh]"
          src={project.project_image}
          alt="project"
        />
      </div>
      <div className="rounded-md h-[5vh] mb-1 bg-black">
        <div className="flex flex-col">
          <button
            onClick={() => handleEditModal()}
            className="text-white p-2 "
            type="button"
          >
            Modifier
          </button>
          <button
            onClick={() => handleDelete(project.id)}
            className="text-white p-2 rounded-md bg-black "
            type="submit"
          >
            Supprimer
          </button>
        </div>
      </div>
      {editModal ? (
        <EditProjects
          setRefresh={setRefresh}
          setEditModal={setEditModal}
          project={project}
        />
      ) : null}
    </div>
  );
}

export default ProjectListItem;
