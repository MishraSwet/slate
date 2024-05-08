import  { useDraw }  from "./hooks/useDraw"

export default function App() {

  const { canvasRef } = useDraw()

  return <div className="h-screen w-screen flex justify-center items-center">
    <canvas ref={canvasRef} width={900} height={900} className="border-2 border-black-200"/>
  </div>

}