"use client";

import type * as React from "react";
import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuGroup() {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/">로그인</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/">내 티켓</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
