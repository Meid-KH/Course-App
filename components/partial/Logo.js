import React from "react";
import styled from "styled-components";

const Logo = ({ image, text }) => {
	return (
		<Wrapper>
			<Img source={image} resizeMode="contain" />
			<Name> {text} </Name>
		</Wrapper>
	);
};
export default Logo;

const Wrapper = styled.View`
	height: 60px;
	padding: 12px 14px;
	flex-direction: row;
	align-items: center;
	background-color: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	margin-right: 20px;
`;
const Img = styled.Image`
	width: 36px;
	height: 36px;
	margin-right: 8px;
`;
const Name = styled.Text`
	font-size: 17px;
	font-weight: 600;
`;
