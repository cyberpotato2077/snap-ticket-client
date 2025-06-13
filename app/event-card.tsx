import { CardContent, CardFooter } from "@/components/ui/card";
import { Routes } from "@/constants/Routes";
import { Card, Button } from "@radix-ui/themes";
import router from "next/router";

export function EventCard() {
	return (
		<Card className="w-full">
			<div className="aspect-square bg-gray-200 flex items-center justify-center text-red-500 text-lg font-bold">
				공연 이미지
			</div>
			<CardContent className="mt-2">
				<div className="font-semibold">공연 제목</div>
			</CardContent>
			<CardFooter>
				<Button
					className="w-full"
					variant="outline"
					onClick={() => router.push(Routes.이벤트_상세({ id: "1" }))}
				>
					예매하기
				</Button>
			</CardFooter>
		</Card>
	);
}
