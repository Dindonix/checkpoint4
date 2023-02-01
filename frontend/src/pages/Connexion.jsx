import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCurrentUserContext } from "../../context/userContext";

function Connexion() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    /* submit mail and password, post to back and get the result
  if ok -> navigate to the home page
  */
    if (email && password) {
      // on appelle le back
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/admin");
        })

        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="bg-gray-700 h-[100vh]">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center  "
      >
        <h1 className=" text-white items-center content-center justify-center text-3xl mb-16 md:mb-14 mt-44">
          Connexion
        </h1>
        <div className=" flex md:w-3/5 justify-center ">
          <input
            type="email"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            placeholder="Entrer votre email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            className="bg-gray-200 text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <br />
        <div className="flex  justify-center md:w-3/5">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Entrer votre mot de passe"
            className="bg-gray-200  text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-black mt-10 md:mt-2 text-white m-3 py-1 px-4 rounded-lg shadow-lg h-10 w-32 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
        >
          Connexion
        </button>
      </form>
      <div>{errorMessage}</div>
    </div>
  );
}

export default Connexion;
