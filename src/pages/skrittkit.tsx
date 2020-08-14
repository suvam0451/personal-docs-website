import React, { useState } from "react";
import { graphql } from "gatsby";
import GW2ItemTrackerDashboard from "../components/GW2ItemTrackerDashboard";
import WebsiteWrapper from "../components/WebsiteWrapper";
import ChatWindow from "../components/ChatSection";

interface GW2TP {
	data: {
		id: number;
		name: string;
		icon: string;
		buy_at: number;
		sell_at: number;
		tolerance: number;
	};
}

interface Response_Items {
	data: {
		name: string;
		description: string;
		type: string;
		level: number;
		rarity: string;
		vendor_value: number;
		game_types: Array<string>;
		flags: Array<string>;
		restrictions: Array<string>;
		id: number;
		chat_link: string;
		icon: string;
	};
}

export const GET_REQ = (request: RequestInfo): Promise<any> => {
	return new Promise((resolve, reject) => {
		let response: Response;
		fetch(request)
			.then((res) => {
				response = res;
				return res.json();
			})
			.then((body) => {
				if (response.ok) {
					resolve(body);
				} else {
					reject(response);
				}
			});
	});
};

export default function SkrittKit(props: any) {
	return (
		<WebsiteWrapper>
			<GW2ItemTrackerDashboard />
			<div className="form_example">
				<div className="form__group field px-4">
					<input
						type="input"
						className="form__field text-sm"
						placeholder="Purchased threshold"
						name="name"
						id="name"
						required
					></input>
					<label htmlFor="name" className="form__label text-sm mb-0">
						Purchase threshold
					</label>
				</div>
			</div>
			<div className="fstab">
				<ChatWindow />
			</div>
		</WebsiteWrapper>
	);
}

// Gets copper, silver and gold coins
export const query = graphql`
	{
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
`;
