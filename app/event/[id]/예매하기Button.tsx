'use client';

import { Button } from '@/components/ui/button';
import { useOpenPaymentsModal } from './payments-modal';
import { useEffect } from 'react';

export function 예매하기Button() {
  const { openPaymentsModal } = useOpenPaymentsModal();

  useEffect(() => {
    openPaymentsModal();
  }, []);

  return (
    <Button className="w-full mb-2" onClick={() => openPaymentsModal()}>
      예매하기
    </Button>
  );
}
