import { memo } from "react";
import Tilt from "react-parallax-tilt";

const Card = memo(function Card({ color1, color2, title, image, description, techStack = []}) {
    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={2000} glareEnable={true} glareMaxOpacity={0}>
            <div 
                style={{ background: `linear-gradient(180deg, ${color1}, ${color2})` }}
                className="w-[90%] max-w-5xl mx-auto rounded-2xl p-10 sm:p-5 md:p-3 shadow-2xl text-white border-white border-4"
            >
                <div className="flex flex-col lg:flex-row sm:pt-5 items-center gap-4 sm:gap-5 md:gap-6">
                    <div className="lg:w-3/5 flex flex-col justify-center text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h1>
                        <p className="text-sm sm:text-base md:text-lg" style = {{textShadow: '0 0 2px'}}>{description}</p>
                    </div>
                    
                    <div className="lg:w-2/5 flex h-auto items-center justify-center mt-4 lg:mt-0">{image}</div>
                    <div className = "xl:flex hidden flex-wrap gap-3 justify-center">
                        {techStack.map(({ name, icon }, idx) => (
                        <span
                            key={idx}
                            className="flex navbar-elements items-center gap-2 w-auto bg-white bg-opacity-10 text-white text-xs px-3 py-1.5 rounded-full border border-white border-opacity-20"
                        >
                            {name}
                            <span className="text-xl">{icon}</span>
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </Tilt>
    );
});

export default Card;