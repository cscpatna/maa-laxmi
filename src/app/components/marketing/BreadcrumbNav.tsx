import Link from "next/link";

type BreadcrumbItemData = {
  label: string;
  href?: string;
};

type BreadcrumbNavProps = {
  items: BreadcrumbItemData[];
};

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[#0a2463] transition">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#0a2463]">{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
