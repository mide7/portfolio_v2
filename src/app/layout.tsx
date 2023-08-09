import "@/styles/globals.scss";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ayomide Osunsami | Software Engineer",
  description:
    "Experienced software engineer showcasing a portfolio of creative and responsive web projects. Specializing in user-centric design and modern frontend technologies.",
  keywords:
    "Frontend developer, Responsive web design, User experience (UX), User interface (UI), HTML5, CSS3, JavaScript, ReactJS, Web animations, Cross-browser compatibility, Mobile-friendly design, Web accessibility, Interactive web design, Backend developer, Node.js, Express.js, RESTful APIs,  SQL, MongoDB, Authentication & authorization, API integration, Server deployment, Web security, Performance optimization, Web design portfolio, Creative web projects,  Web development showcase, Web design showcase, Modern web technologies, Creative coding,  User-centric design, Innovative web projects, Interactive websites, Responsive UI, Frontend frameworks, Backend frameworks, Web app development, HTML/CSS expertise",
  openGraph: {
    title: "Ayomide Osunsami | Software Engineer",
    description:
      "Experienced software engineer showcasing a portfolio of creative and responsive web projects. Specializing in user-centric design and modern frontend technologies.",
    url: "https://ayomide-osunsami.vercel.app/",
    type: "website",
    images: [
      {
        url: "/images/logo_icon.png",
      },
      {
        url: "/images/logo_icon_1200x630.png",
      },
    ],
    siteName: "Ayomide Osunsami | Software Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayomide Osunsami | Software Engineer",
    description:
      "Experienced software engineer showcasing a portfolio of creative and responsive web projects. Specializing in user-centric design and modern frontend technologies.",
    // url: "https://ayomide-osunsami.vercel.app/",
    // type: "website",
    images: [
      {
        url: "/images/logo_icon.png",
      },
      {
        url: "/images/logo_icon_1200x630.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
