import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import "../styles/chatwindow.scss";
import { timeStamp } from "console";
export default function ChatWindow() {
	const [ShowOptions, setShowOptions] = useState(false);
	const [TextIsEmpty, setTextIsEmpty] = useState(true);

	const [ChatData, setChatData] = useState([
		{
			msg: "Hey",
			sender: 0,
			timestamp: "18:00",
		},
		{
			msg: "Hello",
			sender: 1,
			timestamp: "19:00",
		},
		{
			msg: "How are you ?",
			sender: 0,
			timestamp: "19:02",
		},
	]);
	const InputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		const textContent = InputRef.current?.value;
		if (textContent && textContent! === "") {
			setShowOptions(true);
		}
	}, [InputRef.current]);

	function handleChatEntry(e: any): boolean {
		// prevent page refresh
		e.preventDefault();

		const urf = moment().format("HH:mm");
		const textContent = InputRef.current?.value;

		if (textContent !== "") {
			const retval = ChatData.concat([
				{
					msg: textContent!,
					sender: 0,
					timestamp: urf,
				},
			]);
			setChatData(retval);
			InputRef.current!.value = "";
		}
		return false;
	}
	return (
		<>
			<div className="chatbox-example">
				<div className="chatbox-recipient">Recipient's Name</div>
				<div className="chat-scrollarea">
					<div className="conversation-start">
						<span>Today, 6:48 AM</span>
					</div>
					{ChatData.map((ele, i) => {
						let showTimestamp = true;
						if (i > 0) {
							if (ChatData[i + 1] && ele.sender === ChatData[i + 1].sender) {
								showTimestamp = false;
							}
						}
						const { timestamp, msg, sender } = ele;
						return (
							<ChatEntry
								message={msg}
								timestamp={timestamp}
								senderID={sender}
								key={i}
								showTimestamp={showTimestamp}
							/>
						);
					})}
				</div>
				<form id="chat-form" onSubmit={handleChatEntry}>
					<div className="icon-link attach" />
					<input type="text" placeholder="Type a message" ref={InputRef} />
					<button type="button" onClick={handleChatEntry}>
						{ShowOptions ? "Options" : "Send"}
					</button>
				</form>
			</div>
		</>
	);
}

type IChatEntry = IChatItem & {
	senderID: number;
};

export function ChatEntry({ message, timestamp, senderID, showTimestamp }: IChatEntry) {
	// Operation to test if the senderID belongs to the user
	if (senderID === 0) {
		return (
			<>
				<div className="message-row you-message">
					<ChatItem
						message={message}
						timestamp={timestamp}
						showTimestamp={showTimestamp}
					/>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="message-row other-message">
					<ChatItem
						message={message}
						timestamp={timestamp}
						showTimestamp={showTimestamp}
					/>
				</div>
			</>
		);
	}
}

type IChatItem = {
	message: string;
	timestamp: string;
	showTimestamp: boolean;
};
export function ChatItem({ message, timestamp, showTimestamp }: IChatItem) {
	return (
		<>
			<div className="message-text">{message}</div>
			{showTimestamp ? <div className="message-time">{timestamp}</div> : <></>}
		</>
	);
}
