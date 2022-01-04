import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import Logo from "../components/partial/Logo";

function Tools() {
	return (
		<Carousel horizontal showsHorizontalScrollIndicator={false}>
			{data.map((item) => (
				<Logo key={item.id} image={item.image} text={item.text} />
			))}
		</Carousel>
	);
}
export default Tools;

const Carousel = styled(ScrollView)`
	padding: 20px 20px;
`;

const data = [
	{
		id: "001",
		text: "Framer X",
		image: require("../assets/logo-framerx.png"),
	},
	{
		id: "002",
		text: "Figma",
		image: require("../assets/logo-figma.png"),
	},
	{
		id: "003",
		text: "Sketch",
		image: require("../assets/logo-sketch.png"),
	},
	{
		id: "004",
		text: "InVision Studio",
		image: require("../assets/logo-studio.png"),
	},
	{
		id: "005",
		text: "X Code",
		image: require("../assets/logo-xcode.png"),
	},
	{
		id: "006",
		text: "Adobe XD",
		image: require("../assets/logo-xd.png"),
	},
];
