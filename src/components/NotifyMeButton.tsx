import React, { useRef, useState } from "react";

import "../styles/notifyme.scss";

type NotifyMeButton = {
	label: string;
	button_title: string;
	validation?: RegExp;
	onSuccess: (res: string) => void;
};
/** Advanced mail ID/API token tracking AIO button
 *  SOURCE : https://codepen.io/bertdida/pen/xyPKRX?editors=1100
 */
export default function NotifyMeButton({
	label,
	button_title,
	validation,
	onSuccess,
}: NotifyMeButton) {
	const [IsExpanded, setIsExpanded] = useState(false);

	const EntryRef = useRef<HTMLInputElement>(null);

	function handleSubmitEvent() {
		let value = EntryRef.current!.value;
		console.log("Hello there", value);
		if (validation?.test(value)) {
			setIsExpanded(false);
			onSuccess(value);
		}
		setIsExpanded(false);
		console.log("Function failed successfully");
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
		<>
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
					<label className="c-form__toggle" htmlFor="checkbox" data-title={label}></label>
				</form>
			</div>
		</>
	);
}
