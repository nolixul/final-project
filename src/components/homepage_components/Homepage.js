import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout } from "@ui-kitten/components";
import VolHomepage from "./VolHomepage";
import CustomHeader from "../CustomHeader";
import OrgHomepage from "./OrgHomepage";
import { IsVolunteerContext } from "../../context/IsVolunteer";

// Homepage - displays listed opportunities - all opps for vol, opps posted by org for org
const Homepage = ({ navigation }) => {
	const { isVolunteer } = useContext(IsVolunteerContext);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<CustomHeader isSignUp={false} navigation={navigation} />
			<Divider />
			<Layout style={{ flex: 1 }}>
				{isVolunteer ? <VolHomepage /> : <OrgHomepage />}
			</Layout>
		</SafeAreaView>
	);
};

export default Homepage;
