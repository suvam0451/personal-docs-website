import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import ue4_icon from "../../content/images/ue4-icon.png";
import Img from "gatsby-image";

interface BoxProps {
	readonly username: string;
	readonly label: string;
	readonly description: string;
}

interface TutorialCardProps {
	readonly title: string;
	readonly desc: string;
	readonly software: string;
	readonly date: string;
	readonly image: any;
	link: string;
}

import "../styles/layouts.scss";

function TutorialCard(props: TutorialCardProps) {
	const { title, desc, software, date, image, link } = props;
	return (
		<div className="border-gray-600 border-2 border-solid rounded-lg my-2">
			<div className="bg-gray-500 hover:bg-gray-600 flex flex-col py-2 px-2 rounded-lg overflow-hidden border flex">
				{/* Must modify pb later. The image is rendered relativeto the div at given absolute position. */}
				<div className="imagex ">
					<Img className="shadow-lg" fluid={image} alt="GifGallery" />
				</div>
				<div className="flex-grow pt-4">
					<h5 className="font-bold mb-3">{title}</h5>
					<p className="text-base">{desc}</p>
				</div>
				{/* // Last section */}
				<div className="flex">
					<img src={ue4_icon} alt="" className="h-6 w-6 mr-2" />
					<p className="text-teal-600">&bull; Tutorial</p>
				</div>
			</div>
		</div>
	);
}
export { TutorialCard };
