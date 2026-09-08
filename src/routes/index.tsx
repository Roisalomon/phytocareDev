import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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
   ⏳ Overlay de chargement unique
   Affiché au moins 2s à CHAQUE changement de route (et au premier
   chargement du site), quelle que soit la vitesse réelle du réseau.
============================= */
const LOADING_MIN_DURATION = 2000;

const RouteLoadingOverlay: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), LOADING_MIN_DURATION);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!visible) return null;
  return <Loading duration={LOADING_MIN_DURATION} />;
};



/* =============================
   🚀 ROUTEUR PRINCIPAL
============================= */
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteLoadingOverlay />
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
