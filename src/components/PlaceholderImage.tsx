// Stand-in box for an image slot that has no real photo yet. Keeps the
// layout identical to what it'll look like once a teacher/student uploads
// a real image, so swapping in real content later won't shift anything.

interface PlaceholderImageProps {
  label?: string;
  className?: string;
}

export default function PlaceholderImage({
  label = "תמונה",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-md border-2 border-dashed border-black/20 bg-black/5 text-sm text-black/40 ${className}`}
    >
      {label}
    </div>
  );
}
