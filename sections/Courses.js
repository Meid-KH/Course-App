import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import Card from "../components/partial/Card";

function Courses() {
	return (
		<Carousel
			style={{ marginTop: -20 }}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{data.map((item, i) => (
				<Card
					key={item.id}
					title={item.title}
					name={item.name}
					image={item.image}
					logo={item.logo}
					caption={item.caption}
				/>
			))}
		</Carousel>
	);
}
export default Courses;

const Carousel = styled(ScrollView)`
	padding: 20px 20px;
`;

const data = [
	{
		id: "001",
		title: "Styled Components",
		name: "React Native",
		caption: "5 of 12 sections",
		image: require("../assets/background13.jpg"),
		logo: require("../assets/logo-react.png"),
	},
	{
		id: "002",
		title: "API data fetching",
		name: "React Native",
		caption: "6 of 12 sections",
		image: require("../assets/background14.jpg"),
		logo: require("../assets/logo-react.png"),
	},
	{
		id: "003",
		title: "useState and useEffect",
		name: "React Native",
		caption: "7 of 12 sections",
		image: require("../assets/background15.jpg"),
		logo: require("../assets/logo-react.png"),
	},
];
