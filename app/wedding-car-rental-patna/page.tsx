import type { Metadata } from "next";
import { siteBaseUrl, siteConfig } from "../seo";
import { servicePages } from "@/app/lib/servicePages";
import SeoStructuredData from "@/app/components/seo/SeoStructuredData";
import LocalBusinessSchema from "@/app/components/seo/LocalBusinessSchema";
import ServicePageTemplate from "@/app/components/marketing/ServicePageTemplate";

const pageSlug = "/wedding-car-rental-patna";
const pageUrl = `${siteBaseUrl}${pageSlug}`;

export const metadata: Metadata = {
  title: "Wedding Car Rental Patna | Bridal & Guest Transport",
  description:
    "Book wedding car rental in Patna with Maa Lakshmi Tour and Travels. Decorated wedding cars, guest transport, and family travel planning.",
  alternates: {
    canonical: pageSlug,
  },
  openGraph: {
    title: "Wedding Car Rental Patna | Maa Lakshmi Tour and Travels",
    description:
      "Premium wedding cars, guest pickups, and family travel support for Patna weddings.",
    url: pageSlug,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Wedding Car Rental Patna | Maa Lakshmi Tour and Travels",
    description:
      "Premium wedding cars, guest pickups, and family travel support for Patna weddings.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contentSections = [
  {
    id: "wedding-overview",
    title: "Wedding car rental Patna for memorable celebrations",
    paragraphs: [
      `Maa Lakshmi Tour and Travels offers wedding car rental Patna families depend on for smooth
      ceremonies and comfortable transportation. From bridal entry cars to family vehicles, we
      provide well-maintained options that look elegant and feel comfortable. Our team helps you
      choose the right car based on the wedding theme, venue distance, and guest requirements.`,
      `Patna weddings often involve multiple events across different locations, so we plan the
      schedule carefully to avoid delays. Whether the ceremony is in the city or at a nearby
      destination, our cab booking Patna team coordinates the timing and assigns drivers who are
      respectful, punctual, and familiar with wedding routes.`,
    ],
  },
  {
    id: "guest-transport",
    title: "Guest transport, family travel, and airport pickups",
    paragraphs: [
      `Beyond the bridal car, weddings require reliable transport for family members, elders, and
      guests. We arrange multiple vehicles for pickup and drop at homes, hotels, and wedding venues
      in areas like Boring Road, Bailey Road, Kankarbagh, Rajendra Nagar, and Danapur. Our drivers
      coordinate with family coordinators to make sure every guest arrives on time.`,
      `We also provide airport pickup and drop for relatives arriving in Patna, which is especially
      useful for destination weddings and cross-city gatherings. Whether guests fly in early or
      late, the airport taxi Patna service is available to keep the wedding schedule on track.`,
    ],
  },
  {
    id: "decorated-cars",
    title: "Decorated wedding cars and premium comfort",
    paragraphs: [
      `Our wedding car rental Patna options include premium sedans and SUVs that can be decorated
      to match your event style. Clean interiors, smooth rides, and climate control keep the bride,
      groom, and family comfortable throughout the day. We work with decorators or follow your
      preferences for ribbons, flowers, or minimal designs.`,
      `For longer routes or baraat travel, we can arrange larger vehicles and tempo traveller
      options. This ensures that the entire family travels together, making coordination easier
      and the celebration more enjoyable.`,
    ],
  },
  {
    id: "wedding-outstation",
    title: "Wedding travel routes across Bihar",
    paragraphs: [
      `Many Patna families host weddings in nearby towns such as Hajipur, Vaishali, Gaya, or
      Muzaffarpur. Our outstation cab Patna expertise helps you plan wedding travel routes with
      sufficient vehicles, on-time departure, and route familiarity.`,
      `If the wedding includes guests from outside Bihar, we can create a single travel plan that
      covers airport arrivals, station pickups, and wedding venue transfers. This comprehensive
      planning makes Maa Lakshmi Tour and Travels a trusted partner for wedding car rental Patna
      needs.`,
    ],
  },
];

const trustSignals = [
  {
    title: "On-time event coordination",
    description:
      "Pickup schedules aligned with wedding rituals, venue timings, and guest arrivals.",
  },
  {
    title: "Decor-ready vehicles",
    description:
      "Sedans and SUVs kept spotless and ready for wedding decor requirements.",
  },
  {
    title: "Family-first comfort",
    description:
      "Safe, comfortable rides for elders, children, and bridal parties.",
  },
  {
    title: "Airport guest support",
    description:
      "Airport pickup and drop services for relatives and wedding guests.",
  },
];

const serviceCards = [
  {
    title: "Bridal entry cars",
    description:
      "Elegant sedans or SUVs for bride and groom entry with decoration support.",
  },
  {
    title: "Family fleet booking",
    description:
      "Multiple cars for parents, siblings, and relatives across Patna.",
  },
  {
    title: "Guest airport transfers",
    description:
      "Airport taxi Patna pickups for wedding guests and VIP relatives.",
  },
  {
    title: "Outstation wedding travel",
    description:
      "Cab booking Patna service for weddings in Bihar towns and nearby cities.",
  },
];

const fleet = [
  {
    name: "Luxury Sedan",
    description: "Elegant choice for bridal entry and premium wedding photos.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna-Facelift/13312/1773040519044/front-left-side-47.jpg",
    alt: "Luxury sedan for wedding car rental in Patna",
  },
  {
    name: "Premium SUV",
    description: "Spacious ride for bridal party and family travel.",
    image:
      "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-2.png?isig=0&q=80&q=80",
    alt: "Premium SUV for Patna wedding guest transport",
  },
  {
    name: "Ertiga MPV",
    description: "Comfortable for family members and group travel.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg",
    alt: "MPV for wedding family travel in Patna",
  },
  {
    name: "Tempo Traveller",
    description: "Best for baraat travel and guest transport.",
    image:
      "https://cdn.bluebirdtravels.in/wp-content/uploads/2017/01/Tempo_Traveller_PI-531x354.png",
    alt: "Tempo traveller for wedding guest transfers in Patna",
  },
];

const routes = [
  {
    title: "City venue transfers",
    description:
      "Pickup and drop between hotels, homes, and wedding venues across Patna.",
  },
  {
    title: "Patna Airport to wedding venue",
    description:
      "Airport taxi Patna service for guests arriving for weddings and events.",
  },
  {
    title: "Patna to Hajipur & Vaishali",
    description:
      "Popular wedding routes for family events in nearby towns.",
  },
  {
    title: "Patna to Gaya & Bodh Gaya",
    description:
      "Long-distance wedding travel for religious ceremonies and family gatherings.",
  },
  {
    title: "Patna to Muzaffarpur & Darbhanga",
    description:
      "Smooth outstation cab Patna trips for large family events.",
  },
  {
    title: "Patna to Rajgir & Nalanda",
    description:
      "Heritage destinations for wedding receptions and family celebrations.",
  },
];

const benefits = [
  {
    title: "Coordinated scheduling",
    description:
      "Dedicated planning keeps every pickup aligned with wedding rituals and timings.",
  },
  {
    title: "Decor-ready presentation",
    description:
      "Clean, polished vehicles ideal for bridal entry photos and grand arrivals.",
  },
  {
    title: "Comfort for elders",
    description:
      "Smooth rides and patient drivers for senior family members and guests.",
  },
  {
    title: "Complete travel coverage",
    description:
      "Airport pickups, local transfers, and outstation travel managed in one plan.",
  },
];

const testimonials = [
  {
    name: "Rina P.",
    location: "Rajendra Nagar, Patna",
    quote:
      "The bridal car was beautifully prepared and arrived exactly on time. Excellent service.",
  },
  {
    name: "Saurav K.",
    location: "Kankarbagh, Patna",
    quote:
      "They managed guest pickups from Patna airport and the venue smoothly. Very professional.",
  },
  {
    name: "Pooja S.",
    location: "Bailey Road, Patna",
    quote:
      "Our outstation wedding travel to Vaishali was comfortable and well coordinated.",
  },
];

const faqs = [
  {
    question: "Do you provide decorated wedding cars in Patna?",
    answer:
      "Yes. We arrange decorated sedans or SUVs for bridal entry and coordinate decoration preferences.",
  },
  {
    question: "Can you manage airport pickups for wedding guests?",
    answer:
      "Yes. We provide airport taxi Patna service for guests arriving at different times.",
  },
  {
    question: "Is wedding car rental Patna available for outstation travel?",
    answer:
      "Yes. We support wedding travel to nearby Bihar towns like Vaishali, Gaya, and Muzaffarpur.",
  },
  {
    question: "How many vehicles can you arrange for a wedding?",
    answer:
      "We can arrange multiple cars including sedans, SUVs, and tempo travellers based on guest count.",
  },
  {
    question: "Do you offer hourly booking for wedding events?",
    answer:
      "Yes. We provide flexible hourly or full-day cab booking Patna packages for weddings.",
  },
  {
    question: "Can I book a premium SUV for bridal entry?",
    answer:
      "Yes. Premium SUVs are available and can be decorated to match your theme.",
  },
  {
    question: "Which Patna areas do you cover for wedding travel?",
    answer:
      "We cover all major localities including Boring Road, Bailey Road, Kankarbagh, and Danapur.",
  },
  {
    question: "How early should I book wedding cars?",
    answer:
      "For peak wedding dates, booking early is recommended. Our team can reserve vehicles in advance.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding car rental in Patna",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${pageUrl}#localbusiness`,
    name: siteConfig.name,
  },
  areaServed: ["Patna", "Bihar", "India"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: pageUrl,
    servicePhone: siteConfig.phone,
  },
  audience: {
    "@type": "Audience",
    audienceType: "Wedding families, guests, and event organizers",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteBaseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wedding Car Rental Patna",
      item: pageUrl,
    },
  ],
};

export default function WeddingCarRentalPatnaPage() {
  const internalLinks = servicePages.filter((page) => page.slug !== pageSlug);

  return (
    <>
      <SeoStructuredData schemas={[serviceSchema, breadcrumbSchema]} />
      <LocalBusinessSchema
        business={{
          name: siteConfig.name,
          url: pageUrl,
          description: metadata.description as string,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: siteConfig.officeAddress,
          geo: siteConfig.geo,
          mapsUrl: siteConfig.mapsUrl,
          whatsappUrl: siteConfig.whatsappUrl,
          serviceType: ["Wedding car rental Patna", "Bridal entry cars", "Guest transport"],
        }}
      />
      <ServicePageTemplate
        pageTitle="Wedding Car Rental in Patna"
        heroTitle="Wedding car rental Patna for bridal entry, guests, and family travel"
        heroSubtitle="Celebrate with comfort and style"
        heroDescription="Reserve premium wedding cars in Patna with trained drivers, decoration-ready vehicles, and coordinated guest transport. From airport pickups to venue transfers, we handle every detail."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Wedding Car Rental Patna" },
        ]}
        trustSignals={trustSignals}
        serviceCards={serviceCards}
        contentSections={contentSections}
        fleet={fleet}
        routes={routes}
        routeIntro="Wedding events in Patna involve multiple venues and guest pickups. These popular routes help families plan transportation for ceremonies, receptions, and outstation functions."
        routeOutro="Share your wedding schedule and pickup points and we will plan the transport accordingly."
        benefits={benefits}
        testimonials={testimonials}
        faqs={faqs}
        internalLinks={internalLinks}
        phone={siteConfig.phone}
        email={siteConfig.email}
        location={siteConfig.location}
        whatsappUrl={siteConfig.whatsappUrl}
      />
    </>
  );
}
