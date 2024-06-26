import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SiYoutube } from "react-icons/si";
import Link from "next/link";
export default function Footer() {
	return (
		<footer className=" border-t-[0.5px] py-10 flex items-center justify-center flex-col gap-5">
			<div className="flex items-center gap-2">
				<Link href="https://github.com/pradeeptosarkar" target="_blank">
					<GitHubLogoIcon className="w-5 h-5 hover:scale-125 transition-all" />
				</Link>
				<Link
					href="https://www.linkedin.com/in/pradeeptosarkar"
					target="_blank"
				>
					<LinkedInLogoIcon className="w-5 h-5 hover:scale-125 transition-all" />
				</Link>
				
			</div>
			<h1 className="text-sm">
				&copy; 2024 Built with ❤️ by Pradeepto Sarkar. All rights reserved
			</h1>
		</footer>
	);
}
