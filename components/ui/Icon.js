import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Text } from "react-native-svg";

export const SVG = (props) => {
	switch (props.name) {
		case "notification":
			return (
				<Svg
					width={props.size || 24}
					height={props.size || 24}
					fill={props.color || "currenColor"}
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<G clipPath="url(#prefix__clip0)" fill="currentColor">
						<Path d="M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z" />
					</G>
					<Defs>
						<ClipPath id="prefix__clip0">
							<Path fill="#fff" d="M0 0h24v24H0z" />
						</ClipPath>
					</Defs>
				</Svg>
			);

		default:
			return <Text>icon</Text>;
			break;
	}
};
