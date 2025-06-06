"use client";

import { Button } from "@/components/ui/button";
import { useOpenPaymentsModal } from "./payments-modal";

export function 예매하기Button() {
	const { openPaymentsModal } = useOpenPaymentsModal();

	return (
		<Button className="w-full mb-2" onClick={() => openPaymentsModal()}>
			예매하기
		</Button>
	);
}
