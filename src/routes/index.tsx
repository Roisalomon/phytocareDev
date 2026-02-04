import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🧱 Layouts
import { AppLayout } from "../components/layouts/app"; // pour les pages publiques

// 💫 Loader
import Loading from "../components/Loading";

/* =============================
   🌍 PAGES PUBLIQUES
============================= */
const HomePage = lazy(() => import("../pages/app/home"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const CoursesPage = lazy(() => import("../pages/app/courses"));
const ContactPage = lazy(() => import("../pages/app/contact"));
const BlogPage = lazy(() => import("../pages/app/blog"));

/* =============================
   🚀 ROUTEUR PRINCIPAL
============================= */
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===================== PUBLIC ===================== */}
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/courses"
            element={
              <Suspense fallback={<Loading />}>
                <CoursesPage />
              </Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <Suspense fallback={<Loading />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loading />}>
                <BlogPage />
              </Suspense>
            }
          />



        </Route>


        {/* ===================== 404 ===================== */}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
