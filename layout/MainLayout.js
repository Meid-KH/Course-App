import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ScrollView, SafeAreaView, Animated, StatusBar } from "react-native";
import styled from "styled-components";
import Wrapper from "../components/ui/Wrapper";
import { MenuContext } from "../context/GlobalContext";

const Mainlayout = ({ children }) => {
	const [menuOpen] = useContext(MenuContext);
	const scaleValue = menuOpen ? 0.9 : 1;
	const opacityValue = menuOpen ? 0.5 : 1;
	const [scale, setScale] = useState(new Animated.Value(scaleValue));
	const [opacity, setOpacity] = useState(new Animated.Value(scaleValue));

	useEffect(() => {
		// Default: StatusBar light
		StatusBar.setBarStyle("dark-content", true);
		MenuOpenOverlay();
	}, [menuOpen]);

	const MenuOpenOverlay = () => {
		menuOpen
			? // Menu open: Scale .9 and opacity 0.5
			  (Animated.timing(scale, {
					toValue: 0.9,
					duration: 200,
					useNativeDriver: true,
			  }).start(),
			  Animated.spring(opacity, {
					toValue: 0.5,
					useNativeDriver: true,
			  }).start(),
			  // Menu open: StatusBar light
			  StatusBar.setBarStyle("light-content", true))
			: // Menu open: Scale 1 and opacity 0.5
			  (Animated.timing(scale, {
					toValue: 1,
					duration: 100,
					useNativeDriver: true,
			  }).start(),
			  Animated.spring(opacity, {
					toValue: 1,
					useNativeDriver: true,
			  }).start(),
			  // Menu closed: StatusBar dark
			  StatusBar.setBarStyle("dark-content", true));
	};

	return (
		<RootContainer>
			<Animated.View // Special animatable View
				style={{
					// ...props.style,
					// opacity: fadeAnim, // Bind opacity to animated value
					opacity: opacity,
					height: "100%",
					transform: [{ scale: scale }],
				}}
			>
				<Wrapper
				// style={{
				// 	borderTopLeftRadius: "6px",
				// 	borderTopRightRadius: "6px",
				// }}
				>
					<SafeAreaView>
						<ScrollView style={{ height: "100%" }}>
							{children}
						</ScrollView>
					</SafeAreaView>
				</Wrapper>
			</Animated.View>
		</RootContainer>
	);
};

export default Mainlayout;

const RootContainer = styled.View`
	background-color: #000;
	height: 100%;
`;
// const AnimContainer = Animated.createAnimatedComponent(Wrapper);
