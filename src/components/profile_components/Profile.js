import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout } from "@ui-kitten/components";
import CustomHeader from "../CustomHeader";

// Profile page, rendering either the volunteer profile or the organisation profile, depending on who is logged in

const Profile = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader />
				<Divider />
				<Layout
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				></Layout>

				{/* if volunteer show volunteer profile, else show organisation profile */}
			</SafeAreaView>
		</>
	);
};

export default Profile;
