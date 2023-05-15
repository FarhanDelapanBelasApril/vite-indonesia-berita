/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NewsHeading, NewsCardHeadingTitle } from "../../modules/app.module";
import {
  useGetAllNews,
  useGetEntrepreneurNews,
  useGetLatestNews,
  useGetLifestyleNews,
  useGetMarketNews,
  useGetSyariahNews,
} from "../../hooks/useNewsCnbcHooks";
import {
  useGetNasionalNews,
  useGetInternasionalNews,
  useGetTeknologiNews,
  useGetEkonomiNews,
  useGetOlahragaNews,
  useGetGayaHidupNews,
} from "../../hooks/useNewsCnnHooks";

import NewsKategoriCardItems from "../../modules/components/NewsKategoriCardItems/NewsKategoriCardItems";

export const RenderedData = () => {
  return (
    <>
      <NewsHeading>
        <NewsCardHeadingTitle title="Pilihan Berita Lainnya" />
        <p>Temukan berita-berita lainnya dari semua kategori berita</p>
      </NewsHeading>

      <div className="row justify-content-center g-3 py-3">
        <NewsKategoriCardItems
          dataFetching={useGetAllNews}
          title="Berita Terkini"
          desc="Berita peristiwa terkini di Indonesia dan Internasional yang sedang
          berlangsung"
          link={"/berita/terkini"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetLatestNews}
          title="Berita Terbaru"
          desc="Berita peristiwa terbaru di Indonesia dan Internasional yang sedang berlangsung"
          link={"/berita/terbaru"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetNasionalNews}
          title="Berita Nasional"
          desc="Berita terkini dari isu dalam negeri yang sedang berlangsung"
          link={"/berita/nasional"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetInternasionalNews}
          title="Berita Internasional"
          desc="Berita terkini dari isu internasional yang sedang berlangsung"
          link={"/berita/internasional"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetEkonomiNews}
          title="Berita Ekonomi"
          desc=" Berita terkini dari isu Ekonomi di indonesia dan Internasional yang
          sedang berlangsung"
          link={"/berita/ekonomi"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetEntrepreneurNews}
          title="Berita Entrepreneur"
          desc=" Berita terkini dari isu entrepreneur di indonesia dan Internasional yang
          sedang berlangsung"
          link={"/berita/entrepreneur"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetMarketNews}
          title="Berita Market"
          desc=" Berita terkini dari isu market / penjualan di indonesia dan Internasional yang
          sedang berlangsung"
          link={"/berita/market"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetTeknologiNews}
          title="Berita Teknologi"
          desc=" Berita terkini dari isu teknologi di indonesia dan Internasional yang
          sedang berlangsung"
          link={"/berita/teknologi"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetOlahragaNews}
          title="Berita Olahraga"
          desc="Berita terkini dari isu olahraga di Indonesia dan Internasional yang  sedang berlangsung"
          link={"/berita/olahraga"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetLifestyleNews}
          title="Berita Lifestyle"
          desc="Berita terkini dari isu lifestyle di Indonesia dan Internasional yang  sedang berlangsung"
          link={"/berita/lifestyle"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetGayaHidupNews}
          title="Berita Kesehatan"
          desc="Berita terkini dari isu kesehatan di Indonesia dan Internasional yang sedang berlangsung"
          link={"/berita/kesehatan"}
        />
        <NewsKategoriCardItems
          dataFetching={useGetSyariahNews}
          title="Berita Syariah"
          desc="Berita terkini dari isu syariah di Indonesia dan Internasional yang sedang berlangsung"
          link={"/berita/syariah"}
        />
      </div>
    </>
  );
};

export default function Berita() {
  // Set title
  let pageTitle = "Pilihan Berita Lainnya";

  // Search & Set title
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  if (searchQuery.get("search")) {
    if (searchResult?.length) {
      pageTitle = `${searchResult?.length} Hasil pencarian ${searchQuery.get(
        "search"
      )}`;
      document.title = pageTitle;
    } else {
      pageTitle = `Pencarian tidak ditemukan`;
      document.title = pageTitle;
    }
  }

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
          content="Berita peristiwa terbaru di Indonesia dan luar negeri sedang berlangsung"
        />
        <meta
          name="description"
          property="og:description"
          content="Berita peristiwa terbaru di Indonesia dan luar negeri sedang berlangsung"
        />
      </Helmet>
      <RenderedData />
    </>
  );
}
