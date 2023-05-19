/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import {
  useGetAllNews,
  useGetNasionalNews,
  useGetInternasionalNews,
} from "../hooks/NewsCnnHook";
import loadable from "@loadable/component";

const WelcomeCardItems = loadable(() =>
  import("../modules/components/WelcomeCardItems/WelcomeCardItems")
);

const NewsFeatureItems = loadable(() =>
  import("../modules/components/NewsFeatureItems/NewsFeatureItems")
);
const NewsRecomended = loadable(() =>
  import("../modules/components/NewsRecomended/NewsRecomended")
);

export const RenderedData = () => {
  return (
    <>
      <Welcome />
      <NewsItemList />
      <NewsRecomended title="Rekomendasi Untuk Anda" />
    </>
  );
};

export const Welcome = () => <WelcomeCardItems />;

export const NewsItemList = () => {
  return (
    <>
      <NewsFeatureItems
        title="Berita Terkini"
        link="/berita-terkini"
        dataFetching={useGetAllNews}
      />
      <NewsFeatureItems
        title="Dari Dalam Negeri"
        link="/berita-nasional"
        dataFetching={useGetNasionalNews}
      />
      <NewsFeatureItems
        title="Dari Luar Negeri"
        link="/berita-internasional"
        dataFetching={useGetInternasionalNews}
      />
    </>
  );
};

export default function Home() {
  let pageTitle =
    "Indonesia Berita Temukan Berita Hari ini di indonesia dan Internasional";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link
          rel="canonical"
          href="https://vite-indonesia-berita.netlify.app/"
        />
        <meta name="type" property="og:type" content="article" />
        <meta
          name="title"
          property="og:title"
          content="Indonesia Berita Temukan Berita Hari ini di indonesia dan Internasional"
        />
        <meta
          name="description"
          property="og:description"
          content="Indonesia Berita Temukan Berita Hari ini di indonesia dan Internasional"
        />
      </Helmet>

      <RenderedData />
    </>
  );
}
