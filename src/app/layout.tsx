import "@/styles/globals.scss";

import ToastProvider from "@/components/providers/toast";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Ayomide Osunsami | Software Engineer",
	description:
		"Experienced software engineer showcasing a portfolio of creative and responsive web projects. Specializing in user-centric design and modern frontend technologies.",
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE,
	},
	keywords: [
		"Software engineer",
		"Full-stack developer",
		"Frontend developer",
		"Backend developer",
		"React",
		"Next.js",
		"Node.js",
		"MongoDB",
		"PostgreSQL",
		"RESTful APIs",
		"GraphQL",
	],
	openGraph: {
		title: "Ayomide Osunsami | Software Engineer",
		description:
			"Experienced software engineer showcasing a portfolio of creative and responsive web projects. Specializing in user-centric design and modern frontend technologies.",
		url: "https://ayomide-osunsami.vercel.app/",
		type: "website",
		images: [
			{
				url: "/images/logo_icon_1200x630.png",
				height: 630,
				width: 1200,
			},
			{
				url: "/images/logo_icon_192x108.png",
				width: 192,
				height: 108,
			},
			{
				url: "/images/logo_icon_32x32.png",
				width: 32,
				height: 32,
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
				url: "/images/logo_icon_1200x630.png",
				height: 630,
				width: 1200,
			},
			{
				url: "/images/logo_icon_192x108.png",
				width: 192,
				height: 108,
			},
			{
				url: "/images/logo_icon_32x32.png",
				width: 32,
				height: 32,
			},
		],
	},
	metadataBase: new URL("https://ayomide-osunsami.vercel.app"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${font.className}`}>
				<ToastProvider>{children}</ToastProvider>
			</body>
		</html>
	);
}
