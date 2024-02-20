import { BrowserRouter } from "react-router-dom"

import AllRoutes from "./pages/Routes"


function App() {


  return (
    <>
    <div className="h-full w-full dark:bg-transparent  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
      {/* Radial gradient for the container to give a faded look */}
      
      <div className="h-full w-full fixed top-0 left-0 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-20"></div>
     <BrowserRouter>
     <AllRoutes/>
     </BrowserRouter>

    </div>

    </>
  
  )
}

export default App
