'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const seatShapes = [
  {
    id: 'A',
    label: 'A',
    shape: 'circle',
    cx: 80,
    cy: 80,
    r: 30,
    color: '#a855f7',
    available: 100,
  },
  {
    id: 'B',
    label: 'B',
    shape: 'rect',
    x: 140,
    y: 50,
    width: 60,
    height: 60,
    color: '#a855f7',
    available: 100,
  },
  {
    id: '1',
    label: '1',
    shape: 'ellipse',
    cx: 80,
    cy: 180,
    rx: 40,
    ry: 25,
    color: '#84cc16',
    available: 50,
  },
  {
    id: '2',
    label: '2',
    shape: 'polygon',
    points: '160,180 190,210 130,210',
    color: '#84cc16',
    available: 50,
  },
  {
    id: '3',
    label: '3',
    shape: 'path',
    d: 'M240,180 A40,40 0 0,1 280,220 L240,180 Z',
    color: '#84cc16',
    available: 50,
  },
];

export function Step2({ onNextStep }: { onNextStep: () => void }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]));
  };

  const renderSeat = (seat: any) => {
    const isSelected = selectedSeats.includes(seat.id);
    const strokeProps = isSelected ? { stroke: 'black', strokeWidth: 4 } : {};

    const commonProps = {
      onClick: () => toggleSeat(seat.id),
      fill: seat.color,
      cursor: 'pointer',
      ...strokeProps,
    };

    const seatElement = (() => {
      switch (seat.shape) {
        case 'circle':
          return <circle cx={seat.cx} cy={seat.cy} r={seat.r} {...commonProps} />;
        case 'rect':
          return <rect x={seat.x} y={seat.y} width={seat.width} height={seat.height} {...commonProps} />;
        case 'ellipse':
          return <ellipse cx={seat.cx} cy={seat.cy} rx={seat.rx} ry={seat.ry} {...commonProps} />;
        case 'polygon':
          return <polygon points={seat.points} {...commonProps} />;
        case 'path':
          return <path d={seat.d} {...commonProps} />;
        default:
          return null;
      }
    })();

    return (
      <Tooltip key={seat.id}>
        <TooltipTrigger asChild>{seatElement}</TooltipTrigger>
        <TooltipContent>{`${seat.label}석 잔여 ${seat.available}석`}</TooltipContent>
      </Tooltip>
    );
  };

  return (
    <main className="p-6 space-y-4">
      <div className="grid grid-cols-6 text-center text-sm font-semibold border-b pb-2">
        <div className="text-gray-500">01 공연일 / 회차선택</div>
        <div className="text-black">02 좌석선택</div>
        <div className="text-gray-500">03 가격 / 할인 선택</div>
        <div className="text-gray-500">04 배송선택 / 주문확인</div>
        <div className="text-gray-500">05 결제하기</div>
      </div>

      <div className="flex gap-4">
        <svg viewBox="0 0 400 300" className="border bg-gray-100 flex-1" style={{ height: 300 }}>
          {/* 무대 표시 */}
          <text x="50%" y="30" textAnchor="middle" fontWeight="bold">
            STAGE
          </text>

          {/* 좌석 렌더링 */}
          {seatShapes.map(renderSeat)}
        </svg>

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
