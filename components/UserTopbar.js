import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { SVG } from "./ui/Icon";
import { MenuContext } from "../context/GlobalContext";

export default function UserTopbar() {
	const [menuOpen, setMenuOpen] = useContext(MenuContext);

	const OpeneMenu = (e) => {
		setMenuOpen(true);
	};

	return (
		<UserBar>
			<UserInfo onPress={OpeneMenu}>
				<UserAvatar
					source={require("../assets/avatar.jpg")}
					resizeMode="contain"
				/>
				<View>
					<UserGreeting> Welcome sir, </UserGreeting>
					<UserName> Muhamed </UserName>
				</View>
			</UserInfo>
			<UserNotification>
				{/* <Ionicons name="ios-notifications" size={32} color="#4775F2" /> */}
				<SVG name="notification" size={30} color="#4775F2" />
				<UserNotificationBadge>
					<UserNotificationBadgeText>5</UserNotificationBadgeText>
				</UserNotificationBadge>
			</UserNotification>
		</UserBar>
	);
}

const UserBar = styled.View`
	padding-top: 33px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;
const UserInfo = styled(TouchableOpacity)`
	flex-direction: row;
	align-items: center;
`;
const UserAvatar = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 100px;
	margin-right: 10px;
`;
const UserGreeting = styled.Text`
	font-size: 16px;
	color: #b8bece;
`;
const UserName = styled.Text`
	font-size: 20px;
	font-weight: 700;
	color: #3c4560;
`;
const UserNotification = styled.View`
	position: relative;
	margin: 10px;
`;
const UserNotificationBadge = styled.View`
	width: 20px;
	height: 20px;
	padding: 2px;
	background-color: #3c4560;
	border: 1px solid #fff;
	border-radius: 100px;
	position: absolute;
	top: 0;
	right: 0;
	transform: translateX(4px) translateY(-8px);
	flex: 1;
	align-items: center;
	justify-content: center;
`;
const UserNotificationBadgeText = styled.Text`
	font-size: 12px;
	font-weight: 700;
	text-align: center;
	color: #fff;
`;
