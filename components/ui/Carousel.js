import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

const Carousel = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};
export default Carousel;

const Wrapper = styled(ScrollView)`
	padding: 20px 20px;
`;
