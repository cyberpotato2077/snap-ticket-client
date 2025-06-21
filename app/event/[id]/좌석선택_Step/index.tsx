import { Stepper } from '../stepper';
import { 구역선택 } from './구역선택';
import { 좌석선택 } from './좌석선택';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { match } from 'ts-pattern';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function 좌석선택_Step({
  onPrevStep,
  onNextStep,
}: {
  onPrevStep: () => void;
  onNextStep: () => void;
}) {
  const [step, setStep] = useState<'구역선택' | '좌석선택'>('구역선택');
  return (
    <main className="p-6 space-y-4">
      <Stepper step="좌석선택" />

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex justify-around">
            <div className="flex items-center gap-2">
              <div>관람일변경</div>
              <Select>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="123" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'1'}>1</SelectItem>
                  <SelectItem value={'2'}>2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <div>관람일변경</div>
              <Select>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="123" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'1'}>1</SelectItem>
                  <SelectItem value={'2'}>2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {match(step)
            .with('구역선택', () => <구역선택 step={step} setStep={setStep} />)
            .with('좌석선택', () => <좌석선택 step={step} setStep={setStep} />)
            .exhaustive()}
        </div>
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

          <div className="flex">
            <Button variant="outline" className="flex-1">
              좌석 다시 선택
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                onPrevStep();
              }}
            >
              이전 단계
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                onNextStep();
              }}
            >
              다음 단계
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
