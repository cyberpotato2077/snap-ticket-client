"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Comment {
	id: number;
	text: string;
}

export function CommentBox() {
	const [comments, setComments] = useState<Comment[]>([]);
	const [input, setInput] = useState("");
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleSubmit = () => {
		if (input.trim() === "") return;

		setComments((prev) => [...prev, { id: Date.now(), text: input.trim() }]);
		setInput("");
	};

	useEffect(() => {
		if (comments.length > 0) {
			// 댓글 추가될 때 스크롤 아래로 이동
			scrollRef.current?.scrollTo({
				top: scrollRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [comments]);

	return (
		<Card className="flex flex-col gap-4 flex-1 overflow-hidden">
			<ScrollArea className="flex-1 px-4">
				<div ref={scrollRef} className="flex flex-col gap-2">
					{comments.map((comment) => (
						<div
							key={comment.id}
							className="self-start bg-gray-200 text-sm px-3 py-2 rounded-xl max-w-[80%] text-gray-800"
						>
							{comment.text}
						</div>
					))}
				</div>
			</ScrollArea>

			<div className="px-4 flex gap-2">
				<Input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="의견을 입력하세요"
					className="flex-1"
					onKeyDown={(e) => {
						if (e.key === "Enter") handleSubmit();
					}}
				/>
				<Button onClick={handleSubmit} variant="outline">
					등록
				</Button>
			</div>
		</Card>
	);
}
