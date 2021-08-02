import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout } from "@ui-kitten/components";
import CustomHeader from "../CustomHeader";

import OrgProfile from "./OrgProfile";

// Profile page, rendering either the volunteer profile or the organisation profile, depending on who is logged in

// May need avatar library installed to use avatar tag, may need to use UI kitten instructions to access this library. Org options could be 4 avatars representing the categories.

const Profile = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader />
				<Divider />
				<Layout
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<OrgProfile />
				</Layout>

				{/* if volunteer show volunteer profile, else show organisation profile */}
			</SafeAreaView>
		</>
	);
};

export default Profile;
