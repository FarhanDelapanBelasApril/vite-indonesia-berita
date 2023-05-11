import LatestNewsFeatured from "./LatestNewsFeatured";
import NasionalNewsFeatured from "./NasionalNewsFeatured";
import { InternasionalNewsFeatured } from "./InternasionalNewsFeatured";

export default function NewsFeatureCardItems() {
  return (
    <>
      <LatestNewsFeatured />
      <NasionalNewsFeatured />
      <InternasionalNewsFeatured />
    </>
  );
}
