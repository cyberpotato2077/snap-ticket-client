'use client';

import { type Dispatch, type SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Stepper } from '../stepper';

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

export function 구역선택({
  step,
  setStep,
}: {
  step: '구역선택' | '좌석선택';
  setStep: Dispatch<SetStateAction<'좌석선택' | '구역선택'>>;
}) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]));
    setStep('좌석선택');
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
    <svg viewBox="0 0 400 300" className="border bg-gray-100 flex-1" style={{ height: 300 }}>
      <title>구역 선택</title>
      {/* 무대 표시 */}
      <text x="50%" y="30" textAnchor="middle" fontWeight="bold">
        STAGE
      </text>

      {/* 좌석 렌더링 */}
      {seatShapes.map(renderSeat)}
    </svg>
  );
}
