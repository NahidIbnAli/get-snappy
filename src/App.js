import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
