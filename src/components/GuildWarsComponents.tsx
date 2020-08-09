import React, { useState, useEffect } from "react";
import { getItemPrice, ItemPrice, getItemDetails, GW2Item } from "../api/gw2_market";
import { dummyItemPriceData, dummyItemData } from "../types/gw2-types";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

interface IGuildWarsItemCard {
	itemId: number;
	forwardKey?: number;
}

/**  */
export function GuildWarsItemCard({ itemId, forwardKey }: IGuildWarsItemCard) {
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

	const SECTION_A_CSS = "inline_centered inventory_title_section";
	return (
		<>
			<div className="gw2_inventory_container">
				<div className="gw2_inventory_content red">
					<div
						key={forwardKey}
						className="gw2_inventory_entry flex flex-row items-center pl-4 pt-1"
					>
						<div className={SECTION_A_CSS}>
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
					<div className="gw2_inventory_entry flex flex-row items-center pl-4 pt-1 pb-1">
						<div className={SECTION_A_CSS}>
							<span>Update watchlist</span>
						</div>
						<div className="flex-shrink mt-2">
							<form className="flex-shrink my-0 form__group">
								<label className="form__label">Purchase threshold</label>
								<input className="form__field" placeholder="New buy threshold"></input>
								<input placeholder="New sell threshold"></input>
							</form>
						</div>
					</div>
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
