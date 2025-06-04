// app/reserve/step2/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function ReserveStep2() {
	const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

	const toggleSeat = (seat: string) => {
		setSelectedSeats((prev) =>
			prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
		);
	};

	const renderSeat = (label: string, color: string, available: number) => (
		<Tooltip key={label}>
			<TooltipTrigger asChild>
				<div
					onClick={() => toggleSeat(label)}
					className={`flex items-center justify-center text-lg font-bold border cursor-pointer transition-all
            ${color === "purple" ? "bg-purple-500" : "bg-lime-400"} 
            ${selectedSeats.includes(label) ? "ring-4 ring-black" : ""}`}
					style={{ width: 80, height: 80 }}
				>
					{label}
				</div>
			</TooltipTrigger>
			<TooltipContent>{`${label}석 잔여 ${available}석`}</TooltipContent>
		</Tooltip>
	);

	return (
		<main className="p-6 space-y-4">
			{/* 단계 표시 */}
			<div className="grid grid-cols-6 text-center text-sm font-semibold border-b pb-2">
				<div className="text-gray-500">01 공연일 / 회차선택</div>
				<div className="text-black">02 좌석선택</div>
				<div className="text-gray-500">03 가격 / 할인 선택</div>
				<div className="text-gray-500">04 배송선택 / 주문확인</div>
				<div className="text-gray-500">05 결제하기</div>
			</div>

			{/* 공연일/회차 변경 */}
			<div className="flex gap-4">
				<Select>
					<SelectTrigger className="w-[200px]">
						<SelectValue placeholder="공연일 변경" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="2025-05-01">2025-05-01</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[200px]">
						<SelectValue placeholder="회차 변경" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="19:00">19:00</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* 좌석 선택 영역 */}
			<div className="flex gap-4">
				{/* 무대 및 좌석 */}
				<div className="flex-1 space-y-4">
					<div className="text-center font-bold border py-2 bg-gray-100">
						STAGE
					</div>

					{/* 좌석 영역 */}
					<div className="grid grid-cols-3 gap-4 justify-items-center">
						{/* R석 */}
						{renderSeat("A", "purple", 100)}
						{renderSeat("B", "purple", 100)}
						<div></div>
						{/* S석 */}
						{renderSeat("1", "green", 50)}
						{renderSeat("2", "green", 50)}
						{renderSeat("3", "green", 50)}
						<div className="col-span-3 flex justify-center">
							{renderSeat("4", "green", 50)}
						</div>
					</div>
				</div>

				{/* 정보 영역 */}
				<div className="w-[300px] space-y-4">
					<Card className="p-4 text-sm space-y-1">
						<h3 className="font-semibold">좌석등급 / 가격</h3>
						<p className="text-purple-500">R석: 180,000원 (100석)</p>
						<p className="text-green-500">S석: 140,000원 (50석)</p>
					</Card>

					<Card className="p-4 text-sm space-y-1">
						<h3 className="font-semibold">선택한 좌석</h3>
						{selectedSeats.length > 0 ? (
							<ul className="list-disc pl-4">
								{selectedSeats.map((s) => (
									<li key={s}>{s}석</li>
								))}
							</ul>
						) : (
							<p className="text-gray-500">좌석을 선택해주세요.</p>
						)}
					</Card>

					<div className="flex gap-2">
						<Button variant="outline" className="flex-1">
							이전 단계
						</Button>
						<Button
							variant="outline"
							className="flex-1"
							onClick={() => setSelectedSeats([])}
						>
							좌석 다시 선택
						</Button>
					</div>
					<Button className="w-full" disabled={selectedSeats.length === 0}>
						다음 단계
					</Button>
				</div>
			</div>
		</main>
	);
}
