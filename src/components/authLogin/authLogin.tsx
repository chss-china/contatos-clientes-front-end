import { Routes, Route, Navigate, Outlet } from "react-router-dom";
export function AuthLogin() {
  let myToken = localStorage.getItem("@@TokenClient");
  return <>{myToken ? <Navigate to="/dashboard" /> : <Outlet />}</>;
}
