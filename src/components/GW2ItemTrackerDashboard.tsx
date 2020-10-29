import React, { useState, useEffect, useReducer, Reducer, useRef } from "react";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";
import { GuildWarsItemCard } from "./GuildWarsComponents";
// Reducer
import { InventoryActions, gwInventoryReducer } from "../reducers/gwTrackedCards";
import { InventoryStates, getGWInventoryArray } from "../utils/localStorage";
import { isInteger } from "lodash";
import NotifyMeButton from "../components/NotifyMeButton";
import { GW2_REGEX } from "../utils/globalVars";

// STATE: Account keys
import { GW2KeyEntry, AccountActions, gwAccountsReducer } from "../reducers/gw2APIKey";
import { getGW2APIKeys, setGW2APIKeys } from "../utils/localStorage";

export default function GW2PriceTracker(props: any) {
	const idInputRef = useRef<HTMLInputElement>(null);

	const [state, dispatch] = useReducer<Reducer<InventoryStates, InventoryActions>>(
		gwInventoryReducer,
		[],
	);

	const [accountState, accountDispatch] = useReducer<
		Reducer<GW2KeyEntry[], AccountActions>
	>(gwAccountsReducer, []);
	const [Init, setInit] = useState(true);

	// Read value and initialize state
	useEffect(() => {
		if (Init) {
			let _savedState = getGWInventoryArray();
			dispatch({ type: "init", newState: _savedState });

			// Fetch account details
			const _savedAcc = getGW2APIKeys();
			accountDispatch({ type: "init", newState: _savedAcc });

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

	/** Responds to when user enters new API keys, using
	 * 	the fancy button
	 */
	function handleSuccessfulKeyUpdate(newValue: string) {
		accountDispatch({ type: "add", newKey: newValue });
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
			<NotifyMeButton
				label="GW2 API token"
				button_title="Update"
				onSuccess={handleSuccessfulKeyUpdate}
				validation={GW2_REGEX}
				label_failure="Invalid API token"
				label_success="API token is valid 😄"
				className="mb-8"
			/>
			{state.map((ele, i) => (
				<GuildWarsItemCard itemId={ele.id} forwardKey={i} />
			))}
		</>
	);
}
