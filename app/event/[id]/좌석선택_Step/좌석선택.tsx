'use client';

import { type Dispatch, type SetStateAction, useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

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

export function 좌석선택({
  step,
  setStep,
}: {
  step: '구역선택' | '좌석선택';
  setStep: Dispatch<SetStateAction<'좌석선택' | '구역선택'>>;
}) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seatId: string) => {
    if (!availableSeats.has(seatId)) return;
    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]));
  };

  return (
    <>
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
      </div>
      <Button
        onClick={() => {
          setStep('구역선택');
        }}
      >
        전체구역으로 돌아가기
      </Button>
    </>
  );
}
