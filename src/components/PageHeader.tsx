import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

interface PageHeaderProps {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image }: PageHeaderProps) {
  return (
    <div>
      <div className="bg-hovav-header-blue flex items-center gap-6 px-6 py-8 md:px-12 md:py-12">
        {image ? (
          <div className="shrink-0 bg-white p-2 pb-8 shadow-md rotate-[-2deg] sm:p-3 sm:pb-10 md:p-4 md:pb-12">
            <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <Image
                src={image}
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        ) : (
          <div className="shrink-0 bg-white p-2 pb-8 shadow-md rotate-[-2deg] sm:p-3 sm:pb-10 md:p-4 md:pb-12">
            <PlaceholderImage className="h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64" />
          </div>
        )}
        <h1 className="font-heading text-3xl md:text-5xl">{title}</h1>
      </div>
      <div className="h-4 bg-black" />
    </div>
  );
}
