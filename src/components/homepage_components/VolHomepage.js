import React from "react";
import {
	IndexPath,
	Select,
	SelectItem,
	Input,
	Text
} from "@ui-kitten/components";
import { View } from "react-native";
import { StyleSheet } from "react-native";
// import { OpportunitiesContext } from '../../context/OpportunitiesContext';

// Homepage
const VolHomepage = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Sort by", "New", "Date of event"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	//   const { opportunities } = useContext(OpportunitiesContext);

	// Function to present opportunities in their own boxes on the homepage
	// Idea is - icon on left to represent category, title, org name, start date, dbs/drive icons as well.

	//   function presentOpportunities() {
	//     opportunities.map((opp) => {
	//       return (
	//         <View style={styles.oppContainer}>
	//           <View style={{ flex: 1 }}></View>
	//           <View style={{ flex: 1 }}>{opp.name}</View>
	//           <View style={{ flex: 1 }}>{opp.opp_owner}</View>
	//           <View style={{ flex: 1 }}>{opp.opp_date}</View>
	//         </View>
	//       );
	//     });
	//   }

	return (
		<>
			<View style={styles.view}>
				<View style={{ flex: 1 }}>
					<Select
						value={displayValue}
						selectedIndex={selectedIndex}
						onSelect={(index) => setSelectedIndex(index)}
					>
						<SelectItem title='Sort by' />
						<SelectItem title='New' />
						<SelectItem title='Date of event' />
					</Select>
				</View>
				<View style={{ flex: 1 }}>
					<Input
						placeholder='Search'
						value={searchTerm}
						onChangeText={(nextValue) => setSearchTerm(nextValue)}
					/>
				</View>
			</View>
			<View style={{ flexDirection: "row", height: 50 }}></View>
			<View style={styles.view}>
				<Text>OPPORTUNITIES HERE</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128
	},
	view: {
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center"
	},
	oppContainer: {
		alignItems: "center",
		width: 250,
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10
	}
});

export default VolHomepage;
