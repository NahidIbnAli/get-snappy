import { RouterProvider } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import { routes } from "./Router/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
