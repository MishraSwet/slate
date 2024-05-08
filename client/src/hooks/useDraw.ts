import { useEffect, useRef, useState } from "react"

//useDraw takes a function as a parameter which returns void and takes an Draw object as the function signature here we have destructured the Draw object

export const useDraw = (onDraw: ({ ctx, currPoint, prevPoint }: Draw) => void) => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null | Point>(null);

    const [mouseDown, setMouseDown] = useState(false);
    const onMouseDown = () => setMouseDown(true);
    const onMouseUp = () => setMouseDown(false)
    
    useEffect(() => {

        const handler = (e: MouseEvent) => {
            const currPoint = Points(e);
            const ctx = canvasRef.current?.getContext('2d');
            if (!currPoint || !ctx)
                return;
            onDraw ({ ctx, currPoint, prevPoint: prevPoint.current });
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
        canvasRef.current?.addEventListener('mousemove', handler);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            canvasRef.current?.removeEventListener('mousemove',handler);
            window.removeEventListener('mouseup',onMouseUp);
        }
    }, [onDraw])

    return { canvasRef,onMouseDown };
}