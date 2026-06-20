import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { FooterConfig } from "@/types/content";

export default function SiteFooter({ config }: { config: FooterConfig }) {
  return (
    <footer className="bg-hovav-footer-beige flex flex-col items-center gap-4 px-6 py-12 text-center">
      {config.image ? (
        <Image src={config.image} alt="" width={192} height={128} className="h-32 w-48 object-contain" />
      ) : (
        <PlaceholderImage label="לוח שעם" className="h-32 w-48" />
      )}
      <h2 className="text-2xl font-bold">{config.heading}</h2>
      <a href={config.contactUrl} className="underline">
        {config.contactLabel}
      </a>
      <p className="text-sm text-black/60" dir="ltr">
        {config.socialText}
        <br />
        <span className="font-semibold">{config.socialHandle}</span>
      </p>
    </footer>
  );
}
