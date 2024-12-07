import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AiPage from "./pages/AiPage";
import EngineerPage from "./pages/EngineerPage";
import SiencePage from "./pages/SiencePage";
import SyphorPage from "./pages/SyphorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/A" element={<AiPage />} />
      <Route path="/E" element={<EngineerPage />} />
      <Route path="/S" element={<SiencePage />} />
      <Route path="/C" element={<SyphorPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
