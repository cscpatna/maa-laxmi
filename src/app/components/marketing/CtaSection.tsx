import Link from "next/link";

type CtaSectionProps = {
  title: string;
  description: string;
  phone: string;
  whatsappUrl: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function CtaSection({
  title,
  description,
  phone,
  whatsappUrl,
  primaryLabel = "Call Now",
  secondaryLabel = "WhatsApp Booking",
}: CtaSectionProps) {
  return (
    <section className="py-16 bg-[#0a2463] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center rounded-lg bg-[#d4af37] text-[#0a2463] px-6 py-3 font-semibold hover:opacity-90 transition"
          >
            {primaryLabel}
          </Link>
          <Link
            href={whatsappUrl}
            className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-[#0a2463] transition"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
