import JsonLd from "./JsonLd";

type LocalBusinessSchemaProps = {
  business: {
    name: string;
    url: string;
    description: string;
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      latitude: number;
      longitude: number;
    };
    mapsUrl: string;
    whatsappUrl: string;
    serviceType: string[];
  };
};

export default function LocalBusinessSchema({ business }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${business.url}/#localbusiness`,
    name: business.name,
    url: business.url,
    description: business.description,
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.mapsUrl,
    areaServed: ["Patna", "Bihar", "India"],
    availableLanguage: ["en", "hi"],
    priceRange: "₹₹",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [business.whatsappUrl, business.mapsUrl],
    serviceType: business.serviceType,
  };

  return <JsonLd data={schema} />;
}
