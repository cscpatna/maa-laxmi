import type { Metadata } from "next";
import { siteBaseUrl, siteConfig } from "../seo";
import { servicePages } from "@/app/lib/servicePages";
import SeoStructuredData from "@/app/components/seo/SeoStructuredData";
import LocalBusinessSchema from "@/app/components/seo/LocalBusinessSchema";
import ServicePageTemplate from "@/app/components/marketing/ServicePageTemplate";

const pageSlug = "/airport-cab-service-patna";
const pageUrl = `${siteBaseUrl}${pageSlug}`;

export const metadata: Metadata = {
  title: "Airport Cab Service Patna | On-Time Pickup & Drop",
  description:
    "Book airport cab service in Patna with Maa Lakshmi Tour and Travels. Safe airport taxi Patna rides for families, tourists, and business travelers.",
  alternates: {
    canonical: pageSlug,
  },
  openGraph: {
    title: "Airport Cab Service Patna | Maa Lakshmi Tour and Travels",
    description:
      "On-time airport taxi Patna pickups and drops with verified drivers and clear pricing.",
    url: pageSlug,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Airport Cab Service Patna | Maa Lakshmi Tour and Travels",
    description:
      "On-time airport taxi Patna pickups and drops with verified drivers and clear pricing.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contentSections = [
  {
    id: "airport-service-overview",
    title: "Patna airport cab service built for punctual travel",
    paragraphs: [
      `Maa Lakshmi Tour and Travels provides dedicated airport cab service Patna travelers rely on
      for smooth arrivals and departures. Jay Prakash Narayan International Airport (PAT) often
      has early morning and late-night flights, so we focus on punctual reporting, quick
      confirmations, and drivers who know the terminal access roads. Our airport taxi Patna service
      includes flight-aware scheduling and direct driver coordination, helping you avoid long waits
      after landing.`,
      `Whether you are flying for business, family visits, or Bihar tour plans, our airport cab
      booking team ensures that the vehicle arrives on time with ample boot space for luggage.
      We routinely serve travelers staying in Boring Road, Bailey Road, Kankarbagh, Rajendra Nagar,
      and Danapur, so you can reach home or hotel without unnecessary detours.`,
    ],
  },
  {
    id: "family-wedding-airport-travel",
    title: "Comfortable airport taxi Patna rides for families and weddings",
    paragraphs: [
      `Airport travel is often the first impression of a city for guests, and we make that moment
      comfortable and welcoming. Families arriving with children or elders can expect safe driving,
      help with luggage, and clean vehicles. We also coordinate airport pickup and drop for wedding
      guests, ensuring that arrivals reach venues or hotels on time and with minimal stress.`,
      `If you are planning a wedding in Patna, our team can align multiple airport pickups across
      different flights and send updates to family coordinators. This attention to detail is why
      many customers choose our airport taxi Patna service for family celebrations, guest
      management, and group travel logistics.`,
    ],
  },
  {
    id: "pricing-safety",
    title: "Transparent fares and safe airport transfers",
    paragraphs: [
      `We share clear fare information for airport transfers before confirming the booking. Our team
      also clarifies tolls or parking charges where applicable, so you can plan your budget without
      surprises. For late-night or early-morning schedules, we dispatch drivers from nearby zones
      to reduce waiting time and maintain reliability.`,
      `Safety and comfort are key priorities. Every airport taxi Patna ride includes a well-serviced
      vehicle, verified driver, and route guidance that avoids unnecessary delays. Whether you are
      traveling alone, with a family, or with corporate colleagues, our local support team stays
      reachable for immediate assistance.`,
    ],
  },
  {
    id: "airport-to-bihar-routes",
    title: "Connect airport pickups with Bihar travel routes",
    paragraphs: [
      `Many travelers land in Patna and continue directly to Bihar destinations such as Bodh Gaya,
      Rajgir, Nalanda, Vaishali, or Muzaffarpur. Our airport cab service Patna packages allow you
      to start an outstation journey right after arrival, without needing to switch vehicles or
      arrange a separate booking.`,
      `We also handle airport drop for travelers returning from Bihar tours, ensuring that your cab
      arrives early enough to manage baggage and security procedures. This end-to-end coordination
      makes us a trusted partner for airport taxi Patna transfers and Bihar travel planning.`,
    ],
  },
];

const trustSignals = [
  {
    title: "Flight-aware scheduling",
    description:
      "We track flight timings and adjust pickups for early arrivals or delays.",
  },
  {
    title: "On-time reporting",
    description:
      "Drivers reach the airport or pickup point with buffer time for smooth travel.",
  },
  {
    title: "Luggage-friendly cars",
    description:
      "Sedans, SUVs, and MPVs ready for families, seniors, and business travelers.",
  },
  {
    title: "24/7 assistance",
    description:
      "Phone and WhatsApp support for last-minute airport taxi Patna changes.",
  },
];

const serviceCards = [
  {
    title: "Arrival pickup",
    description:
      "Prompt airport pickup with driver coordination and easy terminal exits.",
  },
  {
    title: "Departure drop",
    description:
      "Scheduled airport drops with traffic-aware planning for stress-free check-ins.",
  },
  {
    title: "Meet & assist",
    description:
      "Support for senior citizens, families, and first-time Patna travelers.",
  },
  {
    title: "Airport to outstation",
    description:
      "Continue from the airport to Bihar tour destinations without switching cabs.",
  },
];

const fleet = [
  {
    name: "Premium Sedan",
    description: "Ideal for solo travelers, executives, and quick airport drops.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna-Facelift/13312/1773040519044/front-left-side-47.jpg",
    alt: "Premium sedan for Patna airport taxi service",
  },
  {
    name: "Comfortable MPV",
    description: "Extra luggage space for family airport cab service Patna bookings.",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg",
    alt: "MPV taxi for Patna airport pickup and drop",
  },
  {
    name: "SUV for long routes",
    description: "Smooth rides for airport pickups continuing to Bihar destinations.",
    image:
      "https://mc.bajajfinserv.in/media/catalog/product/c/r/crysta_gx_7s_d_attitude_black_mica_base_4.jpeg",
    alt: "SUV for outstation trips starting from Patna airport",
  },
  {
    name: "Tempo traveller",
    description: "Group airport transfers for wedding guests and corporate teams.",
    image:
      "https://cdn.bluebirdtravels.in/wp-content/uploads/2017/01/Tempo_Traveller_PI-531x354.png",
    alt: "Tempo traveller for Patna airport group transfers",
  },
];

const routes = [
  {
    title: "Patna Airport to Patna Junction",
    description:
      "Fast airport taxi Patna transfers for train connections and late-night arrivals.",
  },
  {
    title: "Airport to Boring Road & Bailey Road",
    description:
      "Direct city drops for hotels, offices, and residential colonies.",
  },
  {
    title: "Airport to Kankarbagh & Rajendra Nagar",
    description:
      "Reliable routes for family stays and business visits across East Patna.",
  },
  {
    title: "Airport to Danapur & Saguna Mor",
    description:
      "Smooth transfers for military cantonment, residential hubs, and wedding venues.",
  },
  {
    title: "Airport to Bodh Gaya & Gaya",
    description:
      "Outstation cab Patna routes for pilgrims and Bihar tour travelers.",
  },
  {
    title: "Airport to Rajgir & Nalanda",
    description:
      "Convenient long-distance trips to heritage destinations without switching cabs.",
  },
];

const benefits = [
  {
    title: "Guaranteed punctuality",
    description:
      "We prioritize on-time arrivals for flights and smooth departures from Patna airport.",
  },
  {
    title: "Real-time coordination",
    description:
      "Driver and customer updates keep pickups aligned with flight timings.",
  },
  {
    title: "Family-friendly travel",
    description:
      "Spacious vehicles and polite drivers help elders and children travel comfortably.",
  },
  {
    title: "One booking for all",
    description:
      "Airport transfers, local taxi Patna rides, and Bihar tour taxi plans in one place.",
  },
];

const testimonials = [
  {
    name: "Shalini P.",
    location: "Bailey Road, Patna",
    quote:
      "My parents landed late at night and the airport cab service was already waiting. Very smooth.",
  },
  {
    name: "Rajat M.",
    location: "Rajendra Nagar, Patna",
    quote:
      "Quick airport pickup and the driver helped with luggage. Booking was easy on WhatsApp.",
  },
  {
    name: "Neha S.",
    location: "Kankarbagh, Patna",
    quote:
      "We continued from the airport to Bodh Gaya in the same cab. Comfortable and reliable.",
  },
];

const faqs = [
  {
    question: "Do you track flights for Patna airport pickups?",
    answer:
      "Yes. We monitor flight timings and adjust driver arrival so your airport taxi Patna pickup stays on time.",
  },
  {
    question: "Can I book an airport cab service Patna ride late at night?",
    answer:
      "Yes. Our service operates 24/7 with drivers assigned for early morning and late-night flights.",
  },
  {
    question: "Is airport pickup available for wedding guests?",
    answer:
      "Yes. We manage multiple airport pickups for wedding guests and coordinate timing with the family.",
  },
  {
    question: "Do you provide airport drop to outstation routes?",
    answer:
      "Yes. We can take you directly from Patna airport to Bihar destinations like Gaya or Rajgir.",
  },
  {
    question: "Which areas do you serve after airport pickup?",
    answer:
      "We cover all Patna localities including Boring Road, Bailey Road, Kankarbagh, Danapur, and more.",
  },
  {
    question: "Can I request a larger vehicle for extra luggage?",
    answer:
      "Yes. We offer SUVs and MPVs for larger families, wedding groups, or heavy luggage.",
  },
  {
    question: "How do I get airport taxi Patna fare details?",
    answer:
      "Share your pickup point and drop location on call or WhatsApp and we provide a clear fare estimate.",
  },
  {
    question: "Do you also provide local taxi Patna rides after airport drop?",
    answer:
      "Yes. You can continue with local travel or book another ride anytime during your stay.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Airport cab service in Patna",
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
    audienceType: "Airport travelers, families, wedding guests, and business visitors",
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
      name: "Airport Cab Service Patna",
      item: pageUrl,
    },
  ],
};

export default function AirportCabServicePatnaPage() {
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
          serviceType: ["Airport taxi Patna", "Airport pickup and drop", "Outstation airport routes"],
        }}
      />
      <ServicePageTemplate
        pageTitle="Airport Cab Service in Patna"
        heroTitle="Airport cab service Patna travelers trust for on-time pickup and drop"
        heroSubtitle="Patna airport taxi specialists"
        heroDescription="Reserve an airport taxi Patna ride with trained drivers, clean cars, and flight-aware scheduling. Perfect for families, corporate travelers, wedding guests, and Bihar tour visitors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Airport Cab Service Patna" },
        ]}
        trustSignals={trustSignals}
        serviceCards={serviceCards}
        contentSections={contentSections}
        fleet={fleet}
        routes={routes}
        routeIntro="Our airport cab service Patna routes connect the terminal to every major Patna locality and Bihar destination. These are the most requested airport pickup and drop routes for local and outstation travel."
        routeOutro="Need a custom airport route? Share your arrival time and destination and we will plan the best travel option."
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
