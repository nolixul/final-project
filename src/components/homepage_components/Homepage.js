import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout } from "@ui-kitten/components";
import { DrawerNavigation } from "../../navigation/drawernavigation";
import CustomHeader from "../CustomHeader";

// Homepage
const Homepage = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader />
				<Divider />
				<Layout style={{ flex: 1 }}>
					<DrawerNavigation />
				</Layout>
			</SafeAreaView>
		</>
	);
};

export default Homepage;
