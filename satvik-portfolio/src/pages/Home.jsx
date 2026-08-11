import { motion } from 'framer-motion';
import NavBar from '../components/NavBar.jsx'
import DynamicText from '../components/DynamicText.jsx'
import LaptopModel from '../components/LaptopModel.jsx';
import MatrixEffect from '../components/MatrixEffect.jsx';
import Resume from "../assets/Resume - Satvik Malneedi.pdf";


function Home() {

    return(
        <div id="Home" className="relative h-screen w-auto bg-palette6">
            <MatrixEffect className="font-terminal" />
            <DynamicText />
            <LaptopModel />
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate = {{opacity: 1, x: 0, transition: {delay: 5, duration: 0.6, ease: "easeInOut"}}}
                whileHover = {{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
                className="bg-black border-white border-[.5px] absolute text-white right-0 bottom-0 mr-5 mb-5 w-[7vw] min-w-20 h-[5vh] hidden sm:flex items-center justify-center font-mona rounded-md"
                onClick={() => window.open(Resume, "_blank")}
                style={{ cursor: "pointer" }}
            >
                Resume
            </motion.div>
            <NavBar />
        </div>
    );
}
export default Home