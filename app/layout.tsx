import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "@/components/nav/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/QueryProvider";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://github.com/pradeeptosarkar/upVotes"),

	title: {
		template: "%s | upVotes",
		default: "upVotes",
	},
	authors: {
		name: "pradeeptosarkar",
	},

	description:
		"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
	openGraph: {
		title: "upVotes",
		description:
			"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
		url: "https://github.com/pradeeptosarkar/upVotes",
		siteName: "Daily Vote",
		images: "/og.png",
		type: "website",
	},
	keywords: ["pradeeptosarkar"],
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} bg-[#09090B] text-gray-200 antialiased  py-10`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<QueryProvider>
						<main className="flex flex-col max-w-7xl mx-auto min-h-screen space-y-10 p-5">
							<Navbar />
							<div className="w-full flex-1 ">{children}</div>
							<Footer />
						</main>
					</QueryProvider>

					<Toaster position="top-center" reverseOrder={false} />
				</ThemeProvider>
			</body>
		</html>
	);
}
