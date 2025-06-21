import { overlay } from 'overlay-kit';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { useFunnel, type UseFunnelOptions } from '@use-funnel/browser';
import { 공연일_회차선택_Step } from './공연일_회차선택_Step';
import { 가격할인_Step } from './가격할인_Step';
import { 좌석선택_Step } from './좌석선택_Step';

type T = {
  step1: {};
  step2: {};
  step3: {};
  step4: {};
};

export function useOpenPaymentsModal() {
  const openPaymentsModal = () =>
    overlay.open(({ isOpen, close, unmount }) => <PaymentsModal isOpen={isOpen} closeModal={unmount} />);
  return { openPaymentsModal };
}

export function PaymentsModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: VoidFunction }) {
  const funnel = useFunnel<T>({
    id: 'use-funnel-history-example',
    initial: {
      step: 'step1',
      context: {},
    },
  } satisfies UseFunnelOptions<T>);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        onInteractOutside={(event) => {
          // 기본 동작 방지. 바깥 클릭해도 닫히지 않음
          event.preventDefault();
        }}
        onEscapeKeyDown={(event) => {
          // 기본 동작 방지. 바깥 클릭해도 닫히지 않음
          event.preventDefault();
        }}
        style={{ minWidth: 1000 }}
      >
        <VisuallyHidden>
          <DialogTitle>예메메</DialogTitle>
        </VisuallyHidden>
        <funnel.Render
          step1={({ history }) => <공연일_회차선택_Step onNextStep={() => history.push('step2')} />}
          step2={({ history }) => (
            <좌석선택_Step onPrevStep={() => history.push('step1')} onNextStep={() => history.push('step3')} />
          )}
          step3={({ history }) => (
            <가격할인_Step
              onPrevStep={() => history.push('step2')}
              onNextStep={() => {
                closeModal();
              }}
            />
          )}
          step4={({ history }) => <></>}
        />
      </DialogContent>
    </Dialog>
  );
}
