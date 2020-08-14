import { getGW2APIKeys, setGW2APIKeys } from "../utils/localStorage";

export type GW2KeyEntry = {
	name: string;
	username: string;
	KEY: string;
};

export type AccountActions =
	| { type: "add"; newKey: string }
	| { type: "clear" }
	| { type: "init"; newState: GW2KeyEntry[] }
	| { type: "remove"; index: number }
	| { type: "replace"; index: number; newKey: string };

export function gwAccountsReducer(
	prevState: GW2KeyEntry[],
	action: AccountActions,
): GW2KeyEntry[] {
	let _data = getGW2APIKeys();
	switch (action.type) {
		// First time initializion of keys
		case "init": {
			const { newState: newKey } = action;
			return newKey;
		}
		case "add": {
			const { newKey } = action;
			_data.push({
				name: "",
				username: "",
				KEY: newKey,
			});
			setGW2APIKeys(_data);
			return _data;
		}
		default: {
			return prevState;
		}
	}
}
