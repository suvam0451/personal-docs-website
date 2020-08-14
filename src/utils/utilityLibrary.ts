import { indexOf } from "lodash";

export function PushItemIfNew<T>(prevState: T[], newEntry: T): T[] {
	let tmpState = prevState;
	let pointer = prevState.indexOf(newEntry);
	if (pointer === -1) {
		tmpState.push(newEntry);
		return tmpState;
	}
	return tmpState;
}

/** Like the above, but first uses a comparator to evaluate match */
export function PushItemIfComparisionFails<T>() {}
