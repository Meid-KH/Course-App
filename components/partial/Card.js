import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Card = ({ name, title, logo, image, caption }) => {
	return (
		<CardWrapper>
			<CardBody>
				<CardImg source={image} resizeMode="cover" />
				<CardCaption>{title}</CardCaption>
			</CardBody>
			<CardFooter>
				<CardLogo source={logo} resizeMode="contain" />
				<View>
					<CardName>{name}</CardName>
					<CardExcerpt> {caption} </CardExcerpt>
				</View>
			</CardFooter>
		</CardWrapper>
	);
};

export default Card;

const CardWrapper = styled.View`
	width: 315px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
	margin-right: 20px;
	/* &:last-child {
		margin-right: 40px;
	} */
`;
const CardImg = styled.Image`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
`;
const CardFooter = styled.View`
	flex-direction: row;
	align-items: center;
	min-height: 80px;
	padding: 10px 16px;
	background-color: #fff;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
`;
const CardLogo = styled.Image`
	width: 46px;
	height: 46px;
	margin-right: 14px;
`;
const CardBody = styled.View`
	height: 200px;
	overflow: hidden;
	position: relative;
`;
const CardCaption = styled.Text`
	font-size: 26px;
	font-weight: 600;
	line-height: 32px;
	color: #fff;
	padding: 20px 20px;
	width: 60%;
	position: absolute;
	top: 0;
	left: 0;
`;
const CardName = styled.Text`
	font-size: 20px;
	font-weight: 600;
	color: #000;
	margin-bottom: 5px;
`;
const CardExcerpt = styled.Text`
	font-size: 15px;
	font-weight: 600;
	color: #b8bece;
`;
