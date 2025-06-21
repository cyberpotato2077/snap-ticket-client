import { useFunnel, type UseFunnelOptions } from '@use-funnel/browser';
import { Stepper } from '../stepper';
import { 구역선택 } from './구역선택';
import { 좌석선택 } from './좌석선택';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { match } from 'ts-pattern';

export function 좌석선택_Step({ onNextStep }: { onNextStep: () => void }) {
  const [step, setStep] = useState<'구역선택' | '좌석선택'>('구역선택');
  return (
    <main className="p-6 space-y-4">
      <Stepper step="좌석선택" />

      <div className="flex gap-4">
        {match(step)
          .with('구역선택', () => <구역선택 />)
          .with('좌석선택', () => <좌석선택 />)
          .exhaustive()}
        <div className="w-[300px] space-y-4">
          <Card className="p-4 text-sm space-y-1">
            <h3 className="font-semibold">좌석등급 / 가격</h3>
            <p className="text-purple-500">R석: 180,000원 (100석)</p>
            <p className="text-green-500">S석: 140,000원 (50석)</p>
          </Card>

          <Card className="p-4 text-sm space-y-1">
            <h3 className="font-semibold">선택한 좌석</h3>
            <p className="text-gray-500">좌석을 선택해주세요.</p>
          </Card>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" disabled>
              이전 단계
            </Button>
            <Button variant="outline" className="flex-1">
              좌석 다시 선택
            </Button>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              if (step === '구역선택') {
                setStep('좌석선택');
              } else {
                onNextStep();
              }
            }}
          >
            다음 단계
          </Button>
        </div>
      </div>
    </main>
  );
}
