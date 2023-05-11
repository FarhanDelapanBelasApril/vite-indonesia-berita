/* eslint-disable no-unused-vars */
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Loading from "../components/Loading";

// PageComponentModule Code Splitting
export const Home = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/Home/Home"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const Berita = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/Berita"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const BeritaTerbaru = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaTerbaru"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const BeritaNasional = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaNasional"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const BeritaInternasional = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaInternasional"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const BeritaTeknologi = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaTeknologi"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const BeritaLifestyle = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaLifestyle"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
export const BeritaOlahraga = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaOlahraga"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaEkonomi = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaEkonomi"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);

export const BeritaEnterpreneur = loadable(
  async () =>
    await pMinDelay(
      import(/* webpackPrefetch: true */ "../pages/berita/BeritaEntrepreneur"),
      1000
    ),
  {
    fallback: <Loading />,
  }
);
