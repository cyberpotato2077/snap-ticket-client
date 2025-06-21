import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Stepper } from './stepper';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

export function 공연일_회차선택_Step({ onNextStep }: { onNextStep: () => void }) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main className="p-6 space-y-4">
      {/* 상단 단계 표시 */}

      <Stepper step="공연일 / 회차선택" />

      {/* 본문 레이아웃 */}
      <div className="flex gap-4">
        {/* 공연일 선택 */}
        <Card className="p-4 space-y-2 col-span-1">
          <h2 className="font-semibold">관람일 선택</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
          <div className="flex justify-around mt-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-300 rounded-sm" /> 예매 가능일
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-300 rounded-sm" /> 선택한 예매일
            </div>
          </div>
        </Card>

        {/* 회차 선택 및 좌석 */}
        <div className="flex-1 space-y-4">
          <Card className="p-4 flex gap-4 items-center">
            <div className="w-24 h-32 bg-gray-200 flex items-center justify-center text-red-500 text-sm">
              공연 이미지
            </div>
            <div className="text-sm font-semibold text-red-500">공연 제목</div>
          </Card>
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
        <div className="flex-1 space-y-4 ">
          <Card className="p-4 text-sm space-y-1 h-full flex flex-col justify-between">
            <div className="space-y-1">
              <p>예매 정보</p>
              <p>일시: 2025.05.01 19:00</p>
              <p>선택좌석: R석 2매</p>
              <p>티켓금액: 200,000원</p>
              <p>할인: 없음</p>
              <p className="font-bold">총 결제금액: 200,000원</p>
            </div>

            <div>
              <Button className="w-full mt-4" onClick={onNextStep}>
                다음 단계
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>유의사항</AlertTitle>
        <AlertDescription>
          <p>예매 후 취소/환불은 공연일 3일 전까지만 가능합니다.</p>
        </AlertDescription>
      </Alert>
    </main>
  );
}
