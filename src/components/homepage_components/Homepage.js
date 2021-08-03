import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout } from "@ui-kitten/components";

import CustomHeader from "../CustomHeader";
import OrgHomepage from "./OrgHomepage";

// Homepage
const Homepage = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<CustomHeader isSignUp={false} navigation={navigation} />
			<Divider />

			<Layout style={{ flex: 1 }}>
				<OrgHomepage />
			</Layout>
		</SafeAreaView>
	);
};

export default Homepage;
