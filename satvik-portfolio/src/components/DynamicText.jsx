import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

const words = [
    "Computer Engineering Student at Georgia Tech.",
    "Software Developer.",
    "Computer Engineer.",
    "Tech Enthusiast.",
    "Learner.",
];

function DynamicText() {
    const [animationCancel, setAnimationCancel] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationCancel(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    const baseClass =
        "absolute font-mona bottom-0 flex items-center justify-center text-white select-none " +
        "lg:h-[calc(95vh-4rem)] lg:w-[25%] lg:pl-24 lg:pb-10 lg:text-[4.5vw] " +
        "h-[25vh] w-full mb-10 text-[7vw] text-center";

    const animateClass = animationCancel
        ? baseClass
        : baseClass + " animate-delay-[5500ms] lg:animate-fade-right animate-fade-up";

    return (
        <div className={animateClass} style={{ textShadow: animationCancel ? '0 0 2px #fff' : '0 0 3px #fff' }}>
            <Typewriter
                words={words}
                loop={true}
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={4000}
            />
        </div>
    );
}

export default DynamicText;
