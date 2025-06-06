import { overlay } from "overlay-kit";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
				예메메
			</DialogContent>
		</Dialog>
	);
}
