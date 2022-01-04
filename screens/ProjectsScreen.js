import React from "react";
import { Button, Text, View } from "react-native";

const ProjectsScreen = ({ navigation }) => {
	return (
		<View>
			<Text>Projects Screen</Text>
			<Button
				title="Go somewhere"
				onPress={() => {
					// Navigate using the `navigation` prop that you received
					navigation.navigate("Home");
				}}
			/>
		</View>
	);
};

export default ProjectsScreen;
