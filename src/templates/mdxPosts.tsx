import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { NavCard } from "../components/NavCard";
import { StatusCard } from "../components/StatusCard";
import {
	Row,
	Col,
} from "reactstrap";
import {
	Alignment,
	Button,
	Intent,
	Breadcrumbs,
	IBreadcrumbProps,
	Icon,
	Card,
	NavbarHeading,
	NavbarDivider,
	NavbarGroup,
	Classes,
} from "@blueprintjs/core";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import { SideBar } from "../components/SideBars/ue4-tuts";

const Content = styled.div`
	margin: 0 auto;
	padding: 0.1rem 0.1rem;
`;

const MyH1 = (props: any) => <h1 style={{color: "tomato"}} {...props}/> 
const MyH2 = (props: any) => <h2 style={{color: "tomato"}} {...props}/> 
const MyH3 = (props: any) => <h3 style={{color: "tomato"}} {...props}/> 
const MyH4 = (props: any) => <h4 style={{color: "tomato"}} {...props}/> 
const MyH5 = (props: any) => <h5 style={{color: "tomato"}} {...props}/> 

const components = {
	h1: MyH1,
	h2: MyH2,
	h3: MyH3,
	h4: MyH4,
	h5: MyH5,
}
export default function PageTemplate(data: mdxProps) {
	return (
		<div>
			<Helmet>
				{/*<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>*/}
			</Helmet>
			<div>
			<NavSection/></div>
			<div className="bg-gray-400 m-0 p-2">
				<Row>
					{/** List of all available tutorials + Skip to section(optional) */}
					<Col xs="12" sm="12" md="12" lg="12" xl="2">
						<Row>
							<SideBar FrontMatter={data.data.mdx.frontmatter}/>
							<StatusCard />
							<NavCard />
						</Row>
					</Col>
					{/** Main body of mdx post */}
					<Col xs="12" sm="12" md="12" lg="12" xl="7">
						{/*<h1>{data.data.mdx.frontmatter.title}</h1>*/}
						<div className="bg-gray-100 px-4 py-4 border rounded-lg shadow-md">
							<h4 className="text-teal-700 mb-4">
								{data.data.mdx.frontmatter.title}
							</h4>
							<MDXRenderer components={components}>{data.data.mdx.body}</MDXRenderer>
						</div>
					</Col>
					<Col xs="12" sm="12" md="12" lg="6" xl="3">
						<Row>
							<Col xs="12" sm="6" md="12" lg="6" xl="12">
								<Card>
									<h4>Related Contents</h4>
									<p>
										User created content used in WW APIs completely
										free. If you develop something cool using the
										tools, you can send us to be showcased here.
									</p>
									<Button>Visit Archives</Button>
								</Card>
							</Col>
							<Col xs="12" sm="6" md="12" lg="6" xl="12">
								<Card body xs="12" xl="12">
									{/* Used persistent quicklinks from components/persistent*/}
									<QuickLinks />
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>

			<Footer />
		</div>
	);
}

interface mdxProps {
	data: {
		mdx: {
			id: number;
			body: any;
			frontmatter: {
				title: string;
			};
		};
	};
}

export const query = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				moduleID
				submoduleID
				seriesID
				seriesIndex
			}
		}
	}
`;
