import { MessageCircle } from "lucide-react";
import {FaWhatsapp} from "react-icons/fa"

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919392221028"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-green-500
      hover:bg-green-600
      text-white
      p-4
      rounded-full
      shadow-xl
      transition
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
