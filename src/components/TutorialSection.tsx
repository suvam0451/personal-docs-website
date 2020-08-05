import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "reactstrap";
import { Link, useStaticQuery } from "gatsby";
import { TutorialCard } from "../components/Boxes";
import { Alert } from "../components/Decorations";

declare module JsonTS {
	export interface Image {
		name: string;
		img1: any;
	}
	export interface Element {
		node: {
			date: string;
			label: string;
			desc: string;
			RelativeLink: string;
			frontimg: Image;
			category: string;
			tags: string;
		};
	}
}

export default function Index() {
	const [CardsPerPage, setCardsPerPage] = useState(12); // Number of cards to display per page
	const queryData = useStaticQuery(graphql`
		query TutorialCardsQuery($section: String) {
			allTutorialCardsJson(filter: { label: { eq: $section } }) {
				edges {
					node {
						date
						label
						desc
						RelativeLink
						frontimg {
							name
							img1 {
								childImageSharp {
									fluid(maxWidth: 512) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						category
						tags
					}
				}
				totalCount
			}
		}
	`);

	const { allTutorialCardsJson } = queryData;

	const MakeTutorialBoxes = (): JSX.Element[] => {
		const arr: any = [];
		let n = CardsPerPage;
		for (let i = 0; i < allTutorialCardsJson.totalCount; i++) {
			const { label, desc, frontimg, RelativeLink } = allTutorialCardsJson.edges[i].node;
			arr.push(
				<TutorialCard
					title={label}
					desc={desc}
					date=""
					software=""
					image={frontimg.img1.childImageSharp.fluid}
					link={RelativeLink}
				/>,
			);
			n--;

			if (n == 0) break;
		}
		return arr;
	};
	return (
		<div className="container_A">
			<div className="content">
				<Alert
					head="You are in tutorial section"
					body="This page showcases popular/new content. For complete list go here."
				/>
				<hr className="my-2" />
				<div className="mx-1">
					<div className="example_grid">{MakeTutorialBoxes()}</div>
				</div>
				<Pagination aria-label="Page navigation example">
					<PaginationItem disabled>
						<PaginationLink first href="#" />
					</PaginationItem>
					<PaginationItem disabled>
						<PaginationLink previous href="#" />
					</PaginationItem>
					<PaginationItem active>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink next href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink last href="#" />
					</PaginationItem>
				</Pagination>
			</div>
		</div>
	);
}
