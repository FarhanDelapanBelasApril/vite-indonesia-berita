/* eslint-disable no-unused-vars */
import {
  useGetNasionalNews,
  useGetInternasionalNews,
} from "../hooks/useNewsCnnHooks";
import { Helmet } from "react-helmet";
import { useGetAllNews } from "../hooks/useNewsCnnHooks";
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
        link="/berita/terkini"
        dataFetching={useGetAllNews}
      />
      <NewsFeatureItems
        title="Dari Dalam Negeri"
        link="/berita/nasional"
        dataFetching={useGetNasionalNews}
      />
      <NewsFeatureItems
        title="Dari Luar Negeri"
        link="/berita/internasional"
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
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="type" property="og:type" content="article" />
        <meta
          name="title"
          property="og:title"
          content="Berita olahraga terbaru di indonesia dan internasional yang sedang berlangsung"
        />
        <meta
          name="description"
          property="og:description"
          content="Berita olahraga terbaru di indonesia dan internasional yang sedang berlangsung"
        />
      </Helmet>

      <RenderedData />
    </>
  );
}
