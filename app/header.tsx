"use client";

import { useRouter } from "next/navigation";
import { NavigationMenuGroup } from "./navigation-menu-group";
import { Routes } from "@/constants/Routes";

export function Header() {
	const router = useRouter();

	return (
		<header className="flex justify-between items-center p-4 border-b top-0 sticky z-11 bg-white">
			<button
				type="button"
				className="text-xl cursor-pointer"
				onClick={() => {
					router.push(Routes.홈());
				}}
			>
				SnapTicket
			</button>
			<NavigationMenuGroup />
		</header>
	);
}
