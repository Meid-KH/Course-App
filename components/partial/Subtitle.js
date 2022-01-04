import React from "react";
import styled from "styled-components";

const Subtitle = ({ children }) => {
	return <SubtitleStyle> {children} </SubtitleStyle>;
};
export default Subtitle;

const SubtitleStyle = styled.Text`
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	line-height: 18px;
	color: #b8bece;
	margin: 16px 0;
`;
