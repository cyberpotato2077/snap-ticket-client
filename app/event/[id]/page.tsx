import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 예매하기Button } from "./예매하기Button";
import { LocalTimeDisplay } from "./local-time-display";

export default function ShowDetailPage() {
	return (
		<main className="flex min-h-screen p-6 gap-6 bg-white">
			{/* 왼쪽: 공연 정보 */}
			<div className="flex-1">
				{/* 공연 상단 정보 */}
				<section className="flex gap-6 mb-6">
					{/* 이미지 */}
					<div className="w-52 h-72 bg-gray-200 flex items-center justify-center text-red-500 font-semibold rounded-md shadow-inner">
						공연 이미지
					</div>

					{/* 텍스트 정보 */}
					<div className="flex-1 space-y-3">
						<h1 className="text-2xl font-bold text-red-500">재밌는 공연</h1>
						<ul className="text-sm space-y-1 text-gray-700">
							<li>장소: 세종문화회관</li>
							<li>공연기간: 2025.06.01 ~ 2025.06.15</li>
							<li>공연시간: 평일 19:00 / 주말 14:00</li>
							<li>관람 연령: 만 7세 이상</li>
							<li>
								가격:{" "}
								<span className="font-medium">
									R석 100,000원 / S석 70,000원
								</span>
							</li>
						</ul>
					</div>
				</section>

				{/* 공연 상세 정보 */}
				<section className="mt-8">
					<h2 className="text-lg font-semibold mb-3 text-gray-800">
						공연 상세정보
					</h2>
					<div className="w-full h-96 bg-gray-100 flex items-center justify-center text-red-500 rounded-md">
						상세 이미지
					</div>
				</section>
			</div>

			{/* 오른쪽: 예매 사이드바 */}
			<aside className="w-80 shrink-0 border-l pl-6 sticky top-6 h-[calc(100vh-3rem)] flex flex-col gap-4">
				{/* 서버 시간 */}
				<LocalTimeDisplay />

				{/* 예매 버튼 */}
				<예매하기Button />

				{/* 댓글 영역 */}
				<Card className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">
					<h3 className="text-sm font-medium text-gray-700">댓글</h3>
					<ScrollArea className="flex-1 pr-2">
						{/* 예시 댓글 */}
						<div className="text-sm text-gray-600">관람 기대돼요!</div>
						<div className="text-sm text-gray-600">작년보다 좌석이 적네요</div>
						{/* ... */}
					</ScrollArea>
				</Card>

				{/* 댓글 입력 */}
				<Input
					placeholder="의견을 입력하세요"
					className="mt-1 border-gray-300 focus:ring-red-500 focus:border-red-500"
				/>
			</aside>
		</main>
	);
}
