import React, { useState } from "react";

type IFormFieldBase = {
	id: string;
	placeholder: string;
};

/**
 * @behavior when focused, the label will hover above, exposing the input field
 */
export function LabelHoverAbove(props: IFormFieldBase) {
	return (
		<div className="form__group field px-4">
			<input
				type="input"
				className="form__field text-sm"
				placeholder="Purchased threshold"
				name="name"
				id="name"
				required
			></input>
			<label htmlFor="name" className="form__label text-sm mb-0">
				Purchase threshold
			</label>
		</div>
	);
}
