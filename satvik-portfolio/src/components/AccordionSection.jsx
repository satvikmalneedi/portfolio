import { useState, memo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const AccordionSection = memo(function AccordionSection({
  location,
  mode,
  date,
  position,
  description,
  link,
  imageSrc,
  tags = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col justify-center my-2 w-[90vw]">
      <button
        className="w-full rounded-md border border-gray-400 sm:text-lg text-[2.6vw] bg-[#0f172a] shadow-md px-4 py-2 text-left hover:scale-[1.01] transition-transform duration-200 ease-in-out"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex space-x-2 text-white font-medium items-center">
              <p>{location}</p>
              <span className="text-gray-300">|</span>
              <FaLocationDot className="text-gray-300" />
              <p>{mode}</p>
            </div>
            <p className="text-md text-gray-200">{position}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-md text-white font-medium">{date}</p>
            <motion.div
              animate={{ rotate: isOpen ? 540 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-1 w-4 h-4"
            >
              <IoMdArrowDropdown className="w-full h-full text-white" />
            </motion.div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 1000 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden px-4 pt-2"
          >
            <div className="bg-gradient-to-br from-slate-600 rounded-md p-4 flex flex-col md:flex-row gap-4 md:gap-8 text-white">
              <div className="md:w-2/3 w-full items-center flex flex-col justify-center gap-2">
                <p className="text-lg leading-relaxed text-center">{description}</p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {tags.map(({ label }, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-gray-600 rounded-full px-4 py-1 text-md font-medium"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-1/3 w-full flex flex-col items-center justify-start gap-2 sm:text-base text-[3.5vw]">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-300 hover:underline"
                >
                  <FiExternalLink className="text-xl" />
                  <span>{link}</span>
                </a>
                <img
                  src={imageSrc}
                  alt="Job Visual"
                  className="w-full max-w-[150px] rounded-md mt-2"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default AccordionSection;