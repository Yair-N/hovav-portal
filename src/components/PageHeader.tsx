import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div>
      <div className="section-header">
        <div className="polaroid">
          {image ? (
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
              <Image
                src={image}
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
          ) : (
            <PlaceholderImage className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40" />
          )}
        </div>
        <div className="section-header-text">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}
