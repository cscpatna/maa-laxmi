import JsonLd from "./JsonLd";

type SeoStructuredDataProps = {
  schemas: Array<Record<string, unknown>>;
};

export default function SeoStructuredData({ schemas }: SeoStructuredDataProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`schema-${index}`} data={schema} />
      ))}
    </>
  );
}
