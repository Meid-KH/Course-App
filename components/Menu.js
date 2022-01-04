import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import {
	TouchableOpacity,
	View,
	Animated,
	useWindowDimensions,
} from "react-native";
import { MenuContext } from "../context/GlobalContext";

const Menu = () => {
	const { height: windowHeight } = useWindowDimensions();
	const offsetTop = useRef(new Animated.Value(windowHeight)).current;
	const [menuOpen, setMenuOpen] = useContext(MenuContext);
	// const [offsetTop, setOffsetTop] = useState(top);

	useEffect(() => {
		menuOpen
			? Animated.spring(offsetTop, {
					toValue: 50,
					useNativeDriver: false,
			  }).start()
			: Animated.spring(offsetTop, {
					toValue: windowHeight,
					useNativeDriver: false,
			  }).start();
	}, [menuOpen]);

	const CloseMenu = (e) => {
		setMenuOpen(false);
	};

	return (
		<AnimatedContainer style={{ top: offsetTop }}>
			<Wrapper>
				<Cover>
					<CoverImg
						source={require("../assets/background2.jpg")}
						resizeMode="cover"
					/>
					<User>
						<UserName>Muhamed</UserName>
						<UserEmail>maeid.kh@gmail.com</UserEmail>
					</User>
					<Close onPress={CloseMenu}>
						<Ionicons name="ios-close" size={24} />
					</Close>
				</Cover>
				<MenuList>
					<MenuItem>
						<MenuItemIcon>i</MenuItemIcon>
						<View>
							<MenuItemText>Account</MenuItemText>
							<MenuItemSubtext>Settings</MenuItemSubtext>
						</View>
					</MenuItem>
					<MenuItem>
						<MenuItemIcon>i</MenuItemIcon>
						<View>
							<MenuItemText>Billing</MenuItemText>
							<MenuItemSubtext>Payment</MenuItemSubtext>
						</View>
					</MenuItem>
					<MenuItem>
						<MenuItemIcon>i</MenuItemIcon>
						<View>
							<MenuItemText>Learn React</MenuItemText>
							<MenuItemSubtext>Build an app</MenuItemSubtext>
						</View>
					</MenuItem>
					<MenuItem>
						<MenuItemIcon>i</MenuItemIcon>
						<View>
							<MenuItemText>Logout</MenuItemText>
							<MenuItemSubtext>See you soon!</MenuItemSubtext>
						</View>
					</MenuItem>
					<MenuItem>
						<MenuItemIcon>i</MenuItemIcon>
						<View>
							<MenuItemText>Mode</MenuItemText>
						</View>
					</MenuItem>
				</MenuList>
			</Wrapper>
		</AnimatedContainer>
	);
};

export default Menu;

const AnimatedContainer = styled(Animated.View)`
	width: 100%;
	position: absolute;
	z-index: 4;
	left: 0;
`;
const Wrapper = styled.View`
	/* height: ${({ height }) => `${height}px`}; */
	height: 900px;
	width: 100%;
	background-color: #f0f3f5;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
	/* position: absolute; */
	/* z-index: 4; */
	/* top: ${({ top }) => `${top}px`}; */
`;
const Cover = styled.View`
	height: 142px;
	width: 100%;
	align-items: center;
	justify-content: center;
`;
const CoverImg = styled.Image`
	position: absolute;
	z-index: 3;
	left: 0;
	top: 0;
	width: 100%;
	height: 142px;
	justify-content: center;
	align-items: center;
`;
const User = styled.View`
	align-items: center;
	justify-content: center;
	z-index: 4;
`;
const UserName = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: #fff;
`;
const UserEmail = styled.Text`
	font-size: 13px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.6);
`;
const Close = styled(TouchableOpacity)`
	background-color: #fff;
	width: 44px;
	height: 44px;
	border-radius: 22px;
	position: absolute;
	left: 50%;
	top: 100%;
	z-index: 6;
	margin-top: -22px;
	margin-left: -22px;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 14px rgba(0, 0, 0, 0.15);
`;
const MenuList = styled.View`
	margin-top: 30px;
`;
const MenuItem = styled(TouchableOpacity)`
	width: 100%;
	padding: 12px 44px;
	flex-direction: row;
`;
const MenuItemIcon = styled.Text`
	margin-right: 16px;
`;
const MenuItemText = styled.Text`
	font-size: 24px;
	font-weight: 600;
	color: #3c4560;
`;
const MenuItemSubtext = styled.Text`
	font-size: 15px;
	margin-top: 5px;
	color: #3c4560;
	opacity: 0.4;
`;
