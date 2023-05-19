import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

export const Home = loadable(
  async () =>
    await pMinDelay(import(/* webpackPrefetch: true */ "../pages/Home.jsx"))
);

export const Berita = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/Berita.jsx")
    )
);

export const BeritaTerkini = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaTerkini.jsx")
    )
);

export const BeritaTerbaru = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaTerbaru")
    )
);

export const BeritaNasional = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaNasional")
    )
);

export const BeritaInternasional = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaInternasional")
    )
);

export const BeritaTeknologi = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaTeknologi")
    )
);

export const BeritaLifestyle = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaLifestyle")
    )
);

export const BeritaOlahraga = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaOlahraga")
    )
);

export const BeritaEkonomi = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaEkonomi")
    )
);

export const BeritaEnterpreneur = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaEntrepreneur")
    )
);

export const BeritaKesehatan = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaKesehatan.jsx")
    )
);

export const BeritaMarket = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaMarket.jsx")
    )
);

export const BeritaSyariah = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaSyariah.jsx")
    )
);
