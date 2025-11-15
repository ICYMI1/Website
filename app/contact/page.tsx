"use client";
import { Facebook, Github, Instagram, Mail, Twitter } from "lucide-react";
import { FaTiktok, FaYoutube, FaSnapchat, FaPinterest, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/icymi_1",
		label: "Twitter",
		handle: "incaseyoumissedit",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:contact@incaseyoumissedit.co.za",
		label: "Email",
		handle: "contact@incaseyoumissedit.co.za",
	},
	{
		icon: <FaTiktok size={20} />,
		href: "https://www.tiktok.com/@incaseyoumissedit_1",
		label: "TikTok",
		handle: "incaseyoumissedit_1",
	},
	{
		icon: <FaYoutube size={20} />,
		href: "https://www.youtube.com/@Incaseyoumissedit-1",
		label: "YouTube",
		handle: "@incaseyoumissedit-1",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/incaseyoumissedit__1/",
		label: "Instagram",
		handle: "@incaseyoumissedit__1",
	},
	{
		icon: <Facebook size={20} />,
		href: "https://www.facebook.com/people/Incaseyoumissedit/61563250209092/",
		label: "Facebook",
		handle: "incaseyoumissedit",
	},
	{
		icon: <FaSnapchat size={20} />,
		href: "https://snapchat.com/t/AVBTbHjI",
		label: "SnapChat",
		handle: "@incaseyoumissedit",
	},
	{
		icon: <FaPinterest size={20} />,
		href: "https://za.pinterest.com/incaseyoumisseditt/",
		label: "Pinterest",
		handle: "@incaseyoumisseditt",
	},
	{
		icon: <FaWhatsapp size={20} />,
		href: "https://whatsapp.com/channel/0029Vb1u3jTAjPXFqrHUkW34",
		label: "WhatsApp",
		handle: "incaseyoumissedit",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-white/0 via-zinc-100 to-white/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-4 mx-auto mt-20 sm:mt-0 sm:gap-8 sm:grid-cols-3 lg:gap-16">
					{socials.map((s, index) => (
						<Card key={index}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-3 duration-700 group sm:gap-4 md:gap-8 md:py-24 lg:pb-48 md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-sm duration-1000 border rounded-full text-zinc-700 group-hover:text-zinc-900 group-hover:bg-zinc-100 border-zinc-300 bg-white group-hover:border-zinc-600 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-base sm:text-lg md:text-xl font-medium duration-150 lg:text-xl xl:text-3xl text-zinc-800 group-hover:text-zinc-900 font-display text-center px-2">
										{s.handle}
									</span>
									<span className="mt-2 sm:mt-4 text-xs sm:text-sm text-center duration-1000 text-zinc-600 group-hover:text-zinc-800">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
