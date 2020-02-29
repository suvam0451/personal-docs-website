// Copyright here

import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

//#region Common Interfaces
export interface SidebarDataTree {
	readonly nodes: Tier0[];
}
export interface Tier0 {
	readonly submoduleID: number;
	readonly category: string;
	readonly description: string;
	readonly modules: Tier1[];
	readonly label: string;
}

export interface Tier1 {
	readonly seriesID: number;
	readonly label: string;
	readonly children: [
		{ seriesIndex: number; title: string; link: string },
	];
}

export interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

export interface SidebarProps {
	FrontMatter: FrontMatterStruct;
}

export interface FrontMatterStruct {
	title: string;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

export interface SidebarProps {
	FrontMatter: FrontMatterStruct;
}

//#endregion
interface CollapsibleModule {
	readonly CollapsedSection: any;
	readonly HeaderSection: string;
	readonly InitiallyCollapsed: boolean;
}

/**  */
export function CollapsibleModule(Props: CollapsibleModule) {
	const [Collapsed, setCollapsed] = useState(
		Props.InitiallyCollapsed,
	);
	const CollapsibleDiv = styled("div")`
		display: ${props => (Collapsed ? `none` : "block")};
	`;
	const [IconSection, setIconSection] = useState(
		"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
	);
	let logoItem: any = useRef(null);

	// Show in effect
	useEffect(() => {
		logoItem.opacity = 0;
		// TweenMax.from(logoItem, 0, { opacity: 0, ease: Power3.easeOut });
		// TweenMax.to(logoItem, 0.8, { opacity: 1, ease: Power3.easeOut });
	});

	function ToggleCollapse() {
		if (Collapsed === true) {
			setIconSection(
				"bp3-icon-standard bp3-icon-chevron-down bp3-intent-success content-center mt-1",
			);
		} else {
			setIconSection(
				"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
			);
		}
		setCollapsed(!Collapsed);
	}

	return (
		<>
			<div
				ref={el => {
					logoItem = el;
				}}
				className="flex hover:bg-teal-200 mt-1 ml-1 rounded-sm select-none"
				onClick={ToggleCollapse}
			>
				{/* <span className={IconSection} /> */}
				<span className={IconSection} />
				<div className="ml-2">{Props.HeaderSection}</div>
			</div>
			<CollapsibleDiv>{Props.CollapsedSection}</CollapsibleDiv>
		</>
	);
}
