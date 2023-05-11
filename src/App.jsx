/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageLayout, AppLayout } from "./modules//loadableComponent";
import {
  Home,
  Berita,
  BeritaTerbaru,
  BeritaNasional,
  BeritaInternasional,
  BeritaTeknologi,
  BeritaLifestyle,
  BeritaOlahraga,
  BeritaEkonomi,
  BeritaEnterpreneur,
} from "./modules/pageComponentModule";

export default function App() {
  return (
    <>
      <PageLayout>
        <AppLayout>
          <Routes>
            <Route path="/berita">
              <Route path="entrepreneur" element={<BeritaEnterpreneur />} />
              <Route path="ekonomi" element={<BeritaEkonomi />} />
              <Route path="olahraga" element={<BeritaOlahraga />} />
              <Route path="lifestyle" element={<BeritaLifestyle />} />
              <Route path="teknologi" element={<BeritaTeknologi />} />
              <Route path="nasional" element={<BeritaNasional />} />
              <Route path="internasional" element={<BeritaInternasional />} />
              <Route path="terbaru" element={<BeritaTerbaru />} />
              <Route index element={<Berita />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AppLayout>
      </PageLayout>
    </>
  );
}
