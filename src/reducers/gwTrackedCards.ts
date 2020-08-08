import {
	InventoryState,
	getGWInventoryArray,
	setGWInventoryArray,
} from "../utils/localStorage";

export type InventoryActions =
	| { type: "add"; id: number }
	| { type: "clear" }
	| { type: "append"; idArray: number[] }
	| { type: "save" }
	| { type: "init"; newState: InventoryState };

export function gwInventoryReducer(
	prevState: InventoryState,
	action: InventoryActions,
): InventoryState {
	// Assign to temporary variable for immutability
	let _data: InventoryState = prevState;
	switch (action.type) {
		case "add": {
			const { id } = action;
			let match = _data.find((o) => o.id === id);
			// Update storage, only if this id does not exist
			if (!match) {
				_data.push({
					id: id,
				});
				setGWInventoryArray(_data);
			}
			return _data;
		}
		// Appends a list of item ids, at end of list
		case "append": {
			const { idArray } = action;
			let extension = idArray.map((ele) => ({
				id: ele,
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
