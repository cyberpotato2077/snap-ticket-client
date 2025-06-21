import type { PaymentStep } from '@/models/common';

export function Stepper({
  step,
}: {
  step: PaymentStep;
}) {
  const mainColor = 'text-purple-600';
  const disabledColor = 'text-gray-500';
  return (
    <div className="grid grid-cols-6 text-center text-sm font-semibold border-b pb-2">
      <div className={step === '공연일 / 회차선택' ? mainColor : disabledColor}>01 공연일 / 회차선택</div>
      <div className={step === '좌석선택' ? mainColor : disabledColor}>02 좌석선택</div>
      <div className={step === '가격 / 할인 선택' ? mainColor : disabledColor}>03 가격 / 할인 선택</div>
      <div className={step === '배송선택 / 주문확인' ? mainColor : disabledColor}>04 배송선택 / 주문확인</div>
      <div className={step === '결제하기' ? mainColor : disabledColor}>05 결제하기</div>
    </div>
  );
}
