export type InventoryState = {
	id: number;
	minimum_alert?: number | undefined;
	maximum_alert?: number | undefined;
}[];

// Name of the localStorage key
const STORAGE_KEY = "GW2_INVENTORY_QUERIES";

export function getGWInventoryArray(): InventoryState {
	let _data: InventoryState;

	const _str = localStorage.getItem(STORAGE_KEY);
	if (_str) {
		// Try to parse the data
		try {
			_data = JSON.parse(_str);
		} catch {
			_data = [];
		}
		return _data;
	} else {
		return [];
	}
}

export function setGWInventoryArray(data: InventoryState) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
