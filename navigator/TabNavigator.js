import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CoursesScreen from "../screens/CoursesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#4775F2",
				tabBarTintColor: "green",
				tabBarLabelStyle: {
					fontSize: 10,
					fontWeight: "700",
					textTransform: "uppercase",
					marginTop: 5,
				},
				tabBarBadgeStyle: {
					// backgroundColor: "#ddd",
					fontSize: 12,
					fontWeight: "600",
					marginTop: -8,
				},
				tabBarStyle: {
					// backgroundColor: "#272727",
					height: 60,
					paddingTop: 10,
					paddingBottom: 8,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-home" color={color} size={size} />
					),
					// tabBarBadge: 3,
				}}
			/>
			<Tab.Screen
				name="Projects"
				component={ProjectsScreen}
				options={{
					tabBarLabel: "Projects",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-albums" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Courses"
				component={CoursesScreen}
				options={{
					tabBarLabel: "Courses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-folder" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
