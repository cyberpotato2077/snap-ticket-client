import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 예매하기Button } from "./예매하기Button";

export default function ShowDetailPage() {
	return (
		<main className="flex min-h-screen p-6 gap-4 bg-white">
			{/* 왼쪽: 공연 정보 */}
			<div className="flex-1">
				{/* 공연 상단 정보 */}
				<section className="flex gap-4 mb-4">
					{/* 이미지 */}
					<div className="w-48 h-64 bg-gray-200 flex items-center justify-center text-red-500 font-semibold">
						공연 이미지
					</div>

					{/* 텍스트 정보 */}
					<div className="flex-1 space-y-2">
						<h1 className="text-2xl font-bold text-red-500">공연 제목</h1>
						<div className="text-sm space-y-1">
							<p>장소: 세종문화회관</p>
							<p>공연기간: 2025.06.01 ~ 2025.06.15</p>
							<p>공연시간: 평일 19:00 / 주말 14:00</p>
							<p>관람 연령: 만 7세 이상</p>
							<p>가격: R석 100,000원 / S석 70,000원</p>
						</div>
						<div className="mt-2 p-2 border text-sm text-gray-600">
							본 상품은 자동예매방지(CAPTCHA)가 적용된 상품입니다.
							<span className="text-blue-500 ml-1 underline cursor-pointer">
								CAPTCHA 체크로 안내문 열림
							</span>
						</div>
					</div>
				</section>

				{/* 공연 상세 정보 */}
				<section className="mt-6">
					<h2 className="text-lg font-semibold mb-2">공연 상세정보</h2>
					<div className="w-full h-80 bg-gray-100 flex items-center justify-center text-red-500">
						이미지
					</div>
				</section>
			</div>

			{/* 오른쪽: 예매 사이드바 */}
			<aside className="w-80 shrink-0 bg-yellow-100 border-l p-4 sticky top-0 h-screen flex flex-col">
				<div className="text-center text-red-500 font-bold text-lg mb-2">
					서버 시간
				</div>

				<예매하기Button />

				<Card className="p-3 flex-1 flex flex-col gap-2">
					<p className="text-sm font-medium">날짜:</p>
					<select className="border px-2 py-1 rounded text-sm">
						<option>2025.06.01</option>
						<option>2025.06.02</option>
					</select>

					<p className="text-sm font-medium">회차:</p>
					<select className="border px-2 py-1 rounded text-sm">
						<option>1회 14:00</option>
						<option>2회 19:00</option>
					</select>

					<p className="text-sm font-medium">인원수:</p>
					<select className="border px-2 py-1 rounded text-sm">
						<option>1명</option>
						<option>2명</option>
					</select>

					<div className="flex items-center space-x-2">
						<Checkbox id="captcha" />
						<label htmlFor="captcha" className="text-sm">
							CAPTCHA 확인
						</label>
					</div>

					<p className="text-sm font-medium mt-2">선택 좌석</p>
					<ScrollArea className="border h-32 rounded p-2 bg-white text-sm">
						<p>R석 A열 1번</p>
						<p>R석 A열 2번</p>
						<p>S석 B열 5번</p>
					</ScrollArea>
				</Card>

				<Input placeholder="할인 코드 입력" className="mt-3" />
			</aside>
		</main>
	);
}
