import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

// The banner that opens every section page in the Canva design: a light
// blue band with a square photo on one side, a big bold title, and a
// black divider bar underneath.

interface PageHeaderProps {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image }: PageHeaderProps) {
  return (
    <div>
      <div className="bg-hovav-header-blue flex items-center gap-6 px-6 py-8 md:px-12 md:py-12">
        {image ? (
          <Image
            src={image}
            alt=""
            width={160}
            height={160}
            className="h-28 w-28 shrink-0 rounded-md border-4 border-white object-cover shadow md:h-40 md:w-40"
          />
        ) : (
          <PlaceholderImage className="h-28 w-28 shrink-0 border-4 border-white md:h-40 md:w-40" />
        )}
        <h1 className="font-heading text-3xl md:text-5xl">{title}</h1>
      </div>
      <div className="h-4 bg-black" />
    </div>
  );
}
