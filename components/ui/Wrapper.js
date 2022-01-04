import React from "react";
import styled from "styled-components";

const Wrapper = (props) => {
	return <WrapperStyles {...props}>{props.children}</WrapperStyles>;
};
export default Wrapper;

const WrapperStyles = styled.View`
	flex: 1;
	background-color: #ebebeb;
	padding-top: 20px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;
