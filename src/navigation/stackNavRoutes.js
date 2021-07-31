import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import Homepage from "../components/homepage_components/Homepage";
import VolHomepage from "../components/homepage_components/VolHomepage";
import OrgHomepage from "../components/homepage_components/OrgHomepage";
import SignUpForm from "../components/signup_components/SignUpForm";
import OrganisationSUForm from "../components/signup_components/OrganisationSUForm";
import VolunteerSUForm from "../components/signup_components/VolunteerSUForm";

const { Navigator, Screen } = createStackNavigator();

export const LoginNavigator = () => (
	<Navigator headerMode="none">
		<Screen name="Login" component={Login} />
		<Screen name="Homepage" component={Homepage} />
		<Screen name="VolHomepage" component={VolHomepage} />
		<Screen name="OrgHomepage" component={OrgHomepage} />
		<Screen name="SignUpForm" component={SignUpForm} />
		<Screen name="VolunteerSUForm" component={VolunteerSUForm} />
		<Screen name="OrganisationSUForm" component={OrganisationSUForm} />
	</Navigator>
);
