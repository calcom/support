import { useRouter } from "next/router";

export default function Logo() {
  // route to /blog/brand when someone right clicks on the logo (because you only right click to get the logo)
  const router = useRouter();
  function rightClick(e: { type: string; preventDefault: () => void }) {
    if (e.type === "contextmenu") {
      router.push("https://design.cal.com/docs/branding");
      e.preventDefault();
    }
  }

  return (
    <h1
      onContextMenu={rightClick}
      className="brand-logo flex"
    >
      <span className="sr-only">Cal.com</span>
      <img className="h-5 w-auto inline" src="/logo.svg" alt="Cal.com logo" />
      <span className="ml-2 text-gray-600">Support Center</span>
    </h1>
  );
}
