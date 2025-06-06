import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// @TODO: 스텝명 구체화
export function Step1({ onNextStep }: { onNextStep: () => void }) {
	return (
		<main className="p-6 space-y-4">
			{/* 상단 단계 표시 */}
			<div className="grid grid-cols-6 text-center text-sm font-semibold border-b pb-2">
				<div className="text-black">01 공연일 / 회차선택</div>
				<div className="text-gray-500">02 좌석선택</div>
				<div className="text-gray-500">03 가격 / 할인 선택</div>
				<div className="text-gray-500">04 배송선택 / 주문확인</div>
				<div className="text-gray-500">05 결제하기</div>
			</div>

			{/* 본문 레이아웃 */}
			<div className="grid grid-cols-4 gap-4">
				{/* 공연일 선택 */}
				<Card className="p-4 space-y-2 col-span-1">
					<h2 className="font-semibold">관람일 선택</h2>
					<p className="text-sm">2025년 5월</p>
					<div className="grid grid-cols-7 gap-1 text-center text-xs">
						<div>일</div>
						<div>월</div>
						<div>화</div>
						<div>수</div>
						<div>목</div>
						<div>금</div>
						<div>토</div>
						{/* 예시 날짜 */}
						<div className="col-span-5"></div>
						<div className="bg-green-300 text-white rounded cursor-pointer">
							1
						</div>
						<div className="bg-gray-200 rounded text-gray-400">2</div>
						<div className="bg-green-300 text-white rounded cursor-pointer">
							3
						</div>
						<div className="bg-gray-200 rounded text-gray-400">4</div>
					</div>
					<div className="flex justify-around mt-2 text-xs">
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 bg-green-300 rounded-sm"></div> 예매
							가능일
						</div>
						<div className="flex items-center gap-1">
							<div className="w-3 h-3 bg-gray-300 rounded-sm"></div> 선택한
							예매일
						</div>
					</div>
				</Card>

				{/* 회차 선택 및 좌석 */}
				<div className="col-span-1 space-y-4">
					<Card className="p-4">
						<h2 className="font-semibold">회차 선택</h2>
						<p className="mt-2 text-sm">[1회] 19:00</p>
					</Card>

					<Card className="p-4">
						<h2 className="font-semibold">좌석 종류 / 잔여석</h2>
						<div className="mt-2 space-y-1 text-sm">
							<p className="text-pink-500">R석 (잔여: 100석)</p>
							<p className="text-green-500">S석 (잔여: 50석)</p>
						</div>
					</Card>
				</div>

				{/* 공연 썸네일 + 예매정보 */}
				<div className="col-span-1 space-y-4">
					<Card className="p-4 flex gap-4 items-center">
						<div className="w-24 h-32 bg-gray-200 flex items-center justify-center text-red-500 text-sm">
							공연 이미지
						</div>
						<div className="text-sm font-semibold text-red-500">공연 제목</div>
					</Card>

					<Card className="p-4 text-sm space-y-1">
						<p>예매 정보</p>
						<p>일시: 2025.05.01 19:00</p>
						<p>선택좌석: R석 2매</p>
						<p>티켓금액: 200,000원</p>
						<p>할인: 없음</p>
						<p className="font-bold">총 결제금액: 200,000원</p>
					</Card>

					<Button className="w-full" onClick={onNextStep}>
						다음 단계
					</Button>
				</div>
			</div>

			{/* 유의사항 */}
			<Card className="p-4 border-red-400 border text-sm text-red-500">
				유의사항: 예매 후 취소/환불은 공연일 3일 전까지만 가능합니다.
			</Card>
		</main>
	);
}
