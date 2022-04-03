import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailView from "../pages/detailView";
import Home from "../pages/home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-view/:id" element={<DetailView />} />
    </Routes>
  );
};

export default AppRoutes;
