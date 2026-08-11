import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import EcoRoute from "../assets/EcoRoute.png"
import FolioWebsite from "../assets/FolioWebsite.png"
import RiscvEmulator from "../assets/riscvemulator.png"


const projects = [
  {
    title: "RISC-V Python Emulator",
    description: "A Python-based RISC-V emulator supporting .s files, .data/.text segments, directives, and xN register naming. Includes an interactive debugger and CLI tools for assembling, running, and inspecting programs.",
    image: RiscvEmulator,
    link: "https://github.com/satvikmalneedi/riscv-emulator"
  },
  {
    title: "Folio Website",
    description: "This folio website, which utilizes React and Tailwind CSS and libraries such as Motion and Three.js to create a responsive and visually appealing design. It showcases my projects, skills, and experience in a user-friendly format.",
    image: FolioWebsite,
    link: "https://github.com/satvikmalneedi/portfolio"
  },
  {
    title: "EcoRoute",
    description: "A website that pulls from several different APIs such as the Google Maps API and the Carbon Interface API in order to calculate the carbon emmissions of a route.",
    image: EcoRoute,
    link: "https://github.com/satvikmalneedi/energyhacks"
  },
];

const n = projects.length;

// Build scroll range pairs for each project outside the component so the
// hook call count is always the same (Rules of Hooks).
function buildRanges() {
  return projects.map((_, index) => {
    const isFirst = index === 0;
    const isLast = index === n - 1;

    // image opacity range
    const imgIn = index / n;
    const imgOut = (index + 1) / n;
    const imgInputRange = isFirst
      ? [imgOut - 0.1, imgOut]
      : isLast
      ? [imgIn, imgIn + 0.1]
      : [imgIn, imgIn + 0.1, imgOut - 0.1, imgOut];
    const imgOutputRange = isFirst
      ? [1, 0]
      : isLast
      ? [0, 1]
      : [0, 1, 1, 0];

    // text opacity range
    const fadeIn = Math.max(0, (index - 0.1) / n);
    const startFull = index / n;
    const endFull = isLast ? 1 : (index + 0.8) / n;
    const fadeOut = isLast ? 1 : Math.min(1, (index + 0.9) / n);
    const txtInputRange = isFirst
      ? [endFull, fadeOut]
      : isLast
      ? [fadeIn, startFull]
      : [fadeIn, startFull, endFull, fadeOut];
    const txtOutputRange = isFirst
      ? [1, 0]
      : isLast
      ? [0, 1]
      : [0, 1, 1, 0];

    return { imgInputRange, imgOutputRange, txtInputRange, txtOutputRange };
  });
}

const ranges = buildRanges();

// Per-project sub-component so hooks are called unconditionally at the top level.
function ProjectImage({ project, index, scrollYProgress, isActive }) {
  const { imgInputRange, imgOutputRange } = ranges[index];
  const opacity = useTransform(scrollYProgress, imgInputRange, imgOutputRange);
  return (
    <motion.div
      className={`absolute mb-3 md:w-4/5 md:mt-0 max-w-[50vh] md:max-w-none mt-36 shadow-2xl hover:scale-105 hover:rotate-[-2deg] hover:cursor-pointer active:scale-100 transition-transform duration-300 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{ opacity }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg border-4 border-gray-200"
        loading="lazy"
      />
      <div className="absolute inset-0 opacity-20 rounded-lg" />
    </motion.div>
  );
}

function ProjectText({ project, index, scrollYProgress, isActive }) {
  const { txtInputRange, txtOutputRange } = ranges[index];
  const opacity = useTransform(scrollYProgress, txtInputRange, txtOutputRange);
  return (
    <motion.div
      className={`absolute text-white md:mt-0 -mt-20 px-6 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{ opacity }}
    >
      <h2 className="text-4xl font-bold">{project.title}</h2>
      <p className="text-lg text-gray-300 mt-4 max-w-md">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-palette2 hover:bg-palette3 hover:scale-105 hover:cursor-pointer active:scale-90 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
      >
        Open Project
      </a>
    </motion.div>
  );
}

function Projects() {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const projectIndex = Math.min(n - 1, Math.floor(value * n));
      setActiveProject(projectIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} id="Projects" className="font-mona relative bg-palette6" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 flex md:flex-row flex-col h-screen items-center justify-between px-12">
        <motion.h1 
          initial={{opacity: 0, y: 40}} 
          whileInView={{ opacity: 1, y: 0}} 
          transition={{duration: 0.6, ease: "easeInOut"}} 
          viewport={{once: true}} 
          className="absolute top-[.5vw] text-[10vh] font-mona w-[95vw] text-center font-bold gradient-rgb z-50 mt-10 rounded-sm px-2"
          style={{WebkitTextStroke: '2px #ffffff', WebkitTextStrokeWidth: '0.75px', textShadow: '0 0 6px'}}
        >
          Projects
        </motion.h1>

        <div className="md:w-3/5 w-full relative h-full flex items-center justify-center">
          {projects.map((project, index) => (
            <ProjectImage
              key={project.title}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
              isActive={activeProject === index}
            />
          ))}
        </div>

        <div className="md:w-2/5 w-full h-full flex flex-col justify-center">
          {projects.map((project, index) => (
            <ProjectText
              key={project.title}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
              isActive={activeProject === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
