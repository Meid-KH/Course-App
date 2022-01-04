import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
// UI
import Container from "../components/ui/Container";
import UserTopbar from "../components/UserTopbar";
import Subtitle from "../components/partial/Subtitle";
import Courses from "../sections/Courses";
import Tools from "../sections/Tools";
import Mainlayout from "../layout/MainLayout";

export default function HomeScreen() {
	return (
		<Mainlayout>
			<Container>
				<UserTopbar />
			</Container>

			<Tools />

			<Container>
				<Subtitle>Continue learning</Subtitle>
			</Container>

			<Courses />

			<StatusBar style="auto" />
		</Mainlayout>
	);
}

const Carousel = styled(ScrollView)`
	padding: 20px 20px;
`;
