import { Outlet } from "react-router";
import Login from "../pages/Login";
import AuthenticationService from "../services/AuthenticationService";

const PrivateRoute = () => {
  const isAuth = AuthenticationService.is;
  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoute;
