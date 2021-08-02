import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import Homepage from "../components/homepage_components/Homepage";
import VolApplicationOverview from "../components/applications_components/VolApplicationsOverview";
import OrgOpportunitiesOverview from "../components/applications_components/OrgOpportunitiesOverview";
import VolMakeApplication from "../components/make_applications_components/VolMakeApplication";
import OrgPostOpportunity from "../components/make_applications_components/OrgPostOpportunity";
import SignUpForm from "../components/signup_components/SignUpForm";
import OrganisationSUForm from "../components/signup_components/OrganisationSUForm";
import VolunteerSUForm from "../components/signup_components/VolunteerSUForm";

// Declaring stack navigation independently of app component

const { Navigator, Screen } = createStackNavigator();

export const LoginNavigator = () => (

	<Navigator headerMode="none">
		<Screen name="Login" component={Login} />
		<Screen name="Homepage" component={Homepage} />
		<Screen name="VolApplicationOverview" component={VolApplicationOverview} />
		<Screen
			name="OrgOpportunitiesOverview"
			component={OrgOpportunitiesOverview}
		/>
		<Screen name="VolMakeApplication" component={VolMakeApplication} />
		<Screen name="OrgPostOpportunity" component={OrgPostOpportunity} />
		<Screen name="SignUpForm" component={SignUpForm} />
		<Screen name="VolunteerSUForm" component={VolunteerSUForm} />
		<Screen name="OrganisationSUForm" component={OrganisationSUForm} />

	</Navigator>
);
