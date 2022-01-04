import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
	return <ContainerStyle>{children}</ContainerStyle>;
};
export default Container;

const ContainerStyle = styled.View`
	padding-left: 20px;
	padding-right: 20px;
`;
