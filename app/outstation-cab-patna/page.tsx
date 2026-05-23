import type { Metadata } from "next";
import { siteBaseUrl, siteConfig } from "../seo";
import { servicePages } from "@/app/lib/servicePages";
import SeoStructuredData from "@/app/components/seo/SeoStructuredData";
import LocalBusinessSchema from "@/app/components/seo/LocalBusinessSchema";
import ServicePageTemplate from "@/app/components/marketing/ServicePageTemplate";

const pageSlug = "/outstation-cab-patna";
const pageUrl = `${siteBaseUrl}${pageSlug}`;

export const metadata: Metadata = {
  title: "Outstation Cab Patna | Bihar & Nearby Routes",
  description:
    "Book outstation cab Patna rides with Maa Lakshmi Tour and Travels. Reliable Bihar tour taxi routes, family travel, and long-distance cabs.",
  alternates: {
    canonical: pageSlug,
  },
  openGraph: {
    title: "Outstation Cab Patna | Maa Lakshmi Tour and Travels",
    description:
      "Comfortable outstation cab booking from Patna to Bihar destinations and nearby states.",
    url: pageSlug,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Outstation Cab Patna | Maa Lakshmi Tour and Travels",
    description:
      "Comfortable outstation cab booking from Patna to Bihar destinations and nearby states.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contentSections = [
  {
    id: "outstation-overview",
    title: "Outstation cab Patna service for Bihar and beyond",
    paragraphs: [
      `Maa Lakshmi Tour and Travels offers dependable outstation cab Patna bookings for travelers
      heading to Bihar towns, pilgrimage routes, and nearby states. Our drivers are familiar with
      highway conditions, rest stops, and safe travel windows, so you can plan comfortable
      long-distance journeys. Whether you are heading to Gaya for a family ritual or Rajgir for a
      weekend break, our Patna cab service keeps the ride smooth and well-organized.`,
      `We provide one-way, round-trip, and multi-day cab booking Patna packages, tailored to
      families, business travelers, and tourists. From early morning departures to late-night
      arrivals, our team stays available to coordinate the trip, share updates, and ensure
      on-time arrival at every destination.`,
    ],
  },
  {
    id: "family-wedding-outstation",
    title: "Family and wedding travel support on long routes",
    paragraphs: [
      `Outstation travel often includes family members of all ages, which is why we focus on comfort
      and safety. Our clean, spacious cars are ideal for elders and children, and our drivers keep
      a steady, patient pace on longer routes. If you need a wedding car rental Patna solution for
      outstation travel, we can plan convoy-style movement of family members and guests to nearby
      towns or religious sites.`,
      `We also support airport pickup and drop for relatives arriving in Patna and continuing to
      outstation destinations. This is especially helpful for family reunions and wedding events
      where guests come from multiple cities. One booking can cover the entire journey from the
      airport to the final destination.`,
    ],
  },
  {
    id: "pricing-safety-outstation",
    title: "Clear pricing and safe long-distance cab booking",
    paragraphs: [
      `Every outstation cab Patna booking includes fare clarity before departure. We provide a
      transparent breakdown of route expectations, tolls, and potential stopovers, so your budget
      is clear from the start. Our vehicles are regularly serviced for long drives, and drivers
      are briefed on route conditions to keep the journey safe and comfortable.`,
      `We also allow flexible stops for meals, rest, or temple visits during Bihar tour taxi trips.
      If you are planning a multi-day itinerary, our team helps with daily start times and
      suggested break points to make sure the journey stays enjoyable.`,
    ],
  },
  {
    id: "bihar-tour-routes",
    title: "Bihar tour taxi itineraries from Patna",
    paragraphs: [
      `Bihar is rich in spiritual and heritage destinations, and Patna is the perfect base to
      explore them. Our outstation cab Patna service supports day tours to Bodh Gaya, Rajgir,
      Nalanda, and Vaishali, as well as longer trips to Bhagalpur, Deoghar, and Purnia.`,
      `We regularly assist tourists who arrive at Patna airport or Patna Junction and want a
      private cab to follow a curated Bihar travel route. You can rely on our Patna cab service
      for local guidance, safe night travel decisions, and a smooth overall experience.`,
    ],
  },
];

const trustSignals = [
  {
    title: "Route-experienced drivers",
    description:
      "Long-distance drivers with familiarity across Bihar highways and tourist circuits.",
  },
  {
    title: "Comfort-ready fleet",
    description:
      "Sedans, SUVs, and MPVs suited for family trips, weddings, and corporate travel.",
  },
  {
    title: "Flexible itineraries",
    description:
      "Planned stops for meals, temples, and rest breaks on longer journeys.",
  },
  {
    title: "Transparent pricing",
    description:
      "Clear estimates for one-way or round-trip outstation cab Patna bookings.",
  },
];

const serviceCards = [
  {
    title: "One-way outstation",
    description:
      "Direct drops from Patna to Bihar towns without return fare confusion.",
  },
  {
    title: "Round trip packages",
    description:
      "Multi-day cab booking for family trips, pilgrimages, and business travel.",
  },
  {
    title: "Bihar tour taxi",
    description:
      "Planned routes for Bodh Gaya, Rajgir, Nalanda, and Vaishali sightseeing.",
  },
  {
    title: "Airport-to-outstation",
    description:
      "Continue from Patna airport to your destination with the same trusted cab.",
  },
];

const fleet = [
  {
    name: "Innova Crysta",
    description: "Premium comfort for long-distance outstation cab Patna travel.",
    image:
      "https://mc.bajajfinserv.in/media/catalog/product/c/r/crysta_gx_7s_d_attitude_black_mica_base_4.jpeg",
    alt: "Innova-style SUV for outstation cab booking from Patna",
  },
  {
    name: "Ertiga MPV",
    description: "Spacious choice for family trips and Bihar tour taxi itineraries.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg",
    alt: "MPV for Bihar tour taxi routes from Patna",
  },
  {
    name: "Swift Dzire Sedan",
    description: "Budget-friendly option for short outstation routes.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg",
    alt: "Sedan for outstation cab Patna routes",
  },
  {
    name: "Tempo Traveller",
    description: "Ideal for group tours, wedding travel, and corporate teams.",
    image:
      "https://cdn.bluebirdtravels.in/wp-content/uploads/2017/01/Tempo_Traveller_PI-531x354.png",
    alt: "Tempo traveller for outstation group travel from Patna",
  },
];

const routes = [
  {
    title: "Patna to Gaya & Bodh Gaya",
    description:
      "Popular pilgrimage route with smooth highways and convenient stopovers.",
  },
  {
    title: "Patna to Rajgir & Nalanda",
    description:
      "Heritage and wellness travel for families, students, and tourists.",
  },
  {
    title: "Patna to Vaishali & Hajipur",
    description:
      "Short outstation rides for family functions or heritage sightseeing.",
  },
  {
    title: "Patna to Muzaffarpur & Darbhanga",
    description:
      "Comfortable long-distance cab booking Patna travelers request frequently.",
  },
  {
    title: "Patna to Bhagalpur & Deoghar",
    description:
      "Extended routes for spiritual travel, wedding events, and family reunions.",
  },
  {
    title: "Patna to Varanasi, Ranchi, or Kolkata",
    description:
      "Interstate travel support for business trips and family vacations.",
  },
];

const benefits = [
  {
    title: "Door-to-door convenience",
    description:
      "Pickup from any Patna locality with direct arrival at your outstation destination.",
  },
  {
    title: "Comfort for long drives",
    description:
      "Well-maintained cars with ample space and smooth driving for long distances.",
  },
  {
    title: "Experienced route planning",
    description:
      "Drivers know Bihar highways, safest travel timings, and trusted rest points.",
  },
  {
    title: "Wedding and family support",
    description:
      "Dedicated coordination for family groups, wedding guests, and event travel.",
  },
];

const testimonials = [
  {
    name: "Mahesh T.",
    location: "Patliputra, Patna",
    quote:
      "Booked an outstation cab Patna trip to Gaya and Bodh Gaya. Smooth ride and great service.",
  },
  {
    name: "Priya R.",
    location: "Bailey Road, Patna",
    quote:
      "Our family went to Rajgir and Nalanda in one day. Driver was courteous and punctual.",
  },
  {
    name: "Sunil K.",
    location: "Danapur, Patna",
    quote:
      "We used the cab booking Patna service for a wedding in Muzaffarpur. Everything was on time.",
  },
];

const faqs = [
  {
    question: "How do I book an outstation cab in Patna?",
    answer:
      "Call or WhatsApp Maa Lakshmi Tour and Travels with your route and timing. We share fare details and confirm the booking quickly.",
  },
  {
    question: "Do you provide Bihar tour taxi packages from Patna?",
    answer:
      "Yes. We offer day trips and multi-day itineraries covering Bodh Gaya, Rajgir, Nalanda, and Vaishali.",
  },
  {
    question: "Can I start an outstation trip directly from Patna airport?",
    answer:
      "Yes. We arrange airport pickup and continue to your outstation destination without switching cabs.",
  },
  {
    question: "Is round-trip cab booking Patna available?",
    answer:
      "Yes. We provide round-trip packages with flexible schedules for family and business travel.",
  },
  {
    question: "Which vehicles are best for long-distance travel?",
    answer:
      "SUVs and MPVs like Innova or Ertiga are popular for comfort, while sedans work for smaller groups.",
  },
  {
    question: "Can you support wedding travel to other Bihar towns?",
    answer:
      "Yes. We arrange wedding car rental Patna vehicles for guest travel to nearby towns and venues.",
  },
  {
    question: "Do you allow stops on the way?",
    answer:
      "Yes. We plan breaks for meals, temples, or rest stops as part of the journey.",
  },
  {
    question: "How do I get fare estimates for outstation cab Patna rides?",
    answer:
      "Share your route and timing with our team and we provide a transparent fare estimate.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Outstation cab service in Patna",
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
    audienceType: "Families, tourists, wedding guests, and business travelers",
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
      name: "Outstation Cab Patna",
      item: pageUrl,
    },
  ],
};

export default function OutstationCabPatnaPage() {
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
          serviceType: ["Outstation cab Patna", "Bihar tour taxi", "Long-distance cab booking"],
        }}
      />
      <ServicePageTemplate
        pageTitle="Outstation Cab Patna"
        heroTitle="Outstation cab Patna bookings for Bihar tours and long-distance travel"
        heroSubtitle="Bihar tour taxi specialists"
        heroDescription="Plan safe long-distance trips with Maa Lakshmi Tour and Travels. We provide reliable outstation cab Patna rides for Bihar destinations, family travel, weddings, and airport pickup connections."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Outstation Cab Patna" },
        ]}
        trustSignals={trustSignals}
        serviceCards={serviceCards}
        contentSections={contentSections}
        fleet={fleet}
        routes={routes}
        routeIntro="Patna is the starting point for many Bihar travel routes. Our outstation cab Patna service covers popular destinations and trusted highways for safe, comfortable journeys."
        routeOutro="Looking for a custom route or multi-day itinerary? Share the plan and we will tailor the cab booking accordingly."
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
