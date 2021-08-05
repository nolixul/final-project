import React from "react";
import Homepage from "../components/homepage_components/Homepage";
import singleOpportunity from "../components/single_opp_components/singleOpportunity";
import VolMakeApplication from "../components/make_applications_components/VolMakeApplication";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export const VolApplyNavigator = () => (
	<Navigator headerMode='none' initialRouteName='VolHomepage'>
		<Screen name='VolHomepage' component={Homepage} />
		<Screen name='Single_opp' component={singleOpportunity} />
		<Screen name='Apply' component={VolMakeApplication} />
	</Navigator>
);
