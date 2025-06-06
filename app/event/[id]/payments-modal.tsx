import { overlay } from "overlay-kit";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
	useFunnel,
	type UseFunnelOptions,
	type UseFunnelResults,
} from "@use-funnel/browser";
import { Button } from "@/components/ui/button";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

type T = {
	step1: {};
	step2: {};
	step3: {};
	step4: {};
};

export function useOpenPaymentsModal() {
	const openPaymentsModal = () =>
		overlay.open(({ isOpen, close, unmount }) => (
			<PaymentsModal isOpen={isOpen} closeModal={unmount} />
		));
	return { openPaymentsModal };
}

export function PaymentsModal({
	isOpen,
	closeModal,
}: { isOpen: boolean; closeModal: VoidFunction }) {
	const funnel = useFunnel<T>({
		id: "use-funnel-history-example",
		initial: {
			step: "step1",
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
				style={{ minWidth: 800 }}
			>
				<VisuallyHidden>
					<DialogTitle>예메메</DialogTitle>
				</VisuallyHidden>
				<funnel.Render
					step1={({ history }) => (
						<Step1 onNextStep={() => history.push("step2")} />
					)}
					step2={({ history }) => (
						<Step2 onNextStep={() => history.push("step3")} />
					)}
					step3={({ history }) => (
						<Step3 onNextStep={() => history.push("step4")} />
					)}
					step4={({ history }) => (
						<Step4
							onNextStep={() => {
								closeModal();
							}}
						/>
					)}
				/>
			</DialogContent>
		</Dialog>
	);
}
