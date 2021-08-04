import React from "react";
import {
	IndexPath,
	Select,
	SelectItem,
	Input,
	Text,
} from "@ui-kitten/components";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import useOpportunities from "../hooks/useOpportunities";

// Homepage
const VolHomepage = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Sort by", "New", "Date of event"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	const { opportunities } = useOpportunities();

	// Function to present opportunities in their own boxes on the homepage
	// Idea is - icon on left to represent category, title, org name, start date, dbs/drive icons as well.

	function presentOpportunities(opportunities) {
		return opportunities.map((opp) => {
			return (
				<View key={opp.name} style={styles.oppContainer}>
					<View style={styles.oppDetails}>
						<Text>{opp.name}</Text>
					</View>
					<View style={styles.oppDetails}>
						<Text>{opp.opp_owner}</Text>
					</View>
					<View style={styles.oppDetails}>
						<Text>{opp.opp_date}</Text>
					</View>
				</View>
			);
		});
	}

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
						<SelectItem title="New" />
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
			<View style={{ flexDirection: "row", height: 50 }}></View>
			<View style={styles.view}>{presentOpportunities(opportunities)}</View>
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
		height: 100,
	},
	oppDetails: {
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 5,
		padding: 5,
		borderRadius: 25,
		backgroundColor: "#BAE9ED",
		flex: 1,
	},
});

export default VolHomepage;
