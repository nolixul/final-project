import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, CheckBox, Button, Divider, Layout } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import CustomHeader from "../CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import * as RootNavigation from "../../RootNavigation";
import { OpportunityIDContext } from "../../context/OpportunityIDContext";
import { getOpportunityByID } from "../../utils/api";

const SingleOpportunity = () => {
	const [opportunity, setOpportunity] = useState({});
	const { oppID } = useContext(OpportunityIDContext);

	useEffect(() => {
		getOpportunityByID(oppID)
			.then((oppFromApi) => {
				setOpportunity(oppFromApi);
			})
			.catch((err) => {
				console.log(err, "ERROR");
			});
	}, []);

	function formattedDate(originalDate) {
		const date = new Date(originalDate);
		const month = date.getMonth() + 1;
		const resultMonth = month < 10 ? "0" + month : month;
		const day = date.getDate();
		const resultDay = day < 10 ? "0" + day : day;
		const year = date.getFullYear();
		return `Starting ${resultDay}/${resultMonth}/${year}`;
	}

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={true} />
				<Divider />
				<Layout style={styles.layout}>
					<View style={{ flexDirection: "row", height: 20 }}></View>
					<View style={styles.titleContainer}>
						<Text status="control">{opportunity.name}</Text>
					</View>
					<ScrollView>
						<View style={styles.view}>
							<View style={styles.interestsContainer}>
								<Text status="control">Details</Text>
							</View>

							<View style={styles.textContainer}>
								<Text>{opportunity.opp_owner}</Text>
							</View>
							<View style={styles.descriptionContainer}>
								<Text>{opportunity.description}</Text>
							</View>
							<View style={styles.textContainer}>
								<Text>{formattedDate(opportunity.opp_date)}</Text>
							</View>

							<View style={styles.view}>
								<View style={styles.interestsContainer}>
									<Text status="control">Requirements</Text>
								</View>

								<CheckBox checked={true} style={styles.checkBox}>
									{(evaProps) => <Text {...evaProps}>DBS Check</Text>}
								</CheckBox>
								<CheckBox checked={true} style={styles.checkBox}>
									{(evaProps) => <Text {...evaProps}>Driving license</Text>}
								</CheckBox>
							</View>

							<Button
								style={styles.button}
								onPress={() => {
									RootNavigation.navigate("Apply");
								}}
							>
                Apply
							</Button>
						</View>
					</ScrollView>
				</Layout>
			</SafeAreaView>
		</>
	);
};

// Change width of titleContainer if needed to fit title

const styles = StyleSheet.create({
	view: { justifyContent: "center", alignItems: "center" },
	layout: { flex: 1, justifyContent: "center", alignItems: "center" },
	button: {
		width: 200,
		marginTop: 15,
		marginBottom: 15,
		padding: 5,
		borderRadius: 50,
	},
	checkBox: {
		width: 300,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#BAE9ED",
		marginTop: 10,
	},
	interestsContainer: {
		alignItems: "center",
		width: 300,
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10,
	},
	titleContainer: {
		alignItems: "center",
		width: 250,
		padding: 15,
		borderRadius: 50,
		backgroundColor: "#264653",
		marginTop: 10,
	},
	textContainer: {
		alignItems: "center",
		width: 300,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#BAE9ED",
		marginTop: 10,
	},
	descriptionContainer: {
		alignItems: "center",
		width: 300,
		padding: 20,
		borderRadius: 25,
		backgroundColor: "#BAE9ED",
		marginTop: 10,
	},
});

export default SingleOpportunity;
