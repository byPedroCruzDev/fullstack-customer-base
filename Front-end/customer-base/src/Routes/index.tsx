import { Navigate, Route, Routes } from "react-router-dom";
import { CreateUser } from "../Pages/createUser";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateUser />} />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
};
export default MainRoutes;
