import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-24
      right-9
      z-50
      bg-white
      text-black
      p-2
      rounded-full
      shadow-xl
      "
    >
      <ChevronUp />
    </button>
  );
}
