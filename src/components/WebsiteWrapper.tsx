import React, { useState } from "react";
import { graphql } from "gatsby";
import { NavSection } from "./NavBar";

export default function WebsiteWrapper({ children }: any) {
	return (
		<>
			<div>
				<NavSection />
				{children}
			</div>
			{/* React portal routed divs */}
			<div id="portal"></div>
		</>
	);
}
