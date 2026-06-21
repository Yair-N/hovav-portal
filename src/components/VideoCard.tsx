import RichText from "./RichText";
import type { SectionItem } from "@/types/content";
import type { PortableTextBlock } from "@portabletext/types";

function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") && u.searchParams.has("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").pop();
      return `https://player.vimeo.com/video/${id}`;
    }
  } catch { /* invalid URL */ }
  return null;
}

export default function VideoCard({ item }: { item: SectionItem }) {
  const richText = item.bodyRich || item.descriptionRich;
  const plainText = item.body || item.description || "";
  const videoSrc = item.videoFileUrl || item.videoUrl;
  const embedUrl = item.videoUrl ? getEmbedUrl(item.videoUrl) : null;

  return (
    <article className="flex flex-col gap-3 max-w-2xl mx-auto">
      {item.videoFileUrl ? (
        <video
          src={item.videoFileUrl}
          controls
          className="w-full aspect-video rounded-md bg-black"
        />
      ) : embedUrl ? (
        <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black">
          <iframe
            src={embedUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : videoSrc ? (
        <video
          src={videoSrc}
          controls
          className="w-full aspect-video rounded-md bg-black"
        />
      ) : null}
      <h3 className="text-lg font-bold">{item.title}</h3>
      {item.author && <p className="text-xs text-black/50">מאת: {item.author}</p>}
      <RichText
        value={richText as PortableTextBlock[]}
        fallback={plainText}
        className="text-sm leading-relaxed text-black/70"
      />
    </article>
  );
}
