import type { Metadata } from "next";
import { siteBaseUrl, siteConfig } from "../seo";
import { servicePages } from "@/app/lib/servicePages";
import SeoStructuredData from "@/app/components/seo/SeoStructuredData";
import LocalBusinessSchema from "@/app/components/seo/LocalBusinessSchema";
import ServicePageTemplate from "@/app/components/marketing/ServicePageTemplate";

const pageSlug = "/taxi-service-in-patna";
const pageUrl = `${siteBaseUrl}${pageSlug}`;

export const metadata: Metadata = {
  title: "Taxi Service in Patna | Local & Outstation Cab Booking",
  description:
    "Book a reliable taxi service in Patna with Maa Lakshmi Tour and Travels. Local rides, airport pickup, and Bihar tour taxi support with trusted drivers.",
  alternates: {
    canonical: pageSlug,
  },
  openGraph: {
    title: "Taxi Service in Patna | Maa Lakshmi Tour and Travels",
    description:
      "Local Patna taxi booking with airport pickup, family travel, and Bihar tour routes from trusted drivers.",
    url: pageSlug,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Taxi Service in Patna | Maa Lakshmi Tour and Travels",
    description:
      "Local Patna taxi booking with airport pickup, family travel, and Bihar tour routes from trusted drivers.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contentSections = [
  {
    id: "patna-taxi-overview",
    title: "Local taxi service in Patna built for everyday travel",
    paragraphs: [
      `Maa Lakshmi Tour and Travels provides a dependable taxi service in Patna for daily commuting,
      market visits, office drops, and family needs. We know that Patna travel is a mix of busy city
      roads and narrow lanes, so our drivers are trained to handle areas like Boring Road, Bailey
      Road, Kankarbagh, Rajendra Nagar, Danapur, and Patliputra with ease. From early morning rides
      to late-night pickups, our local taxi Patna service is available for students, professionals,
      and seniors who want a comfortable ride without the stress of changing autos or waiting for
      shared options.`,
      `If you are searching for cab booking Patna customers trust, we combine local route knowledge
      with on-time reporting and polite service. We cover key locations like Patna Junction, Gandhi
      Maidan, PMCH, AIIMS Patna, and the Ganga riverfront, helping you reach appointments or family
      gatherings on time. Every ride is confirmed with clear pickup details, and our Patna cab
      service team stays in touch to ensure there are no last-minute surprises.`,
    ],
  },
  {
    id: "family-wedding-travel",
    title: "Family, wedding, and guest travel support across Patna",
    paragraphs: [
      `Patna celebrations often mean multiple pickups for relatives and wedding guests, and our taxi
      service keeps the logistics simple. We arrange bridal car rentals, family pickups, and group
      transfers between hotels, venues, and homes. Whether you need a sedan for a bride and groom,
      or a spacious SUV for elders, we plan routes and timing to reduce waiting. Families appreciate
      the clean interiors and courteous drivers, which make the day smoother and safer for everyone.`,
      `We also coordinate airport pickup and drop for wedding guests arriving at Jay Prakash Narayan
      International Airport, plus railway station transfers for late-night trains. With clear
      communication and local familiarity, we reduce the stress of coordinating relatives traveling
      from Bihar towns or nearby cities. This is why our wedding and family travel solutions remain a
      trusted choice for taxi service in Patna.`,
    ],
  },
  {
    id: "pricing-reliability",
    title: "Transparent fares and reliable Patna cab booking",
    paragraphs: [
      `Our goal is to make every cab booking Patna travelers request feel simple and transparent.
      You receive clear fare information before the ride begins, and our team shares toll or parking
      expectations for routes like the airport corridor or Patna Junction drop. We also provide
      estimated travel times based on traffic patterns in areas such as Ashok Rajpath or Saguna
      Mor, so you can plan meetings and family commitments with confidence.`,
      `We maintain a fleet of well-serviced cars and assign drivers based on proximity, ensuring you
      get quick confirmations and a dependable arrival. Whether it is a short local taxi Patna trip
      or an all-day booking, our drivers prioritize safe speeds, professional conduct, and clean
      cabins. This commitment to reliability helps customers return to Maa Lakshmi Tour and Travels
      for repeat bookings.`,
    ],
  },
  {
    id: "bihar-tour-routes",
    title: "Bihar tour taxi coverage starting from Patna",
    paragraphs: [
      `Patna is the gateway to Bihar’s most popular spiritual and heritage destinations, and our
      Bihar tour taxi service connects you to them comfortably. We plan day trips and multi-day
      itineraries that include Bodh Gaya, Rajgir, Nalanda, Vaishali, and Pawapuri. Our drivers know
      the best times to travel, where to stop for refreshments, and how to keep the ride smooth for
      families with children or elders.`,
      `If you are visiting from another state, we can pick you up from the airport or railway
      station and start your Bihar travel route immediately. We also cover outstation rides to
      Muzaffarpur, Darbhanga, Bhagalpur, and Deoghar, giving you a single, trusted Patna cab service
      for the entire trip.`,
    ],
  },
];

const trustSignals = [
  {
    title: "Verified Patna drivers",
    description:
      "Experienced local drivers who know Patna shortcuts, traffic timings, and safe routes.",
  },
  {
    title: "24/7 booking support",
    description:
      "Phone and WhatsApp assistance for early morning airport drops and late-night pickups.",
  },
  {
    title: "Transparent pricing",
    description:
      "Clear fare guidance for local taxi Patna rides, airport drops, and outstation trips.",
  },
  {
    title: "Clean, comfortable cars",
    description:
      "Sanitized interiors and maintained vehicles for families, weddings, and business travel.",
  },
];

const serviceCards = [
  {
    title: "Local taxi rides",
    description:
      "Daily commute, shopping, hospital visits, and quick city rides across Patna neighborhoods.",
  },
  {
    title: "Airport pickup & drop",
    description:
      "On-time airport taxi Patna service with flight tracking and luggage-friendly vehicles.",
  },
  {
    title: "Outstation cab booking",
    description:
      "Safe long-distance cabs from Patna to Bihar destinations and nearby states.",
  },
  {
    title: "Wedding & family travel",
    description:
      "Cars and SUVs arranged for weddings, family functions, and guest transfers.",
  },
];

const fleet = [
  {
    name: "Swift Dzire Sedan",
    description: "Comfortable for city rides and executive travel across Patna.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg",
    alt: "White sedan taxi for local Patna rides",
  },
  {
    name: "Ertiga MPV",
    description: "Spacious option for family travel and airport transfers.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg",
    alt: "Silver MPV for family cab booking in Patna",
  },
  {
    name: "Innova Crysta",
    description: "Premium comfort for outstation cab Patna travel and tours.",
    image:
      "https://mc.bajajfinserv.in/media/catalog/product/c/r/crysta_gx_7s_d_attitude_black_mica_base_4.jpeg",
    alt: "SUV taxi for outstation trips from Patna",
  },
  {
    name: "Scorpio SUV",
    description: "Reliable for Bihar roads, weddings, and long-distance routes.",
    image:
      "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-2.png?isig=0&q=80&q=80",
    alt: "SUV cab ready for Patna wedding and family travel",
  },
];

const routes = [
  {
    title: "Patna Airport to Patna Junction",
    description:
      "Fast airport taxi Patna transfers for arrivals and departures, including late-night train schedules.",
  },
  {
    title: "Patna to Gaya & Bodh Gaya",
    description:
      "Comfortable Bihar tour taxi rides for pilgrims, tourists, and family travel plans.",
  },
  {
    title: "Patna to Rajgir & Nalanda",
    description:
      "Full-day cab booking Patna service with stops at heritage and spiritual sites.",
  },
  {
    title: "Patna to Vaishali & Hajipur",
    description:
      "Quick outstation trips for family functions, day tours, or official visits.",
  },
  {
    title: "Patna to Muzaffarpur & Darbhanga",
    description:
      "Long-distance cab booking with reliable drivers and comfortable seating.",
  },
  {
    title: "Patna to Deoghar, Ranchi, or Varanasi",
    description:
      "Extended routes for Bihar travel, weddings, and family visits beyond Patna.",
  },
];

const benefits = [
  {
    title: "Flexible ride options",
    description:
      "Choose hourly, full-day, or point-to-point rides for local taxi Patna needs and outstation travel.",
  },
  {
    title: "Local route expertise",
    description:
      "Drivers understand Patna traffic patterns, peak hours, and alternate routes for quicker travel.",
  },
  {
    title: "Family-first comfort",
    description:
      "Spacious cars, smooth driving, and polite service make journeys relaxing for elders and kids.",
  },
  {
    title: "Trusted for events",
    description:
      "Wedding car rental support, guest pickups, and airport transfers planned with precision.",
  },
];

const testimonials = [
  {
    name: "Rohit S.",
    location: "Boring Road, Patna",
    quote:
      "Booked a local taxi Patna ride for my parents and the driver was polite, on time, and helpful.",
  },
  {
    name: "Anita K.",
    location: "Kankarbagh, Patna",
    quote:
      "Great experience with airport pickup. Clear communication and the cab was clean and comfortable.",
  },
  {
    name: "Vivek J.",
    location: "Danapur, Patna",
    quote:
      "Used their cab booking Patna service for Rajgir and Nalanda. Smooth ride and good planning.",
  },
];

const faqs = [
  {
    question: "How do I book a taxi service in Patna quickly?",
    answer:
      "Call or WhatsApp Maa Lakshmi Tour and Travels with your pickup point and time. We confirm the cab and driver details for a smooth local taxi Patna experience.",
  },
  {
    question: "Do you provide airport taxi Patna pickups at night?",
    answer:
      "Yes. We operate 24/7 and arrange airport pickup and drop for early morning or late-night flights.",
  },
  {
    question: "Can I book a cab from Patna for Bihar tour destinations?",
    answer:
      "Yes. We offer Bihar tour taxi services for Bodh Gaya, Rajgir, Nalanda, Vaishali, and other routes.",
  },
  {
    question: "Is wedding car rental Patna available with driver?",
    answer:
      "Yes. We arrange wedding cars with drivers and can plan guest transfers with multiple cabs.",
  },
  {
    question: "What areas do you cover for local taxi Patna rides?",
    answer:
      "We cover the entire city including Boring Road, Bailey Road, Kankarbagh, Danapur, Rajendra Nagar, and nearby locations.",
  },
  {
    question: "Do you provide one-way and round-trip bookings?",
    answer:
      "Yes. You can book one-way drops, round trips, hourly hires, or full-day packages.",
  },
  {
    question: "Is there support for family and senior citizen travel?",
    answer:
      "Yes. We assign courteous drivers and comfortable cars suitable for families and senior travelers.",
  },
  {
    question: "How do I get fare details for a Patna cab service?",
    answer:
      "Share your route and timing with our team and we provide a transparent fare estimate before the ride.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Taxi service in Patna",
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
    audienceType: "Local commuters, families, wedding guests, and tourists",
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
      name: "Taxi Service in Patna",
      item: pageUrl,
    },
  ],
};

export default function TaxiServiceInPatnaPage() {
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
          serviceType: ["Local taxi service", "Airport transfers", "Outstation cab booking"],
        }}
      />
      <ServicePageTemplate
        pageTitle="Patna Taxi Service"
        heroTitle="Taxi Service in Patna for local rides, airport travel, and Bihar tours"
        heroSubtitle="Trusted Patna cab service"
        heroDescription="Book a reliable taxi service in Patna with transparent fares, verified drivers, and quick confirmation. Ideal for local travel, airport pickup and drop, family trips, weddings, and outstation cab booking across Bihar."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Taxi Service in Patna" },
        ]}
        trustSignals={trustSignals}
        serviceCards={serviceCards}
        contentSections={contentSections}
        fleet={fleet}
        routes={routes}
        routeIntro="Patna sits at the center of Bihar travel, so our Patna cab service covers daily city routes as well as longer outstation journeys. These are some of the most requested routes for airport pickup, family functions, and Bihar tour taxi plans."
        routeOutro="If your route is not listed, share your pickup and destination and our team will plan the best cab booking Patna travelers can rely on."
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
