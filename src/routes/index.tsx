import { createFileRoute } from "@tanstack/react-router";
import {
  Header,
  Hero,
  Services,
  Blog,
  ClinicInfo,
  Contact,
  Reviews,
  Footer,
} from "@/components/clinic/sections";

const TITLE = "PRERNA CLINIC — Gynaecology & ENT in Nepalgunj";
const DESCRIPTION =
  "Gynaecology, obstetrics and ENT care at PRERNA CLINIC, beside City College Of Management, Pasang Lhamu Marg, Nepalgunj. Rated 5.0 on Google. Closes 7:00 PM.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "PRERNA CLINIC",
  description: "Gynaecology, obstetrics and ENT (otolaryngology) clinic in Nepalgunj, Nepal.",
  medicalSpecialty: ["Gynecologic", "Otolaryngologic"],
  telephone: "+977-9746888888",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beside City College Of Management, Pasang Lhamu Marg",
    addressLocality: "Nepalgunj",
    addressRegion: "Lumbini Province",
    postalCode: "21900",
    addressCountry: "NP",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Blog />
        <ClinicInfo />
        <Contact />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
