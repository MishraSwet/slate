import { useEffect, useRef } from "react"

//useDraw takes a function as a parameter which returns void and takes an Draw object as the function signature here we have destructured the Draw object

export const useDraw = (onDraw:({ctx,currPoint,prevPoint}:Draw)=>void) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const handler = (e: MouseEvent) => {
            const currentPoint = Points(e);
            const ctx = canvasRef.current?.getContext('2d');
            if (!currentPoint || !ctx)
                return;
        }
        
        const Points=(e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas)
                return

            const origin = canvas.getBoundingClientRect();
            const x = e.clientX - origin.x;
            const y = e.clientY - origin.y;
            return { x, y };
        }
        canvasRef.current?.addEventListener('mousemove',handler)
    }, [])

    return { canvasRef };
}