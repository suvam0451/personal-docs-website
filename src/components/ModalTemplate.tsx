import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";

interface IModalTemplate {
	open: boolean;
	children: JSX.Element | JSX.Element[];
	onClose: () => void;
	elementID: string;
}

const MODAL_STYLES: CSSProperties = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: "#FFF",
	padding: "50px",
	zIndex: 1000,
};

const OVERLAY_STYLE: CSSProperties = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0,0,0,0.7)",
	zIndex: 1000,
};

/** createPortal wrapper for modal elements.
 *  Renders the modal at the given element
 *  @param elementID the ID of div to render the modal at
 */
export default function ModalTemplate({
	open,
	children,
	onClose,
	elementID,
}: IModalTemplate) {
	if (!open) return null;

	return ReactDOM.createPortal(
		<div style={OVERLAY_STYLE}>
			<div style={MODAL_STYLES}>
				<button onClick={onClose}>X</button>
				{children}
			</div>
		</div>,
		document.getElementById(elementID)!,
	);
}
