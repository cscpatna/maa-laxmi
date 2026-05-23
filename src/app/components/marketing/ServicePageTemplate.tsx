import Link from "next/link";
import BreadcrumbNav from "./BreadcrumbNav";
import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";
import type { ServicePageLink } from "@/app/lib/servicePages";

type ContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

type ServiceCard = {
  title: string;
  description: string;
};

type TrustSignal = {
  title: string;
  description: string;
};

type FleetItem = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

type RouteItem = {
  title: string;
  description: string;
};

type BenefitItem = {
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServicePageTemplateProps = {
  pageTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  breadcrumbs: { label: string; href?: string }[];
  trustSignals: TrustSignal[];
  serviceCards: ServiceCard[];
  contentSections: ContentSection[];
  fleet: FleetItem[];
  routes: RouteItem[];
  routeIntro: string;
  routeOutro?: string;
  benefits: BenefitItem[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  internalLinks: ServicePageLink[];
  phone: string;
  email: string;
  location: string;
  whatsappUrl: string;
};

export default function ServicePageTemplate({
  pageTitle,
  heroTitle,
  heroSubtitle,
  heroDescription,
  breadcrumbs,
  trustSignals,
  serviceCards,
  contentSections,
  fleet,
  routes,
  routeIntro,
  routeOutro,
  benefits,
  testimonials,
  faqs,
  internalLinks,
  phone,
  email,
  location,
  whatsappUrl,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#0a2463] focus:px-4 focus:py-2 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg md:text-2xl font-semibold text-[#0a2463]">
            <span className="text-[#d4af37]">Maa Lakshmi</span> Tour and Travels
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
            {internalLinks.map((link) => (
              <Link
                key={link.slug}
                href={link.slug}
                className="hover:text-[#0a2463] transition"
                title={link.title}
              >
                {link.title.slice(0, 10)}...
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center rounded-lg bg-[#0a2463] px-4 py-2 text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Call Now
            </Link>
            <Link
              href={whatsappUrl}
              className="inline-flex items-center rounded-lg border border-[#0a2463] px-4 py-2 text-[#0a2463] text-sm font-semibold hover:bg-[#0a2463] hover:text-white transition"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" className="pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <BreadcrumbNav items={breadcrumbs} />
        </div>

        <section className="bg-[#0a2463] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-4">
                {heroSubtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                {heroTitle}
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-2xl">{heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[#d4af37] text-[#0a2463] px-6 py-3 font-semibold hover:opacity-90 transition"
                >
                  Call for Booking
                </Link>
                <Link
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-[#0a2463] transition"
                >
                  WhatsApp Now
                </Link>
              </div>
            </div>
            <div className="bg-white text-[#0a2463] rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-3">{pageTitle}</h2>
              <p className="text-gray-600 mb-6">
                Speak to our local team in Patna for transparent fares, fast confirmations, and
                verified drivers for every trip.
              </p>
              <div className="grid gap-4 text-sm">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">{phone}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">{email}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold">Service Area</p>
                  <p className="text-gray-600">{location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-xl border border-gray-100 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                  {signal.title}
                </h3>
                <p className="text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-6">
              Service highlights for Patna travelers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {contentSections.map((section) => (
          <section key={section.id} id={section.id} className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-6">
                {section.title}
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.id}-p-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-6">
              Fleet options ready for every trip
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fleet.map((car) => (
                <article
                  key={car.name}
                  className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm"
                >
                  <img
                    src={car.image}
                    alt={car.alt}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                      {car.name}
                    </h3>
                    <p className="text-gray-600">{car.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-4">
              Popular routes and Bihar destinations
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">{routeIntro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {routes.map((route) => (
                <article
                  key={route.title}
                  className="rounded-xl border border-gray-100 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                    {route.title}
                  </h3>
                  <p className="text-gray-700">{route.description}</p>
                </article>
              ))}
            </div>
            {routeOutro ? (
              <p className="text-lg text-gray-700 mt-8 max-w-4xl">{routeOutro}</p>
            ) : null}
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-6">
              Customer benefits that matter in Patna
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-6">
              What Patna customers say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-xl border border-gray-100 p-6 shadow-sm"
                >
                  <p className="text-gray-700 mb-4">“{testimonial.quote}”</p>
                  <p className="font-semibold text-[#0a2463]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-6">
              Explore more Patna cab services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internalLinks.map((link) => (
                <article
                  key={link.slug}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                    <Link href={link.slug} className="hover:underline">
                      {link.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          title="Frequently asked questions from Patna travelers"
          description="Local answers to common questions about pricing, routes, booking process, and pickup locations."
          faqs={faqs}
        />

        <CtaSection
          title="Book a trusted cab in Patna today"
          description="Call Maa Lakshmi Tour and Travels for quick confirmation, clear pricing, and a driver who knows Patna, Bihar routes, and airport pickup timings."
          phone={phone}
          whatsappUrl={whatsappUrl}
        />
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xl font-semibold text-[#d4af37] mb-3">
              Maa Lakshmi Tour and Travels
            </p>
            <p className="text-gray-400">
              Reliable taxi, airport, and tour services for Patna and Bihar travelers.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-3">Contact</p>
            <p className="text-gray-400">Phone: {phone}</p>
            <p className="text-gray-400">Email: {email}</p>
            <p className="text-gray-400">Location: {location}</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-3">Quick links</p>
            <div className="space-y-2">
              {internalLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={link.slug}
                  className="block text-gray-400 hover:text-white transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100 md:hidden">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <Link
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex-1 text-center rounded-lg bg-[#0a2463] text-white py-3 font-semibold"
          >
            Call Now
          </Link>
          <Link
            href={whatsappUrl}
            className="flex-1 text-center rounded-lg border border-[#0a2463] text-[#0a2463] py-3 font-semibold"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
