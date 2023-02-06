/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import close from "../../assets/croix.png";
import { useCurrentUserContext } from "../../../context/userContext";
import "react-toastify/dist/ReactToastify.css";

export default function EditVehicles({ setRefresh, project, setEditModal }) {
  const [dataProject, setDataProject] = useState({
    ...project,
  });

  const { token } = useCurrentUserContext();

  const handleEditModal = () => {
    setEditModal(false);
  };

  const onChange = (e) => {
    console.warn(e.target.name, e.target.value);
    setDataProject({
      ...dataProject,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (project.project_name && project.name) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);
      const body = JSON.stringify(dataProject);
      console.warn(body);

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body,
        redirect: "follow",
      };

      fetch(`http://localhost:5000/api/projects/${project.id}`, requestOptions)
        .then((response) => response.text())
        .then((data) => {
          console.warn(data);
          setRefresh(true);
          toast.success(" ✅ Projet modifié !", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "light",
          });
          handleEditModal();
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="bg-gray-700 fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden">
        <button
          onClick={() => {
            handleEditModal();
          }}
          type="button"
        >
          <img className="ml-7 mt-5 w-7 h-7" src={close} alt="Close" />
        </button>
        <h1 className="text-[40px] text-white font-bold text-center pb-8 mt-8">
          Modifier projet
        </h1>
        <form
          onSubmit={onSubmit}
          method="PUT"
          className="  ml-[25%] md:ml-[40%]"
        >
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Titre :
            <input
              className="md:w-60 w-40 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="project_name"
              defaultValue={dataProject.project_name}
              onChange={onChange}
            />
          </label>
          <label className="flex md:w-[20vw] w-[47vw] flex-col text-sm md:text-xl mb-2">
            Catégorie :
            <select
              defaultValue={project.category_id}
              className="rounded h-12 md:w-[20vw] w-[41vw]"
              name="category_id"
              id="category_id"
              onChange={onChange}
            >
              <option value="">choisissez une catégorie</option>
              <option value="1">Divertissement</option>
              <option value="2">Qualité de vie</option>
              <option value="3">Communication</option>
            </select>
          </label>
          <div className=" mt-8">
            <button
              type="submit"
              className="bg-black text-white py-2 px-[2.5rem] rounded-[20px] w-44 text-md mb-4 md:ml-16"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
