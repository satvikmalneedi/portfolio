import { useEffect, useRef } from "react";

function MatrixEffect() {
    const canvasRef = useRef(null);
    const dropsRef = useRef([]);
    const intervalRef = useRef(null);
    const ctxRef = useRef(null);

    const initializeCanvas = () => {
        const canvas = canvasRef.current;
        ctxRef.current = canvas.getContext("2d");
        const ctx = ctxRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = Math.floor(canvas.width / 20);
        dropsRef.current = Array(columns).fill(0);

        ctx.fillStyle = "rgba(13, 17, 23, 1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawMatrix = () => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;

        ctx.fillStyle = "rgba(13, 17, 23, 0.4)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 75%)`;
        ctx.font = "20px font-mona";

        const drops = dropsRef.current;

        for (let i = 0; i < drops.length; i++) {
            const text = Math.random() > 0.5 ? '0' : '1';
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };

    useEffect(() => {
        initializeCanvas();

        let rafId;
        const resizeHandler = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(initializeCanvas);
        };
        window.addEventListener("resize", resizeHandler);

        const timeout = setTimeout(() => {
            intervalRef.current = setInterval(drawMatrix, 50);
        }, 5000);

        const handleVisibility = () => {
            if (document.hidden) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            } else if (!intervalRef.current) {
                intervalRef.current = setInterval(drawMatrix, 50);
            }
        };
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            clearTimeout(timeout);
            clearInterval(intervalRef.current);
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resizeHandler);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
}

export default MatrixEffect;
