'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const ROWS = 10;
const COLS = 15;

// 예시: 초록색 좌석 위치만 선택 가능
const availableSeats = new Set([
  '2-5',
  '2-6',
  '2-7',
  '2-8',
  '2-9',
  '3-4',
  '3-5',
  '3-6',
  '3-7',
  '3-8',
  '3-9',
  '3-10',
  '4-5',
  '4-6',
  '4-7',
  '4-8',
  '4-9',
  '5-5',
  '5-6',
  '5-7',
  '5-8',
  '5-9',
  '6-6',
  '6-7',
  '6-8',
  '6-9',
  '7-7',
  '7-8',
  '7-9',
]);

// @TODO: 스텝명 구체화
export function Step3({ onNextStep }: { onNextStep: () => void }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seatId: string) => {
    if (!availableSeats.has(seatId)) return;
    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]));
  };

  return (
    <main className="p-6 space-y-4">
      {/* 상단 단계 및 선택 */}
      <div className="grid grid-cols-6 text-center text-sm font-semibold border-b pb-2">
        <div className="text-gray-500">01 공연일 / 회차선택</div>
        <div className="text-black">02 좌석선택</div>
        <div className="text-gray-500">03 가격 / 할인 선택</div>
        <div className="text-gray-500">04 배송선택 / 주문확인</div>
        <div className="text-gray-500">05 결제하기</div>
      </div>

      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="공연장 변경" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hall1">대공연장</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="회차 변경" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="night">2025-06-10 19:00</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-sm text-gray-600">3 구역의 좌석 배치도입니다</p>

      {/* 좌석 격자 */}
      <div className="flex gap-4">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${COLS}, 20px)` }}>
          {Array.from({ length: ROWS * COLS }, (_, i) => {
            const row = Math.floor(i / COLS) + 1;
            const col = (i % COLS) + 1;
            const id = `${row}-${col}`;
            const isAvailable = availableSeats.has(id);
            const isSelected = selectedSeats.includes(id);

            return (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <div
                    onClick={() => toggleSeat(id)}
                    className={`w-5 h-5 border m-[1px] cursor-pointer transition-all
                      ${isAvailable ? 'bg-green-500' : 'bg-gray-200'}
                      ${isSelected ? 'ring-2 ring-black' : ''}`}
                    title={id}
                  />
                </TooltipTrigger>
                {isAvailable && <TooltipContent>{`${id} 좌석 선택 가능`}</TooltipContent>}
              </Tooltip>
            );
          })}
        </div>

        {/* 정보 및 버튼 */}
        <div className="w-[300px] space-y-4">
          <Card className="p-4 text-sm space-y-1">
            <h3 className="font-semibold">좌석등급 / 가격</h3>
            <p className="text-purple-500">R석: 180,000원 (100석)</p>
            <p className="text-green-500">S석: 140,000원 (50석)</p>
          </Card>

          <Card className="p-4 text-sm">
            <h3 className="font-semibold mb-1">선택한 좌석</h3>
            {selectedSeats.length > 0 ? (
              <ul className="list-disc pl-4">
                {selectedSeats.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">좌석을 선택해주세요.</p>
            )}
          </Card>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" disabled>
              이전 단계
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => setSelectedSeats([])}>
              좌석 다시 선택
            </Button>
          </div>
          <Button className="w-full" disabled={selectedSeats.length === 0} onClick={onNextStep}>
            다음 단계
          </Button>
        </div>
      </div>
    </main>
  );
}
