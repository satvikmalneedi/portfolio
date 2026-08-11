import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "motion/react";
import { IoPeopleSharp, IoCodeSlashOutline,IoHardwareChipOutline} from "react-icons/io5";
import { GiLogicGateNor, GiCpu } from "react-icons/gi";
import { SiArduino, SiC, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
        SiAssemblyscript, SiNextdotjs, SiMongodb, SiVite, SiJupyter } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { FaJava, FaPython, FaReact, FaGitAlt, FaUbuntu, FaDocker, FaGithub, FaRegClock, FaMicrochip } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { LuBicepsFlexed, LuBrain, LuSpeech } from "react-icons/lu";
import { TbCircuitBattery } from "react-icons/tb";


import Card from "../components/Card";

function Skills() {
    return (
        <>
        <div id="Skills" className="font-mona relative h-[100vh] w-full bg-palette6 flex items-center justify-center overflow-hidden pt-8">
            <motion.h1 initial={{opacity: 0, y: 40}} whileInView = {{ opacity: 1, y: 0}} transition = {{duration: 0.6, ease: "easeInOut"}} viewport={{once: true}} className="absolute top-[.5vw] text-[10vh] font-mona font-bold gradient-rgb z-50 mt-10 rounded-sm px-2"
            style = {{WebkitTextStroke: '2px #ffffff', WebkitTextStrokeWidth: '0.75px', textShadow: '0 0 6px'}}>
                My Skills
            </motion.h1>
            <motion.h2 initial={{opacity: 0, y: -40}} whileInView = {{ opacity: .10, y: 0}} transition = {{duration: 1, ease: "easeInOut"}} viewport={{once: true}} className="absolute text-center font-mona lg:text-[25vw] text-[75vw] text-white italic opacity-5 whitespace-nowrap select-none">
                Expertise
            </motion.h2>

            <motion.div initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 1, ease: "easeInOut"}} viewport = {{once: true}}className="relative z-20 w-full">
                <Swiper
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={1.3}
                    navigation= {true}
                    loop={false}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 50,
                        depth: 200,
                        slideShadows: false
                    }}
                    className="swiper-container h</SwiperSlide>-[100vh] items-center"
                >
                    <SwiperSlide className="ghost-slide pt-10 my-10">
                        <Card color1="#0a0a0a" color2="#0f172a" title="Chip Design" description="Specialized in digital and physical chip design, with expertise in RTL design, verification, and silicon implementation. Driven to develop optimized semiconductor solutions that balance performance, power, and area." image= {<IoHardwareChipOutline className = "size-[25vw]"/>}   techStack={[
                            { name: "Digital Logic Design", icon: <GiLogicGateNor className = "text-red-700" /> },
                            { name: "FPGA Development", icon: <FaMicrochip className = "text-teal-500"/> },
                            { name: "HDLs (SystemVerilog, VHDL)", icon: <FaComputer className = "text-green-400"/> },
                            { name: "Computer Architecture", icon: <SiC className = "text-blue-700"/> },
                            { name: "VLSI Fundamentals", icon: <GiCpu className = "text-yellow-400"/> },
                            { name: "UVM/Verification Methodologies", icon: <GiCpu className = "text-yellow-400"/> },
                            { name: "Cadence Virtuoso", icon: <GiCpu className = "text-yellow-400"/> },
                          ]}/>
                    </SwiperSlide>
                    <SwiperSlide className="ghost-slide pt-10 my-10">
                        <Card color1="#0a0a0a" color2="#0f172a" title="Software Engineering" description="I program to build software systems that are efficient, 
                        reliable, and maintainable. Whether it's backend development, frontend experiences, or data processing, I focus on writing clean, functional code to 
                        solve real problems." image= {<IoCodeSlashOutline className = "size-[25vw]"/>}   techStack={[
                            { name: "Java", icon: <FaJava className = "text-[#5382a1]" /> },
                            { name: "Python", icon: <FaPython className = "text-white"/> },
                            { name: "JavaScript", icon: <SiJavascript className = "text-yellow-400"/> },
                            { name: "HTML", icon: <SiHtml5 className = "text-orange-600"/> },
                            { name: "CSS", icon: <SiCss3 className = "text-blue-600"/> },
                            { name: "C", icon: <SiC className = "text-blue-700"/> },
                            { name: "Assembly", icon: <SiAssemblyscript className = "text-green-400"/> },
                            { name: "React", icon: <FaReact className = "text-blue-400"/> },
                            { name: "Tailwind CSS", icon: <SiTailwindcss className = "text-blue-400"/> },
                            { name: "Next.js", icon: <SiNextdotjs className = "text-white"/> },
                            { name: "MongoDB", icon: <SiMongodb className = "text-green-800"/> },
                            { name: "Git", icon: <FaGitAlt className = "text-orange-400"/> },
                            { name: "Vite", icon: <SiVite className = "text-[#BA36FF]"/> },
                            { name: "Ubuntu", icon: <FaUbuntu className = "text-orange-500"/> },
                            { name: "Docker", icon: <FaDocker className = "text-blue-600"/> },
                            { name: "Jupyter", icon: <SiJupyter className = "text-orange-400"/> },
                            { name: "Github", icon: <FaGithub className = "text-gray-700"/> },
                          ]}/>
                    </SwiperSlide>
                    <SwiperSlide className="ghost-slide pt-10 my-10">
                        <Card color1="#0a0a0a" color2="#0f172a" title="Interpersonal" description="Above all, what matters most 
                        to me is applying my skills in a collaborative environment. I value the ability to lead 
                        and listen simultaneously—building ideas not just from myself, but alongside my peers. 
                        It’s a crucial part of how I work and grow." image= {<IoPeopleSharp className = "size-[25vw]"/>}   techStack={[
                            { name: "Leadership", icon: <LuSpeech className = "text-lime-600" /> },
                            { name: "Collaboration", icon: <FaPeopleCarryBox className = "text-indigo-400"/> },
                            { name: "Critical Thinking", icon: <LuBrain className = "text-rose-700"/> },
                            { name: "Adapability", icon: <LuBicepsFlexed className = "text-amber-800"/> },
                            { name: "Communication", icon: <MdPhoneInTalk className = "text-blue-600"/> },
                            { name: "Punctuality", icon: <FaRegClock className = "text-yellow-400"/> },
                          ]}/>
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
        <style>
            {`
            .swiper-button-next,
            .swiper-button-prev {
                color: white !important;
            }
            `}
        </style>
        </>
    );
}

export default Skills;