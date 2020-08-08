import React, { useState, useEffect } from "react";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";
import { dummyItemPriceData, dummyItemData } from "../types/gw2-types";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

interface IGuildWarsItemCard {
	itemId: number;
	key?: number;
}

/**  */
export function GuildWarsItemCard({ itemId, key }: IGuildWarsItemCard) {
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
		height: "48px",
		width: "48px",
		objectFit: "scale-down",
		backgroundSize: "cover",
	};
	return (
		<>
			<div key={key} className="gw2_inventory_entry flex flex-row items-center pl-4">
				<div className="inline_centered inventory_title_section">
					<div style={bgImage} className="inline-block"></div>
					<p className="inline-block ml-4 mb-0">{ItemData.name}</p>
				</div>
				<div className="flex-shrink">
					<PriceTag price={buys.unit_price} />
					<PriceTag price={sells.unit_price} />
				</div>
				<div className="flex-shrink">
					<PriceTag price={buys.unit_price} />
					<PriceTag price={sells.unit_price} />
				</div>
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
		console.log(price);
		setPriceBreakpoints({
			gold: Math.floor(price / 10000) % 100,
			silver: Math.floor(price / 100) % 100,
			copper: Math.floor(price) % 100,
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

	const PARA_STYLE = "inline-block gw2_pricetag mb-0 pt-0";
	return (
		<div className="flex flex-row items-center inventory_price_tag">
			{gold === 0 ? (
				<></>
			) : (
				<>
					<p className={PARA_STYLE}>{gold + " "}</p>
					<BackgroundImage
						className="-mb-1 mr-1 gw2_pricetag_icons"
						fixed={Gold.childImageSharp.fixed}
					/>
				</>
			)}
			{silver === 0 ? (
				<></>
			) : (
				<>
					<p className={PARA_STYLE}>{silver}</p>
					<BackgroundImage
						className="-mb-1 mr-1 gw2_pricetag_icons"
						fixed={Silver.childImageSharp.fixed}
					/>
				</>
			)}
			<p className={PARA_STYLE}>{copper}</p>
			<BackgroundImage
				className="-mb-1 mr-1 gw2_pricetag_icons"
				fixed={Copper.childImageSharp.fixed}
			/>
		</div>
	);
}
