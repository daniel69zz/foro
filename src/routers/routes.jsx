// src/routers/routes.jsx
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { ThreadPage } from "../pages/ThreadPage";
import { ThreadContentPage } from "../pages/ThreadContentPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export function MyRoutes() {
  return (
    <Routes>
      {/* Rutas que usan el layout con navbar/sidebar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<ThreadPage tipo="c1" />} />
        <Route path="/development" element={<ThreadPage tipo="c2" />} />
        <Route path="/gaming" element={<ThreadPage tipo="c3" />} />
        <Route path="/general" element={<ThreadPage tipo="c4" />} />
        <Route path="/learning" element={<ThreadPage tipo="c5" />} />
        <Route path="/threads/:id" element={<ThreadContentPage />} />
      </Route>

      {/* Rutas sin navbar (auth pages) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
