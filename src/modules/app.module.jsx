import loadable from "@loadable/component";

// App Component Module
export const NewsSkeletonCardItems = loadable(() =>
  import("../modules/components/NewsSkeleton/NewsSkeletonCardItems")
);
export const NewsPagination = loadable(() =>
  import("../modules/components/NewsPagination/NewsPagination")
);
export const NewsCardItems = loadable(() =>
  import("../modules/components/NewsCardItems/NewsCardItems")
);
export const NewsSearch = loadable(() =>
  import("../modules/components/NewsSearch/NewsSearch")
);
export const NewsSearchResults = loadable(() =>
  import("../modules/components/NewSearchResults/NewsSearchResults")
);
export const NewsHeading = loadable(() =>
  import("../modules/components/NewsHeading/NewsHeading")
);

export const NewsCardHeadingTitle = loadable(() =>
  import("../modules/components/NewsHeading/NewsHeadingTitle")
);

export const NewsRecomended = loadable(() =>
  import("../modules/components/NewsRecomended/NewsRecomended")
);

// App Layouts Module
export const PageLayout = loadable(() =>
  import("../components/layouts/PageLayout")
);
export const AppLayout = loadable(() =>
  import("../components/layouts/AppLayout")
);

export const Loading = loadable(() => import("../components/Loading"));
