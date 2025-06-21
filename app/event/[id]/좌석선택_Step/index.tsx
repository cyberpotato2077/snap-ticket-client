import { useFunnel, type UseFunnelOptions } from '@use-funnel/browser';
import { Stepper } from '../stepper';
import { 구역선택 } from './구역선택';
import { 좌석선택 } from './좌석선택';

type T = {
  구역선택: {};
  좌석선택: {};
};

export function 좌석선택_Step({ onNextStep }: { onNextStep: () => void }) {
  const funnel = useFunnel<T>({
    id: '좌석선택',
    initial: {
      step: '구역선택',
      context: {},
    },
  } satisfies UseFunnelOptions<T>);
  return (
    <main className="p-6 space-y-4">
      <Stepper step="좌석선택" />

      <funnel.Render
        구역선택={({ history }) => <구역선택 onNextStep={() => history.push('좌석선택')} />}
        좌석선택={() => (
          <좌석선택
            onNextStep={() => {
              onNextStep();
            }}
          />
        )}
      />
    </main>
  );
}
