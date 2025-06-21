'use client';

import { Routes } from '@/constants/Routes';
import { Card } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

export function EventCard() {
  const router = useRouter();
  return (
    <Card
      className="w-full cursor-pointer rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
      onClick={() => router.push(Routes.이벤트_상세({ id: '1' }))}
    >
      <div className="aspect-square bg-gray-200 flex items-center justify-center text-red-500 text-lg font-bold">
        공연 이미지
      </div>
      <div className="p-2 space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">재밌는 공연 - 서울</h3>
        <p className="text-sm text-gray-600">어딘가</p>
        <p className="text-sm text-gray-600">2025.6.15 ~ 6.15</p>
        <p className="text-sm text-green-600 font-medium">R,S석 할인 10%</p>
        <p className="text-base font-bold text-black">117,000원</p>
      </div>
    </Card>
  );
}
