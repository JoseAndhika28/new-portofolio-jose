import Image from "next/image";
import Model3D from "./components/Model3D";
import "bootstrap-icons/font/bootstrap-icons.css";
import TypingText from "./components/TypingText";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen mt-20 md:mt-10 gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 lg:pl-12">
          <div className="heroContent text-center md:text-left">
            {/* Social Icons */}
            <div className="connectWithme flex justify-center md:justify-start gap-5 mb-4">
              <a
                href="https://github.com/JoseAndhika28"
                target="_blank"
                className="bi bi-github text-xl sm:text-2xl transition hover:-translate-y-1"
              ></a>
              <a
                href="https://www.linkedin.com/in/jose-andhika-putra-581b88275/"
                target="_blank"
                className="bi bi-linkedin text-xl sm:text-2xl transition hover:-translate-y-1"
              ></a>
              <a
                href="https://www.instagram.com/joseportofolio_/"
                target="_blank"
                className="bi bi-instagram text-xl sm:text-2xl transition hover:-translate-y-1"
              ></a>
              <a
                href="https://x.com/joseandhika_"
                target="_blank"
                className="bi bi-twitter-x text-xl sm:text-2xl transition hover:-translate-y-1"
              ></a>
              <a
                href="mailto:joseputra238@gmail.com"
                target="_blank"
                className="bi bi-envelope-fill text-xl sm:text-2xl transition hover:-translate-y-1"
              ></a>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hello there, I'm Jose.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mt-3">
              Freshman | System Information Student
            </p>

            <TypingText />
          </div>
        </div>

        {/* Right Model */}
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <Model3D />
        </div>
      </div>

      {/* Experience & Awards */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 min-h-screen mt-10">
        {/* Experience */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 md:pl-12">
          <h1 className="text-2xl sm:text-3xl font-bold">Experience</h1>
          <ul className="flex flex-col gap-4 mt-5">
            <li>
              <span className="text-base sm:text-lg font-semibold">
                2D Game Artist at Animator at PT. Teknomadya Solusi Digital
              </span>
              <p className="text-sm sm:text-base">Juni 2024 - November 2024</p>
            </li>
            <li>
              <span className="text-base sm:text-lg font-semibold">
                Quality Assurance For HRIS Application, CV. Elite Aluminium
              </span>
              <p className="text-sm sm:text-base">July 2025 - Present</p>
            </li>
            <li>
              <span className="text-base sm:text-lg font-semibold">
                UI/UX Designer – WCHL, 2025
              </span>
              <p className="text-sm sm:text-base">July 2025 - August 2025</p>
            </li>
          </ul>
        </div>

        {/* Awards */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold">Awards</h1>
          <ul className="flex flex-col gap-4 mt-5">
            <li>
              <span className="text-base sm:text-lg font-semibold">
                1st Place – UI/UX Design Competition, Regional Selection
              </span>
              <p className="text-sm sm:text-base">June 2023</p>
            </li>
            <li>
              <span className="text-base sm:text-lg font-semibold">
                Qualified for National Selection Stage – WCHL Hackathon 2025
              </span>
              <p className="text-sm sm:text-base">August 2025</p>
            </li>
            <li>
              <span className="text-base sm:text-lg font-semibold">
                Space For My Awards Soon 💪💪💪
              </span>
              <p className="text-sm sm:text-base">Present</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
