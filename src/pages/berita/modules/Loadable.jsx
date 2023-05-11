import loadable from "@loadable/component";

export const SkeletonNewsCardItems = loadable(() =>
  import("./components/skeletons/SkeletonNewsCardItems")
);

export const CardItems = loadable(() =>
  import("./components/cardItems/CardItems")
);

export const CardHeading = loadable(() =>
  import("./components/cardHeading/CardHeading")
);

export const CardHeadingTitle = loadable(() =>
  import("./components/cardHeading/CardHeadingTitle")
);

export const CardHeadingBreadcrumb = loadable(() =>
  import("./components/cardHeading/CardHeadingBreadcrumb")
);

export const SearchNews = loadable(() =>
  import("./components/searchNews/SearchNews")
);

export const SearchNewsResults = loadable(() =>
  import("./components/searchNewsResults/SearchNewsResults")
);

export const PaginationNews = loadable(() =>
  import("./components/paginationNews/PaginationNews")
);
