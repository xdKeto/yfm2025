import { RiInstagramLine, RiWhatsappLine } from "@remixicon/react";

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#mancing", label: "Youth Fishing Mania" },
  { href: "#makrab", label: "One Night with Youth" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT_SECTION = {
  about: "adalah acara tahunan setiap Juli yang menjadi wadah bagi pemuda untuk mempererat relasi, bertumbuh dalam iman, dan membangun kedekatan dengan gereja serta sesama.",
  tema: 'dengan tujuan mempererat kebersamaan pemuda GKI PTI agar saling mendukung, melayani, dan bertumbuh bersama dalam kasih Kristus.',
};

export const MANCING_SECTION = {
  lokasi: "Monstero Fishing Park",
  usia: "18-25 tahun",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSd1tXa5O8z6gwm8kju0e2AG_MOTqCyE32c7RgP2a04eX-byCA/viewform"
}

export const MAKRAB_SECTION = {
  lokasi: "GSG B lt. 2 GKI PTI",
  usia: "16-25 tahun",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSdE6TEp2FaJKTTbUDGRc5laPo0V_QmeD6-qn2tBZXsNpLkatw/viewform"
}

export const CONTACT_SECTION = {
  headline: "JOIN US!",
  sub: "For more information, feel free to contact us at",
  socialLinks : [
    {
      platform: "Whatsapp",
      icon: RiWhatsappLine,
      ariaLabel: "Contact us!",
      url: "https://wa.link/v28qsd"
    },
    {
      platform: "Instagram",
      icon: RiInstagramLine,
      ariaLabel: "Follow us on Insta!",
      url: "https://www.instagram.com/youthsociety_gkipti/"
    }
  ]
}
