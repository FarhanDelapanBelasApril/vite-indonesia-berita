/* eslint-disable react/prop-types */
import loadable from "@loadable/component";

const FooterContainer = loadable(() => import("./FooterContainer"));
const FooterCopyright = loadable(() => import("./FooterCopyright"));

export default function Footer() {
  const currentDate = new Date().getFullYear();
  const getYear = currentDate;
  let copyright;

  if (getYear !== 2023) {
    copyright = `© 2023 - ${getYear} Indonesia Berita `;
  } else {
    copyright = `© ${getYear} Indonesia Berita `;
  }

  return (
    <FooterContainer>
      <FooterCopyright datetime={copyright} />
    </FooterContainer>
  );
}
