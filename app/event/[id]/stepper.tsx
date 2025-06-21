import type { PaymentStep } from '@/models/common';

export function Stepper({
  step,
}: {
  step: PaymentStep;
}) {
  return (
    <div className="grid grid-cols-6 text-center text-sm font-semibold border-b pb-2">
      <div className={step === '공연일 / 회차선택' ? 'text-black' : 'text-gray-500'}>01 공연일 / 회차선택</div>
      <div className={step === '좌석선택' ? 'text-black' : 'text-gray-500'}>02 좌석선택</div>
      <div className={step === '가격 / 할인 선택' ? 'text-black' : 'text-gray-500'}>03 가격 / 할인 선택</div>
      <div className={step === '배송선택 / 주문확인' ? 'text-black' : 'text-gray-500'}>04 배송선택 / 주문확인</div>
      <div className={step === '결제하기' ? 'text-black' : 'text-gray-500'}>05 결제하기</div>
    </div>
  );
}
