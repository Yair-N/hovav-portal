import Link from "next/link";
import { navSections } from "@/lib/nav-sections";

export default function MobileNav() {
  return (
    <details className="md:hidden group">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md [&::-webkit-details-marker]:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" className="group-open:hidden" />
          <line x1="3" y1="12" x2="21" y2="12" className="group-open:hidden" />
          <line x1="3" y1="18" x2="21" y2="18" className="group-open:hidden" />
          <line x1="18" y1="6" x2="6" y2="18" className="hidden group-open:block" />
          <line x1="6" y1="6" x2="18" y2="18" className="hidden group-open:block" />
        </svg>
      </summary>
      <nav className="absolute left-0 right-0 top-full z-50 border-b border-black/10 bg-white px-6 py-4">
        <ul className="flex flex-col gap-3 text-sm font-medium">
          {navSections.map((section) => (
            <li key={section.href}>
              <Link href={section.href} className="block py-1 hover:underline">
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
