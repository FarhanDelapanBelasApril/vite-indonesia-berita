/* eslint-disable no-unused-vars */
import loadable from "@loadable/component";

export const PageLayout = loadable(() =>
  import("../components/layouts/PageLayout")
);
export const AppLayout = loadable(() =>
  import("../components/layouts/AppLayout")
);

export const Loading = loadable(() => import("../components/Loading"));

export const CardItemsTitle = loadable(() =>
  import("../pages/berita/modules/components/cardItems/CardItemsTitle")
);

export const CardItemsDescription = loadable(() =>
  import("../pages/berita/modules/components/cardItems/CardItemsDescription")
);

export const CardItemsImage = loadable(() =>
  import("../pages/berita/modules/components/cardItems/CardItemsImage")
);
