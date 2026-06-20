import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => {
      const url = urlFor(value).width(800).auto("format").url();
      return (
        <div className="my-4">
          <Image
            src={url}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="w-full rounded-md"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
        {children}
      </a>
    ),
  },
};

interface RichTextProps {
  value?: PortableTextBlock[] | null;
  fallback?: string;
  className?: string;
}

export default function RichText({ value, fallback, className }: RichTextProps) {
  if (value && value.length > 0) {
    return (
      <div className={className}>
        <PortableText value={value} components={components} />
      </div>
    );
  }
  if (fallback) {
    return <p className={className}>{fallback}</p>;
  }
  return null;
}
