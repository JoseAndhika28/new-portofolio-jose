import { div } from "three/tsl";
import Navbar from "../components/Navbar";

export default function Portofolio(){
    return(
        <div className="ContainerPortofolio text-white">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen mt-24">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4">My Portofolio</h1>
                <p className="text-lg sm:text-xl text-center">
                    This section is under construction. Stay tuned for my projects and achievements!
                </p>
            </div>
        </div>
    )
}