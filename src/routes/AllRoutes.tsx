import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../auth/login";
import SignUp from "../auth/signUp";
import Resetpsw from "../auth/ResetPassword";
import { Landing } from "../pages/landing";
import Users from "../admin/components/Users";
import Historias from "../admin/components/Stories";
import Layout from "../admin/layouts/Layout";
import Archive from "../admin/components/Archive";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/reset-password" element={<Resetpsw />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="historias" element={<Historias />} />
        <Route path="archive" element={<Archive />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
