import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import Homepage from "../components/homepage_components/Homepage";
import VolHomepage from "../components/homepage_components/VolHomepage";
import OrgHomepage from "../components/homepage_components/OrgHomepage";
import VolApplication from "../components/applications_components/VolApplication";
import OrgApplication from "../components/applications_components/OrgApplication";
import VolMakeApplication from "../components/make_applications_components/VolMakeApplication";
import OrgMakeApplication from "../components/make_applications_components/OrgMakeApplication";
import SignUpForm from "../components/signup_components/SignUpForm";
import OrganisationSUForm from "../components/signup_components/OrganisationSUForm";
import VolunteerSUForm from "../components/signup_components/VolunteerSUForm";
import Profile from "../components/profile_components/Profile";

// Declaring stack navigation independently of app component

const { Navigator, Screen } = createStackNavigator();

export const LoginNavigator = () => (
	<Navigator headerMode='none'>
		<Screen name='Profile' component={Profile} />
		<Screen name='Login' component={Login} />
		<Screen name='Homepage' component={Homepage} />
		<Screen name='VolHomepage' component={VolHomepage} />
		<Screen name='OrgHomepage' component={OrgHomepage} />
		<Screen name='VolApplication' component={VolApplication} />
		<Screen name='OrgApplication' component={OrgApplication} />
		<Screen name='VolMakeApplication' component={VolMakeApplication} />
		<Screen name='OrgMakeApplication' component={OrgMakeApplication} />
		<Screen name='SignUpForm' component={SignUpForm} />
		<Screen name='VolunteerSUForm' component={VolunteerSUForm} />
		<Screen name='OrganisationSUForm' component={OrganisationSUForm} />
	</Navigator>
);
