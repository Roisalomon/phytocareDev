import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pour le scrool top automatique 
import ScrollToTop from "../pages/app/sub/use/ScrollToTop";


// 🧱 Layouts
import { AppLayout } from "../components/layouts/app"; // pour les pages publiques

// 💫 Loader
import Loading from "../components/Loading";

/* =============================
   🌍 PAGES PUBLIQUES
============================= */
const HomePage = lazy(() => import("../pages/app/home"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ProduitsPage = lazy(() => import("../pages/app/produits"));
const ContactPage = lazy(() => import("../pages/app/contact"));
const MaladiesPage = lazy(() => import("../pages/app/maladies"));
const ProposPage = lazy(() => import("../pages/app/propos"));
const ProduitPlusPage = lazy(() => import("../pages/app/produitPlus"));
const MaladiePlusPage = lazy(() => import("../pages/app/maladiePlus"));

/* =============================
   🚀 ROUTEUR PRINCIPAL
============================= */
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
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
            path="/Produits"
            element={
              <Suspense fallback={<Loading />}>
                <ProduitsPage />
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
            path="/Maladies"
            element={
              <Suspense fallback={<Loading />}>
                <MaladiesPage />
              </Suspense>
            }
          />

          <Route
            path="/Propos"
            element={
              <Suspense fallback={<Loading />}>
                <ProposPage />
              </Suspense>
            }
          />

          <Route
            path="/produitPlus/:id"
            element={
              <Suspense fallback={<Loading />}>
                <ProduitPlusPage />
              </Suspense>
            }
          />
          
          <Route
            path="/maladiePlus/:id"
            element={
              <Suspense fallback={<Loading />}>
                <MaladiePlusPage />
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
