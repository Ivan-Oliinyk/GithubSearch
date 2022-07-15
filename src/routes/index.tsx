import { Navigate, Route, Routes } from "react-router-dom";
import FavoritesPage from "../pages/FavoritesPage";
import HomePage from "../pages/HomePage";
import config from "../config";

const {
  routing: { BASE, HOME, FAVORITES },
} = config;

const Routing = () => {
  return (
    <Routes>
      <Route path={BASE} element={<Navigate to={HOME} replace />} />
      <Route path={HOME} element={<HomePage />} />
      <Route path={FAVORITES} element={<FavoritesPage />} />
    </Routes>
  );
};

export default Routing;
