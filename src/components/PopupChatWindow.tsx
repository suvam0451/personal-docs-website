import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";

interface IModalTemplate {
	open: boolean;
	children: JSX.Element | JSX.Element[];
	onClose: () => void;
	elementID: string;
}

export default function ToggleChatWindow({
	open,
	children,
	onClose,
	elementID,
}: IModalTemplate) {
	if (!open) return null;

	return ReactDOM.createPortal(<></>, document.getElementById(elementID)!);
}
