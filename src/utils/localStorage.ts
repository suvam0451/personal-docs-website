/** Generic function to fetch array based keystores from localStorage */
export function getStoredKey_Array<T>(KEY: string): T[] {
	let _data: T[];

	const _str = localStorage.getItem(KEY);
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

export type InventoryStates = InventoryState[];

export type InventoryState = {
	id: number;
	name: string;
	minimum_alert?: number | undefined;
	maximum_alert?: number | undefined;
};

// Name of the localStorage key
const STORAGE_KEY = "GW2_INVENTORY_QUERIES";

export function getGWInventoryArray(): InventoryStates {
	return getStoredKey_Array<InventoryState>(STORAGE_KEY);
}

export function setGWInventoryArray(data: InventoryStates) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// --------- GW2 Account key management --------------------

// Name of the localStorage key
const GW2_API_KEYS = "GW2_API_KEYS";

export type GW2KeyEntry = {
	name: string;
	username: string;
	KEY: string;
};

export function getGW2APIKeys(): GW2KeyEntry[] {
	return getStoredKey_Array<GW2KeyEntry>(GW2_API_KEYS);
}

export function setGW2APIKeys(data: GW2KeyEntry[]) {
	localStorage.setItem(GW2_API_KEYS, JSON.stringify(data));
}

// ---------------------------------------------------------
