import React, { useState, useEffect } from "react";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";
import { dummyItemPriceData, dummyItemData } from "../types/gw2-types";

interface IGuildWarsItemCard {
	itemId: number;
}

/**  */
export function GuildWarsItemCard({ itemId }: IGuildWarsItemCard) {
	const [Price, setPrice] = useState<number | null>(null);
	const [PriceData, setPriceData] = useState<ItemPrice>(dummyItemPriceData);
	const [ItemData, setItemData] = useState<GW2Item>(dummyItemData);

	const { id, whitelisted, buys, sells } = PriceData;
	useEffect(() => {
		getItemDetails(itemId).then((res) => {
			setItemData(res);
		});
		getItemPrice(itemId).then((res) => {
			setPriceData(res);
		});
	}, []);

	async function Refresh() {
		await getItemDetails(itemId);
		await getItemPrice(itemId);
	}

	let bgImage: React.CSSProperties = {
		backgroundImage: `url(${ItemData.icon})`,
		height: "64px",
		width: "64px",
	};
	return (
		<>
			<div>
				<p>{id}</p>
				<ul>
					<p>{buys.unit_price}</p>
					<p>{sells.unit_price}</p>
					<p>{ItemData.icon}</p>
					<div style={bgImage}></div>
				</ul>
			</div>
		</>
	);
}
