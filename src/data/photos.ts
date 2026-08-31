// High-quality photography sourced from the original Plama Projects
// media library (Panda Studio project shots + on-site construction photos),
// all sourced from the original site.

import interiorLivingWide from "@/assets/photos/interior-living-wide.jpg";
import kitchenPortrait from "@/assets/photos/kitchen-portrait.jpg";
import skylightDetail from "@/assets/photos/skylight-detail.jpg";
import diningPortrait from "@/assets/photos/dining-portrait.jpg";
import joineryArch from "@/assets/photos/joinery-arch.jpg";
import glassSkylightPortrait from "@/assets/photos/glass-skylight-portrait.jpg";
import kitchenIslandWide from "@/assets/photos/kitchen-island-wide.jpg";
import diningWide from "@/assets/photos/dining-wide.jpg";
import kitchenDarkPortrait from "@/assets/photos/kitchen-dark-portrait.jpg";
import livingWindowWide from "@/assets/photos/living-window-wide.jpg";
import bathroomPortrait from "@/assets/photos/bathroom-portrait.jpg";
import vanityWide from "@/assets/photos/vanity-wide.jpg";
import siteSteelFrame from "@/assets/photos/site-steel-frame.jpg";
import siteNewBuild from "@/assets/photos/site-new-build.jpg";
import siteFitout from "@/assets/photos/site-fitout.jpg";

export const photos = {
  interiorLivingWide,
  kitchenPortrait,
  skylightDetail,
  diningPortrait,
  joineryArch,
  glassSkylightPortrait,
  kitchenIslandWide,
  diningWide,
  kitchenDarkPortrait,
  livingWindowWide,
  bathroomPortrait,
  vanityWide,
  siteSteelFrame,
  siteNewBuild,
  siteFitout,
};

export type ServicePhotoSet = {
  hero: string;
  portrait: string;
  wide: string;
  faq: string;
};

export const servicePhotos: Record<string, ServicePhotoSet> = {
  structural: {
    hero: interiorLivingWide,
    portrait: siteSteelFrame,
    wide: siteNewBuild,
    faq: kitchenDarkPortrait,
  },
  civil: {
    hero: siteNewBuild,
    portrait: siteSteelFrame,
    wide: siteFitout,
    faq: siteNewBuild,
  },
  facade: {
    hero: skylightDetail,
    portrait: glassSkylightPortrait,
    wide: livingWindowWide,
    faq: glassSkylightPortrait,
  },
  hydraulic: {
    hero: vanityWide,
    portrait: bathroomPortrait,
    wide: vanityWide,
    faq: bathroomPortrait,
  },
  certificates: {
    hero: livingWindowWide,
    portrait: bathroomPortrait,
    wide: skylightDetail,
    faq: vanityWide,
  },
  marine: {
    hero: siteNewBuild,
    portrait: siteSteelFrame,
    wide: siteFitout,
    faq: siteSteelFrame,
  },
  "expert-reports": {
    hero: siteFitout,
    portrait: siteSteelFrame,
    wide: siteNewBuild,
    faq: joineryArch,
  },
  "project-management": {
    hero: kitchenIslandWide,
    portrait: kitchenPortrait,
    wide: diningWide,
    faq: diningPortrait,
  },
};

export const defaultServicePhotos: ServicePhotoSet = servicePhotos.structural;

/** Accreditation / award badges shown in the homepage hero marquee. */
export const accreditations = [
  { src: "/assets/accreditations/EAlogo.jpg", alt: "Engineers Australia" },
  { src: "/assets/accreditations/NERlogo.png", alt: "Registered on the National Engineering Register (NER)" },
  { src: "/assets/accreditations/APEC.jpg", alt: "APEC Registered Engineer" },
  { src: "/assets/accreditations/new-south-wales-nsw-government-fair-trading-vector-logo.png", alt: "NSW Fair Trading" },
  { src: "/assets/accreditations/award-badge-two-line-large.png", alt: "Award Badge" },
  { src: "/assets/accreditations/EAlogo.jpg", alt: "Engineers Australia (Repeated)" },
  { src: "/assets/accreditations/NERlogo.png", alt: "NER (Repeated)" },
  { src: "/assets/accreditations/APEC.jpg", alt: "APEC (Repeated)" },
];
