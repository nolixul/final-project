import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Layout } from "@ui-kitten/components";
import CustomHeader from "../CustomHeader";
import VolProfile from "./VolProfile";
import OrgProfile from "./OrgProfile";
import { IsVolunteerContext } from "../../context/IsVolunteer";

// Profile page, rendering either the volunteer profile or the organisation profile, depending on who is logged in

// May need avatar library installed to use avatar tag, may need to use UI kitten instructions to access this library. Org options could be 4 avatars representing the categories.

const Profile = () => {
	const { isVolunteer } = useContext(IsVolunteerContext);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<CustomHeader isSignUp={false} />
			<Divider />
			<Layout
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
				{isVolunteer ? <VolProfile /> : <OrgProfile />}
			</Layout>
		</SafeAreaView>
	);
};

export default Profile;
