import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Loading from "../components/Loading.jsx";

export const Home = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/Home.jsx"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const Berita = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/Berita.jsx"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaTerkini = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaTerkini.jsx"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaTerbaru = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaTerbaru"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaNasional = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaNasional"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaInternasional = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaInternasional"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaTeknologi = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaTeknologi"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaLifestyle = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaLifestyle"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaOlahraga = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaOlahraga"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaEkonomi = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaEkonomi"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaEnterpreneur = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaEntrepreneur"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaKesehatan = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaKesehatan.jsx"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaMarket = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaMarket.jsx"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaSyariah = loadable(
  async () =>
    await pMinDelay(
      /* webpackPrefetch: true */ import("../pages/berita/BeritaSyariah.jsx"),
      2000
    ),
  {
    fallback: <Loading />,
  }
);
