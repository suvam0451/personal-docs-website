import {
	InventoryStates,
	getGWInventoryArray,
	setGWInventoryArray,
} from "../utils/localStorage";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";

export type InventoryActions =
	| { type: "add"; id: number }
	| { type: "clear" }
	| { type: "append"; idArray: number[] }
	| { type: "save" }
	| { type: "init"; newState: InventoryStates };

export function gwInventoryReducer(
	prevState: InventoryStates,
	action: InventoryActions,
): InventoryStates {
	// Assign to temporary variable for immutability
	let _data: InventoryStates = prevState;
	switch (action.type) {
		case "add": {
			const { id } = action;
			let match = _data.find((o) => o.id === id);
			// Update storage, only if this id does not exist
			if (!match) {
				// Fetch item data
				getItemDetails(id).then((res) => {
					_data.push({
						id: id,
						name: res.name,
					});
					setGWInventoryArray(_data);
				});
			}
			return _data;
		}
		// Appends a list of item ids, at end of list
		case "append": {
			const { idArray } = action;
			let extension = idArray.map((ele) => ({
				id: ele,
				name: "",
			}));
			let newData = _data.concat(extension);
			setGWInventoryArray(newData);
			return newData;
		}
		case "clear": {
			setGWInventoryArray([]);
			return [];
		}
		// First load initialization
		case "init": {
			const { newState } = action;
			return newState;
		}
		// Saves the current state
		case "save": {
			setGWInventoryArray(prevState);
			return prevState;
		}
	}
}
