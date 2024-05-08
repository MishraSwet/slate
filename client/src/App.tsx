import  { useDraw }  from "./hooks/useDraw"

export default function App() {

  const { canvasRef, onMouseDown } = useDraw(onDraw)
  
  function onDraw({ ctx, prevPoint, currPoint }: Draw) {

    const startPoint = prevPoint ?? currPoint;
    const linecolor = "black";
    const linewidth = 5;

    ctx.beginPath();
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = linecolor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currPoint.x, currPoint.y);
    ctx.stroke();
  }

  return <div className="h-screen w-screen flex justify-center items-center">
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      width={900}
      height={900}
      className="border-2 border-black-200" />
  </div>

}