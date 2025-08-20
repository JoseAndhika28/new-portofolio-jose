import { div } from "three/tsl";
import Navbar from "../components/Navbar";

export default function Portofolio() {
  return (
    <div className="ContainerPortofolio text-white">
      <Navbar />
      <div className="PortofolioContent grid grid-3 gap-5 items-center justify-center h-screen">
        <div className="h-110 w-80 bg-[#222831] rounded-2xl ring-1 ring-gray-700">
          <div className="flex flex-col items-center">
            <img
              src="/images/e-demokrasi.png"
              alt="Portofolio Image"
              className="rounded-t-2xl"
            />
            <h3 className="text-4xl font-bold items-center mr-20 mt-5">
              E-Demokrasi
            </h3>
            <p className="text-sm mt-2 ml-4 mr-4 items-center text-[#B8CFCE]">
              This is the UI/UX design for E-Democracy, a website for collecting
              election votes powered by blockchain technology. It ensures
              transparency in the voting process, addressing the concerns that
              people have long questioned. This project was created for my first
              hackathon at WHCL.
            </p>
            <a href="" className="mt-2 transition duration-300 ease-in-out">
              <i className="bi bi-box-arrow-up-right text-xl mr-65"></i>
            </a>
            <div className="Badge flex justify-center items-center space-x-4 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
