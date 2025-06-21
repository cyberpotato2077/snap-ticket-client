'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale'; // 한국어 locale (선택)

export function LocalTimeDisplay() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center font-bold text-lg">
      {format(now, 'yyyy년 MM월 dd일 (EEE) HH:mm:ss', { locale: ko })}
    </div>
  );
}
