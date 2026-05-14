interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: Breadcrumb[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://catinsurance.co.nz${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <span className="text-slate-300">/</span>}
              {index === items.length - 1 ? (
                <span className="text-slate-700 font-medium">{item.name}</span>
              ) : (
                <a href={item.href} className="hover:text-emerald-600 transition-colors">
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
