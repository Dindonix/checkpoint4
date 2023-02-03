/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import close from "../../assets/croix.png";
import { useCurrentUserContext } from "../../../context/userContext";
import "react-toastify/dist/ReactToastify.css";

export default function EditVehicles({ setRefresh, setEditModal }) {
  const [dataProject, setDataProject] = useState({});

  const { token } = useCurrentUserContext();

  const handleEditModal = () => {
    setEditModal(false);
  };

  const onChange = (e) => {
    setDataProject({
      ...dataProject,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const body = JSON.stringify(dataProject);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
      redirect: "follow",
    };

    fetch(`http://localhost:5000/api/projects`, requestOptions)
      .then((response) => response.text())
      .then(() => {
        setRefresh(true);
        console.warn(body);
        toast(" ✅ Projet ajouté !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light",
        });
        handleEditModal();
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="bg-gray-700 fixed top-0 left-0 z-10 h-screen w-screen  overflow-hidden">
        <button
          onClick={() => {
            handleEditModal();
          }}
          type="button"
        >
          <img className="ml-7 mt-5 w-7 h-7" src={close} alt="Close" />
        </button>
        <h1 className="text-[40px] text-white font-bold text-center pb-8 mt-8">
          Ajouter un projet
        </h1>
        <form
          onSubmit={onSubmit}
          method="PUT"
          className="grid grid-cols-2 justify-center  items-center"
        >
          <label className="flex w-1/2 ml-[25vw] flex-col text-xl mb-2">
            Titre :
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="project_name"
              value={dataProject.project_name}
              onChange={onChange}
            />
          </label>
          <label className="flex w-1/2 flex-col text-xl mb-2">
            Image:
            <input
              className="w-80 rounded-md border border-primary py-2 pl-4 text-lg placeholder-black"
              type="text"
              name="project_image"
              value={dataProject.project_image}
              onChange={onChange}
            />
          </label>
          <label className="flex w-[20vw] flex-col ml-[25vw] text-xl mb-2">
            Catégorie :
            <select
              name="category_id"
              className="rounded h-10 "
              id="category_id"
              onChange={onChange}
            >
              <option value="">choisissez une catégorie</option>
              <option value="1">Divertissement</option>
              <option value="2">Qualité de vie</option>
              <option value="3">Communication</option>
            </select>
          </label>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-black text-white py-2 px-[2.5rem] mr-[30vw] rounded-[20px] w-44 text-md mb-4"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
