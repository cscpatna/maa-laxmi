import JsonLd from "@/app/components/seo/JsonLd";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  description?: string;
  faqs: FaqItem[];
};

export default function FaqSection({ title, description, faqs }: FaqSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <JsonLd data={faqSchema} />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2463] mb-4">
          {title}
        </h2>
        {description ? (
          <p className="text-lg text-gray-600 mb-8 max-w-4xl">{description}</p>
        ) : null}
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <article
              key={`${faq.question}-${index}`}
              className="rounded-xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0a2463] mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
