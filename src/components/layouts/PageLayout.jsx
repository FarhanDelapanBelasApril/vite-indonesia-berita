/* eslint-disable no-unused-vars */
import loadable from "@loadable/component";

const HeaderNav = loadable(() => import("../HeaderNav/HeaderNav"));
const Footer = loadable(() => import("../Footer/Footer"));

/* eslint-disable react/prop-types */
export default function PageLayout({ children }) {
  return (
    <>
      <HeaderNav />
      <main className="container-fluid position-relative d-block w-100">
        {children}
      </main>
    </>
  );
}
