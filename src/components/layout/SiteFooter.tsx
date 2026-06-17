import PlaceholderImage from "@/components/PlaceholderImage";

// Mirrors the footer block found at the bottom of the Home page in the
// Canva design: a corkboard graphic, "meet the team" heading, a contact
// link, and a social media handle.
export default function SiteFooter() {
  return (
    <footer className="bg-hovav-footer-beige flex flex-col items-center gap-4 px-6 py-12 text-center">
      <PlaceholderImage label="לוח שעם" className="h-32 w-48" />
      <h2 className="text-2xl font-bold">הכירו את מערכת מחוברים</h2>
      <a href="#" className="underline">
        צרו אתנו קשר
      </a>
      <p className="text-sm text-black/60" dir="ltr">
        Keep up with our events on social media
        <br />
        <span className="font-semibold">@reallygreatsite</span>
      </p>
    </footer>
  );
}
