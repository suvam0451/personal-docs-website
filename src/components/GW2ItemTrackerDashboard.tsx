import React, { useState, useEffect } from "react";
import { getItemPrice, ItemPrice } from "../api/gw2_market";
import { GuildWarsItemCard } from "./GuildWarsComponents";

export default function GW2PriceTracker(props: any) {
	const [ItemIDArray, setItemIDArray] = useState([24286, 24341]);

	const save = () => {};
	return (
		<>
			{ItemIDArray.map((ele) => (
				<GuildWarsItemCard itemId={ele} />
			))}
		</>
	);
}
