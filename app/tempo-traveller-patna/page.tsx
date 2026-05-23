import type { Metadata } from "next";
import { siteBaseUrl, siteConfig } from "../seo";
import { servicePages } from "@/app/lib/servicePages";
import SeoStructuredData from "@/app/components/seo/SeoStructuredData";
import LocalBusinessSchema from "@/app/components/seo/LocalBusinessSchema";
import ServicePageTemplate from "@/app/components/marketing/ServicePageTemplate";

const pageSlug = "/tempo-traveller-patna";
const pageUrl = `${siteBaseUrl}${pageSlug}`;

export const metadata: Metadata = {
  title: "Tempo Traveller Patna | Group Travel & Bihar Tours",
  description:
    "Hire tempo traveller in Patna for group travel, family tours, and wedding transport. Spacious vehicles with experienced drivers.",
  alternates: {
    canonical: pageSlug,
  },
  openGraph: {
    title: "Tempo Traveller Patna | Maa Lakshmi Tour and Travels",
    description:
      "Spacious tempo traveller rentals for Patna group travel, Bihar tour taxi routes, and events.",
    url: pageSlug,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Tempo Traveller Patna | Maa Lakshmi Tour and Travels",
    description:
      "Spacious tempo traveller rentals for Patna group travel, Bihar tour taxi routes, and events.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contentSections = [
  {
    id: "tempo-overview",
    title: "Tempo traveller Patna rentals for comfortable group travel",
    paragraphs: [
      `Maa Lakshmi Tour and Travels offers tempo traveller Patna rentals designed for group travel,
      family outings, and corporate tours. Our tempo travellers provide spacious seating, ample leg
      room, and air-conditioned comfort, making them ideal for longer journeys across Bihar. We
      focus on safe driving and punctual schedules so your group reaches destinations together and
      without stress.`,
      `Whether you are planning a school excursion, a family reunion, or a corporate trip, our
      tempo traveller Patna service gives you a single vehicle solution with a professional driver.
      It is the easiest way to keep the group together, manage luggage, and enjoy the journey.`,
    ],
  },
  {
    id: "family-wedding-group",
    title: "Family and wedding group transport in Patna",
    paragraphs: [
      `Weddings and family functions often involve group movement, especially when guests arrive
      together. Our tempo traveller Patna bookings are a popular option for baraat travel, guest
      pickups, and family transfers between venues. The spacious interiors make it comfortable for
      elders and children, while the group seating keeps everyone together and organized.`,
      `We also manage airport pickup and drop for wedding guests who arrive in groups, reducing the
      need for multiple small cars. For large family trips, this offers both convenience and
      consistent travel timing.`,
    ],
  },
  {
    id: "outstation-tempo",
    title: "Tempo traveller for Bihar tours and outstation routes",
    paragraphs: [
      `Bihar tours are best enjoyed as a group, and our tempo travellers are well-suited for routes
      like Bodh Gaya, Rajgir, Nalanda, Vaishali, and Pawapuri. We plan stopovers, meal breaks, and
      travel timing to keep the journey comfortable for everyone. Our drivers are familiar with
      Bihar travel routes, making the trip safe and efficient.`,
      `If your group is traveling from Patna to nearby states or long-distance routes, we can plan
      multi-day itineraries and provide a dedicated vehicle. This is a convenient alternative to
      booking multiple cabs and keeps group travel coordinated.`,
    ],
  },
  {
    id: "pricing-safety-tempo",
    title: "Transparent pricing and safe group travel",
    paragraphs: [
      `We provide clear fare information before confirming a tempo traveller Patna booking. Our
      team shares the route plan, expected travel time, and any toll or parking details so you can
      budget with confidence. We prioritize safety by maintaining vehicles regularly and assigning
      experienced drivers who are comfortable with group travel.`,
      `Whether the trip is local, outstation, or airport related, our support team remains available
      to assist with timing updates and additional stops. This reliability makes our tempo
      traveller Patna service a preferred choice for families and organizations.`,
    ],
  },
];

const trustSignals = [
  {
    title: "Spacious seating layouts",
    description:
      "Comfortable, reclined seating for groups traveling together across Bihar routes.",
  },
  {
    title: "Experienced group drivers",
    description:
      "Drivers trained for long-distance and group travel safety.",
  },
  {
    title: "Flexible tour planning",
    description:
      "Custom itineraries for Bihar tour taxi routes and family outings.",
  },
  {
    title: "Airport group transfers",
    description:
      "One vehicle for group airport pickup and drop in Patna.",
  },
];

const serviceCards = [
  {
    title: "12-seater tempo traveller",
    description:
      "Ideal for family trips, office teams, and small wedding groups.",
  },
  {
    title: "17-seater tempo traveller",
    description:
      "Comfortable for larger families, school groups, and tours.",
  },
  {
    title: "20-seater tempo traveller",
    description:
      "Best for big wedding parties and large group travel needs.",
  },
  {
    title: "Airport & outstation use",
    description:
      "Group transfers and Bihar tour taxi routes with a single booking.",
  },
];

const fleet = [
  {
    name: "12-Seater Tempo Traveller",
    description: "Comfortable seating with space for luggage and day tour essentials.",
    image:
      "https://shelketravels.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-04-at-11.19.48-PM-1-1-1024x768.jpeg",
    alt: "12-seater tempo traveller for Patna group travel",
  },
  {
    name: "17-Seater Tempo Traveller",
    description: "Balanced option for group tours and wedding guest travel.",
    image:
      "https://www.taxiyatri.com/images/9-seater-tempo-traveller.webp",
    alt: "17-seater tempo traveller rental in Patna",
  },
  {
    name: "20-Seater Tempo Traveller",
    description: "Large capacity for corporate outings, pilgrim groups, and events.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/340247626/AT/SS/MK/8114104/20-seater-tempo-traveller-rental.jpeg",
    alt: "20-seater tempo traveller for Bihar tours from Patna",
  },
  {
    name: "Luxury Tempo Traveller",
    description: "Premium interiors for comfortable long-distance group travel.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506692837/OT/LM/WM/36386207/20-seater-luxury-tempo-traveler-rental.jpg",
    alt: "Luxury tempo traveller for Patna family trips",
  },
];

const routes = [
  {
    title: "Patna to Bodh Gaya & Gaya",
    description:
      "Group-friendly Bihar tour taxi route for pilgrims and sightseeing teams.",
  },
  {
    title: "Patna to Rajgir & Nalanda",
    description:
      "Popular educational and heritage route for school and family groups.",
  },
  {
    title: "Patna to Vaishali & Hajipur",
    description:
      "Short group trips for day tours, weddings, and family events.",
  },
  {
    title: "Patna Airport to city hotels",
    description:
      "Airport pickup and drop for groups traveling together in Patna.",
  },
  {
    title: "Patna to Muzaffarpur & Darbhanga",
    description:
      "Comfortable tempo traveller Patna service for long-distance family travel.",
  },
  {
    title: "Patna to Deoghar or Ranchi",
    description:
      "Extended group travel for spiritual trips and corporate outings.",
  },
];

const benefits = [
  {
    title: "One vehicle for the entire group",
    description:
      "No need to coordinate multiple cars; the whole group travels together.",
  },
  {
    title: "Comfortable long journeys",
    description:
      "Reclining seats, AC comfort, and smooth driving for Bihar tour taxi routes.",
  },
  {
    title: "Cost-effective travel",
    description:
      "Shared travel costs make tempo traveller Patna bookings budget-friendly.",
  },
  {
    title: "Reliable scheduling",
    description:
      "On-time departures and planned stops for meals, sightseeing, and rest.",
  },
];

const testimonials = [
  {
    name: "Vikram D.",
    location: "Patna City",
    quote:
      "Our family tour to Rajgir and Nalanda in a tempo traveller was very comfortable and well managed.",
  },
  {
    name: "Seema R.",
    location: "Kankarbagh, Patna",
    quote:
      "We booked a tempo traveller Patna for wedding guests. Everything was on time and smooth.",
  },
  {
    name: "Anil B.",
    location: "Danapur, Patna",
    quote:
      "Great group travel service for our corporate trip to Bodh Gaya. Clean vehicle and safe driving.",
  },
];

const faqs = [
  {
    question: "How many seats are available in tempo traveller Patna rentals?",
    answer:
      "We offer 12-seater, 17-seater, and 20-seater tempo travellers depending on group size.",
  },
  {
    question: "Can I book a tempo traveller for airport pickup and drop?",
    answer:
      "Yes. We arrange airport group transfers for families, wedding guests, and corporate teams.",
  },
  {
    question: "Is tempo traveller Patna suitable for Bihar tour taxi routes?",
    answer:
      "Yes. Tempo travellers are ideal for Bodh Gaya, Rajgir, Nalanda, and other Bihar destinations.",
  },
  {
    question: "Do you provide tempo traveller service for weddings?",
    answer:
      "Yes. We offer group transport for baraat travel and guest movement during weddings.",
  },
  {
    question: "Can we stop for meals during long trips?",
    answer:
      "Yes. We plan stops for meals, rest, and sightseeing as needed.",
  },
  {
    question: "Do you offer AC tempo travellers?",
    answer:
      "Yes. Our tempo travellers are air-conditioned and maintained for comfort.",
  },
  {
    question: "How do I get pricing for tempo traveller Patna bookings?",
    answer:
      "Share your route and group size, and we provide a transparent fare estimate.",
  },
  {
    question: "Is advance booking required for large groups?",
    answer:
      "Advance booking is recommended for peak seasons and large events to reserve availability.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tempo traveller rental in Patna",
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
    audienceType: "Groups, families, wedding guests, and corporate teams",
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
      name: "Tempo Traveller Patna",
      item: pageUrl,
    },
  ],
};

export default function TempoTravellerPatnaPage() {
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
          serviceType: ["Tempo traveller Patna", "Group travel", "Bihar tour taxi"],
        }}
      />
      <ServicePageTemplate
        pageTitle="Tempo Traveller in Patna"
        heroTitle="Tempo traveller Patna rentals for group tours and family travel"
        heroSubtitle="Group travel made easy"
        heroDescription="Hire a tempo traveller in Patna for group outings, Bihar tours, wedding guests, and airport transfers. Spacious seating, experienced drivers, and reliable scheduling for every trip."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tempo Traveller Patna" },
        ]}
        trustSignals={trustSignals}
        serviceCards={serviceCards}
        contentSections={contentSections}
        fleet={fleet}
        routes={routes}
        routeIntro="Tempo travellers are ideal for group travel across Bihar. These are common routes for family tours, wedding travel, and airport transfers."
        routeOutro="Need a custom group itinerary? Our team will plan a comfortable route based on your group size and timeline."
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
