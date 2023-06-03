import Image from "./components/Image";
import { Mainhome } from "./components/Mainhome";

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Mainhome />,


  },
  {
    path: "/resume",
    element: <Image />,

  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      
      {/* <Contact /> */}
    </div>
  );
}

export default App;
