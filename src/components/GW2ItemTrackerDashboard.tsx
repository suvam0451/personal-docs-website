import React, { useState, useEffect, useReducer, Reducer, useRef } from "react";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";
import { GuildWarsItemCard } from "./GuildWarsComponents";
// Reducer
import { InventoryActions, gwInventoryReducer } from "../reducers/gwTrackedCards";
import { InventoryState, getGWInventoryArray } from "../utils/localStorage";
import { isInteger } from "lodash";

export default function GW2PriceTracker(props: any) {
	const idInputRef = useRef<HTMLInputElement>(null);

	const [state, dispatch] = useReducer<Reducer<InventoryState, InventoryActions>>(
		gwInventoryReducer,
		[],
	);
	const [Init, setInit] = useState(true);

	// Read value and initialize state
	useEffect(() => {
		if (Init) {
			let _savedState = getGWInventoryArray();
			dispatch({ type: "init", newState: _savedState });
			setInit(false);
		}
	}, []);

	function addCardItem(): boolean {
		let newID = idInputRef.current?.value!;
		if (!isInteger(newID)) {
			let tryInt = parseInt(newID);
			dispatch({ type: "add", id: tryInt });
		}
		return false;
	}

	return (
		<>
			<form>
				<label>What is the new item ID ?</label>
				<input ref={idInputRef}></input>
				<button type="button" onClick={addCardItem}>
					Add
				</button>
				<button
					type="button"
					onClick={() => {
						dispatch({ type: "save" });
					}}
				>
					Save
				</button>
				<button
					type="button"
					onClick={() => {
						dispatch({ type: "clear" });
					}}
				>
					Clear
				</button>
			</form>
			{state.map((ele) => (
				<GuildWarsItemCard itemId={ele.id} />
			))}
		</>
	);
}
