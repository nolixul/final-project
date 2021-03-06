import React, { useContext, useEffect, useState } from "react";
import {
	IndexPath,
	Select,
	SelectItem,
	Input,
	Text,
} from "@ui-kitten/components";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { OpportunityIDContext } from "../../context/OpportunityIDContext";

import { getOpportunities } from "../../utils/api";
import * as RootNavigation from "../../RootNavigation";
import { CategoryContext } from "../../context/CategoryContext";

// Homepage
const VolHomepage = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const [opportunities, setOpportunities] = useState([]);
	const data = ["Sort by", "Latest", "Date of event"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	const { category } = useContext(CategoryContext);
	const { setOppID } = useContext(OpportunityIDContext);

	// Setting page context so drawernavigation knows which page is currently being used

	// Idea is - icon on left to represent category, title, org name, start date, dbs/drive icons as well.

	// Fetch opportunities from API

	useEffect(() => {
		getOpportunities(category)
			.then((opportunitiesfromAPI) => {
				// console.log(opportunitiesfromAPI, "<<<<<in VolHomepage");
				setOpportunities([...opportunitiesfromAPI]);
				console.log(opportunities, "<<<< after setOpportunities");
			})
			.catch((err) => console.log(err, "ERROR"));
	}, [category]);

	// Format date on opportunities

	function formattedDate(originalDate) {
		console.log(originalDate);
		const date = new Date(originalDate);
		const month = date.getMonth() + 1;
		const resultMonth = month < 10 ? "0" + month : month;
		const day = date.getDate();
		const resultDay = day < 10 ? "0" + day : day;
		const year = date.getFullYear();
		console.log(`${resultDay}/${resultMonth}/${year}`);
		return `Starting ${resultDay}/${resultMonth}/${year}`;
	}

	// Navigate to single opp page

	function handlePress(oppId) {
		setOppID(oppId);
		RootNavigation.navigate("Single_opp");
	}

	// Return a screen with a filter, search bar and all relevant opportunities on

	return (
		<>
			<View style={(styles.view, { flexDirection: "row" })}>
				<View style={{ flex: 1 }}>
					<Select
						value={displayValue}
						selectedIndex={selectedIndex}
						onSelect={(index) => setSelectedIndex(index)}
					>
						<SelectItem title="Sort by" />
						<SelectItem title="Latest" />
						<SelectItem title="Date of event" />
					</Select>
				</View>
				<View style={{ flex: 1 }}>
					<Input
						placeholder="Search"
						value={searchTerm}
						onChangeText={(nextValue) => setSearchTerm(nextValue)}
					/>
				</View>
			</View>

			<ScrollView>
				<View style={styles.view}>
					{opportunities.map((opp) => {
						return (
							<View key={opp.opp_id} style={styles.oppContainer}>
								<TouchableOpacity onPress={() => handlePress(opp.opp_id)}>
									<View style={styles.oppDetails}>
										<Text>{opp.name}</Text>
									</View>
									<View style={styles.oppDetails}>
										<Text>{opp.opp_owner}</Text>
									</View>
									<View style={styles.oppDetails}>
										<Text>{formattedDate(opp.opp_date)}</Text>
									</View>
								</TouchableOpacity>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128,
	},
	view: {
		alignItems: "center",
		justifyContent: "center",
	},
	oppContainer: {
		alignItems: "center",
		width: 325,
		padding: 5,
		borderRadius: 25,
		backgroundColor: "#5A8A97",
		marginTop: 10,
		marginBottom: 10,
		height: 150,
	},
	oppDetails: {
		marginTop: 5,
		marginBottom: 5,
		padding: 7,
		borderRadius: 25,
		backgroundColor: "#BAE9ED",
		width: 300,
		alignItems: "center",
	},
});

export default VolHomepage;
