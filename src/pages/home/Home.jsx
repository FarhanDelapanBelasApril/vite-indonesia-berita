/* eslint-disable no-unused-vars */
import loadable from "@loadable/component";
import { Helmet } from "react-helmet";
import { useGetAllNews } from "../../hooks/useNewsCnbcHooks";

const WelcomeCardItems = loadable(() =>
  import("./modules/components/WelcomeCardItems/WelcomeCardItems")
);

const NewsFeatureCardItems = loadable(() =>
  import("./modules/components/NewsFeatureCardItems/NewsFeatureCardItems")
);

const RecomendedNewsCardItems = loadable(() =>
  import(
    "../berita/modules/components/RecomendedNewsCardItems/RecomendedNewsCardItems"
  )
);

export const RenderedData = () => {
  return (
    <>
      <WelcomeCardItems />
      <NewsFeatureCardItems />
      <RecomendedNewsCardItems
        fetching={useGetAllNews}
        title={"Rekomendasi Untuk Anda"}
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
