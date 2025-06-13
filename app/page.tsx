"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Routes } from "@/constants/Routes";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<main className="min-h-screen bg-white">
			{/* 공연 리스트 */}
			<section className="p-6">
				<h2 className="text-2xl font-semibold mb-4">공연 목록</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{[...Array(4)].map((_, i) => (
						<Card key={i} className="w-full">
							<div className="aspect-square bg-gray-200 flex items-center justify-center text-red-500 text-lg font-bold">
								공연 이미지
							</div>
							<CardContent className="mt-2">
								<div className="text-red-500 font-semibold">공연 제목</div>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full"
									variant="outline"
									onClick={() =>
										router.push(Routes.이벤트_상세({ id: String(i) }))
									}
								>
									예매하기
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
