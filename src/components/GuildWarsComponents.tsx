import React, { useState, useEffect } from "react";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";
import { dummyItemPriceData, dummyItemData } from "../types/gw2-types";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

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
					<PriceTag price={buys.unit_price} />
					<PriceTag price={sells.unit_price} />
					<div style={bgImage}></div>
				</ul>
			</div>
		</>
	);
}

type IPriceTag = {
	price: number;
};
export function PriceTag({ price }: IPriceTag) {
	const [PriceBreakpoints, setPriceBreakpoints] = useState({
		gold: 0,
		silver: 0,
		copper: 0,
	});

	useEffect(() => {
		setPriceBreakpoints({
			gold: Math.floor(price / 10000) % 100,
			silver: Math.floor(price / 100) % 100,
			copper: Math.floor(price / 100) % 100,
		});
		console.log(PriceBreakpoints);
	}, [price]);

	const querydata = useStaticQuery(graphql`
		query {
			Copper: file(relativeDirectory: { eq: "images/gw2" }, name: { eq: "Copper_coin" }) {
				childImageSharp {
					fixed(width: 15, height: 15) {
						...GatsbyImageSharpFixed
					}
				}
			}
			Silver: file(relativeDirectory: { eq: "images/gw2" }, name: { eq: "Silver_coin" }) {
				childImageSharp {
					fixed(width: 15, height: 15) {
						...GatsbyImageSharpFixed
					}
				}
			}
			Gold: file(relativeDirectory: { eq: "images/gw2" }, name: { eq: "Gold_coin" }) {
				childImageSharp {
					fixed(width: 15, height: 15) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	const { Gold, Silver, Copper } = querydata;
	const { gold, silver, copper } = PriceBreakpoints;

	return (
		<>
			<div className="inline-block">{gold}</div>
			<BackgroundImage className="-mb-1 mr-1" fixed={Gold.childImageSharp.fixed} />
			<div className="inline-block">{silver}</div>
			<BackgroundImage className="-mb-1 mr-1" fixed={Silver.childImageSharp.fixed} />
			<div className="inline-block">{copper}</div>
			<BackgroundImage className="-mb-1 mr-1" fixed={Copper.childImageSharp.fixed} />
		</>
	);
}
