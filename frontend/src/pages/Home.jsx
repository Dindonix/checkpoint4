import Navbar from "../components/Navbar";
import scrollDown from "../assets/scroll-down.png";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <Navbar />
      <div className="flex flex-col text-center py-4 mt-20 justify-items-center justify-center h-[40vh]">
        <h1 className="text-white">Vous recherchez un développeur web ?</h1>
        <div className="m-auto">
          <p className="text-gray-400 mt-20 w-[40vw]">
            Cela tombe bien ! Après une carrière dans la restauration de luxe
            (brasseries et restaurants étoilés) puis des études de lettres
            modernes je me lance dans une reconversion dans un domaine qui m'a
            toujours intéressé : l'informatique. Etant actuellement en formation
            (React.js) je cherche activement une alternance ou un stage à partir
            de février 2023 🚀!
          </p>
        </div>
      </div>
      <div className="flex bg-gray-700 justify-center pt-24 h-[41vh]">
        <a href="#cv">
          <img src={scrollDown} alt="" />
        </a>
      </div>
    </div>
  );
}
