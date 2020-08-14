import React from "react";

import "../styles/chatwindow.scss";
export default function ChatWindow() {
	const data = [
		{
			msg: "Hey",
			sender: 0,
		},
		{
			msg: "Hello",
			sender: 1,
		},
		{
			msg: "How are you ?",
			sender: 0,
		},
	];

	return (
		<>
			{data.map((ele) => (
				<ChatEntry message={ele.msg} timestamp={"4:00"} senderID={ele.sender} />
			))}
		</>
	);
}

type IChatEntry = IChatItem & {
	senderID: number;
};

export function ChatEntry({ message, timestamp, senderID }: IChatEntry) {
	// Operation to test if the senderID belongs to the user
	if (senderID === 0) {
		return (
			<>
				<div className="chat-r">
					<ChatItem message={message} timestamp={timestamp} />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="chat-l">
					<ChatItem message={message} timestamp={timestamp} />
				</div>
			</>
		);
	}
}

type IChatItem = {
	message: string;
	timestamp: string;
};
export function ChatItem({ message, timestamp }: IChatItem) {
	return (
		<>
			<div className="mess">
				<p>{message}</p>
				<div className="check">
					<span className="text-sm text-gray-500">{timestamp}</span>
				</div>
			</div>
		</>
	);
}
