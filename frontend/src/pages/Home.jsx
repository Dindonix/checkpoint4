import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-700 h-[100vh]">
      <Navbar />
      <div className="flex flex-col text-center py-4 mt-20 justify-items-center justify-center h-[40vh]">
        <h1 className="text-white mt-[20vh]">
          Vous recherchez un développeur web ?
        </h1>
        <div className="m-auto">
          <p className="text-gray-400 mt-20 md:w-[40vw]">
            Cela tombe bien ! Après une carrière dans la restauration de luxe
            (brasseries et restaurants étoilés) puis des études de lettres
            modernes je me lance dans une reconversion dans un domaine qui m'a
            toujours intéressé : l'informatique. Etant actuellement en formation
            (React.js) je cherche activement une alternance ou un stage à partir
            de février 2023 🚀!
          </p>
        </div>
      </div>
    </div>
  );
}
