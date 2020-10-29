import React, { useRef, useState, useEffect } from "react";

import "../styles/notifyme.scss";

type NotifyMeButton = {
	label: string;
	label_failure: string;
	label_success: string;
	button_title: string;
	validation?: RegExp;
	onSuccess: (res: string) => void;
	className?: string;
};
/** Advanced mail ID/API token tracking AIO button
 *  SOURCE : https://codepen.io/bertdida/pen/xyPKRX?editors=1100
 */
export default function NotifyMeButton({
	label,
	button_title,
	validation,
	onSuccess,
	label_failure,
	label_success,
	className,
}: NotifyMeButton) {
	const [IsExpanded, setIsExpanded] = useState(false);
	const [LabelText, setLabelText] = useState(label);
	const [IsValid, setIsValid] = useState(false);

	const EntryRef = useRef<HTMLInputElement>(null);
	const acceptRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		function handleClickOutside(e: any) {
			// Check event, only if current form is active
			if (IsExpanded) {
				if (EntryRef.current != null && !EntryRef.current!.contains(e.target)) {
					handleSubmitEvent();
					setIsExpanded(false);
				}
			}
		}
		// fold when clicked outside
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [IsExpanded]);

	function handleSubmitEvent() {
		let value = EntryRef.current!.value;
		if (validation?.test(value)) {
			setLabelText(label_success);
			setIsExpanded(false);
			onSuccess(value);
			setIsValid(true);
		} else {
			setLabelText(label_failure);
			setIsValid(false);
		}
		setIsExpanded(false);
	}

	function ElementToggled(e: React.ChangeEvent<HTMLInputElement>) {
		const currentVal = e.target.value;
		switch (currentVal) {
			case "on": {
				setIsExpanded(true);
			}
		}
	}

	const CSS_INJECT = IsExpanded ? "expanded" : "";
	return (
		<div className={className}>
			<input
				className="c-checkbox"
				type="checkbox"
				id="checkbox"
				onChange={ElementToggled}
			/>
			<div className={`c-formContainer ${CSS_INJECT}`}>
				<form className="c-form" action="">
					<input
						className="c-form__input"
						placeholder="Hello"
						type="text"
						required
						ref={EntryRef}
					></input>
					<label className="c-form__buttonLabel" htmlFor="checkbox">
						<button
							className="c-form__button text-sm"
							type="button"
							onClick={handleSubmitEvent}
						>
							{button_title}
						</button>
					</label>
					<label
						className={`c-form__toggle ${IsValid ? "valid" : "invalid"}`}
						htmlFor="checkbox"
						data-title={LabelText}
					></label>
				</form>
			</div>
		</div>
	);
}
