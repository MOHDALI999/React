import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./component/Layout/RootLayout";
import DynamicTabs from "./component/NavBar/DynamicTabs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <DynamicTabs />,
        },
        {
          path: "about",
          element: <DynamicTabs />,
        },
        {
          path: "*",
          element: <DynamicTabs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
