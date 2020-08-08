import React from "react";
import Helmet from "react-helmet";

type IBlogpostSEOProps = {
	title: string;
};

export function BlogpostSEO(props: IBlogpostSEOProps) {
	return (
		<Helmet>
			{/* <title>{props.title}</title>
			<meta name="description" content={data.data.mdx.frontmatter.description} />
			<meta
				name="og:title"
				property="og:title"
				content={data.data.mdx.frontmatter.seotitle}
			/>
			<meta name="twitter:card" content={data.data.mdx.frontmatter.description} />
			<link rel="canonical" href={data.data.mdx.frontmatter.path} />
			<meta name="viewport" content="width=device-width, initial-scale=1" /> */}
		</Helmet>
	);
}
