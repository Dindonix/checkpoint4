/* eslint-disable */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUserContext } from "../../context/userContext";
import ProjectListItem from "../components/Admin/ProjectListItem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import me from "../assets/NoPrincess2.jpg";
import Navbar from "../components/Navbar";
import AddProject from "../components/Admin/AddProject"

function Admin() {
  const [projects, setProjects] = useState([]);
  const { token } = useCurrentUserContext();
  const [refresh, setRefresh] = useState(false);

  const [editPostModal, setEditPostModal] = useState(false);
  const navigate = useNavigate();

  const handleEditPostModal = () => {
    setEditPostModal(!editPostModal);
  };

  useEffect(() => {
    if (!token) navigate("/login");
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result);
        setRefresh(false);
        console.warn(result);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.warn(token);
    axios
      .delete(`http://localhost:5000/api/projects/${id}`, requestOptions)
      .then((response) => {
        setRefresh(true);
        console.warn(id);
        toast(" ✅ Projet supprimé !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error(err);
        toast(" ❌ Une erreur s'est produite !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light",
        });
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className=" flex">
        <div className="flex-grow">
          <div className=" dark:bg-gray-900 overflow-y-auto">
              <Navbar />
            <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col z-0 w-full  bg-gray-900 ">
              <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                <p className="px-3 border-b-2 border-blue-500 text-blue-500 pb-1.5">
                  Projets
                </p>
                <div className=" w-16 flex justify-center rounded-md shadow-lg mb-1  ">
                  <button
                    onClick={() => handleEditPostModal()}
                    className="text-white  rounded-md ml-6 md:w-[7vw] bg-black p-2 flex"
                    type="button"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:p-7 flex flex-wrap">
              <div className="w-full text-left">
                {editPostModal && (
                  <AddProject
                    setRefresh={setRefresh}
                    setEditModal={setEditPostModal}
                  />
                )}
                {projects.map((project) => (
                  <ProjectListItem
                    key={project.id}
                    project={project}
                    handleDelete={handleDelete}
                    setRefresh={setRefresh}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
