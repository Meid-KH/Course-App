import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./navigator/TabNavigator";
import Menu from "./components/Menu";
import { MenuContext } from "./context/GlobalContext";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<MenuContext.Provider value={[menuOpen, setMenuOpen]}>
			<NavigationContainer>
				<TabNavigator />
				<Menu />
			</NavigationContainer>
		</MenuContext.Provider>
	);
}

export default App;
