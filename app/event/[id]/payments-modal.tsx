import { overlay } from "overlay-kit";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
	useFunnel,
	type UseFunnelOptions,
	type UseFunnelResults,
} from "@use-funnel/browser";
import { Button } from "@/components/ui/button";

type T = {
	helloStep: { message: string };
	worldStep: { message: string; message2: string };
};

export function useOpenPaymentsModal() {
	const openPaymentsModal = () =>
		overlay.open(({ isOpen, close }) => (
			<PaymentsModal isOpen={isOpen} closeModal={close} />
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
			step: "helloStep",
			context: {
				message: "Hello",
			},
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
			>
				<VisuallyHidden>
					<DialogTitle>예메메</DialogTitle>
				</VisuallyHidden>
				<funnel.Render
					helloStep={({ context, history }) => (
						<>
							<div> {context.message}, </div>
							<Button
								onClick={() => history.push("worldStep", { message2: "World" })}
							>
								hi
							</Button>
						</>
					)}
					worldStep={({ context }) => (
						<div>
							{context.message}, {context.message2}
						</div>
					)}
				/>
			</DialogContent>
		</Dialog>
	);
}
