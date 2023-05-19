/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageLayout, AppLayout } from "./modules/app.module";
import {
  Home,
  Berita,
  BeritaTerbaru,
  BeritaTerkini,
  BeritaEkonomi,
  BeritaEnterpreneur,
  BeritaInternasional,
  BeritaNasional,
  BeritaLifestyle,
  BeritaOlahraga,
  BeritaTeknologi,
  BeritaKesehatan,
  BeritaSyariah,
  BeritaMarket,
} from "./modules/page.module";

export default function App() {
  return (
    <>
      <PageLayout>
        <AppLayout>
          <Routes>
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita-terkini" element={<BeritaTerkini />} />
            <Route path="/berita-terbaru" element={<BeritaTerbaru />} />
            <Route path="/berita-terkini" element={<BeritaTerkini />} />
            <Route path="/berita-nasional" element={<BeritaNasional />} />
            <Route
              path="/berita-internasional"
              element={<BeritaInternasional />}
            />
            <Route path="/berita-teknologi" element={<BeritaTeknologi />} />
            <Route path="/berita-lifestyle" element={<BeritaLifestyle />} />
            <Route path="/berita-kesehatan" element={<BeritaKesehatan />} />
            <Route path="/berita-olahraga" element={<BeritaOlahraga />} />
            <Route path="/berita-market" element={<BeritaMarket />} />
            <Route
              path="/berita-entrepreneur"
              element={<BeritaEnterpreneur />}
            />
            <Route path="/berita-ekonomi" element={<BeritaEkonomi />} />
            <Route path="/berita-syariah" element={<BeritaSyariah />} />
            <Route path="*" element={<Navigate to="/berita" replace />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AppLayout>
      </PageLayout>
    </>
  );
}
