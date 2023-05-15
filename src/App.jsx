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
            <Route path="/berita">
              <Route path="market" element={<BeritaMarket />} />
              <Route path="syariah" element={<BeritaSyariah />} />
              <Route path="kesehatan" element={<BeritaKesehatan />} />
              <Route path="entrepreneur" element={<BeritaEnterpreneur />} />
              <Route path="ekonomi" element={<BeritaEkonomi />} />
              <Route path="olahraga" element={<BeritaOlahraga />} />
              <Route path="lifestyle" element={<BeritaLifestyle />} />
              <Route path="teknologi" element={<BeritaTeknologi />} />
              <Route path="nasional" element={<BeritaNasional />} />
              <Route path="internasional" element={<BeritaInternasional />} />
              <Route path="terbaru" element={<BeritaTerbaru />} />
              <Route path="terkini" element={<BeritaTerkini />} />
              <Route index element={<Berita />} />
            </Route>
            <Route path="*" element={<Navigate to="/berita" replace />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AppLayout>
      </PageLayout>
    </>
  );
}
