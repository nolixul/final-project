import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, CheckBox, Button, Divider, Layout } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import CustomHeader from "../CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import * as RootNavigation from "../../RootNavigation";

const SingleOpportunity = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={true} />
				<Divider />
				<Layout style={styles.layout}>
					<View style={styles.titleContainer}>
						<Text status='control'>Opportunity</Text>
					</View>
					<ScrollView>
						<View style={styles.view}>
							<View style={styles.interestsContainer}>
								<Text status='control'>Details</Text>
							</View>

							<View style={styles.textContainer}>
								<Text status='control'>TITLE</Text>
							</View>
							<View style={styles.textContainer}>
								<Text status='control'>ORG NAME</Text>
							</View>
							<View style={styles.textContainer}>
								<Text status='control'>CATEGORY</Text>
							</View>
							<View style={styles.textContainer}>
								<Text status='control'>DESCRIPTION</Text>
							</View>
							<View style={styles.textContainer}>
								<Text status='control'>START DATE</Text>
							</View>
							<View style={styles.textContainer}>
								<Text status='control'>DATE POSTED</Text>
							</View>

							<View style={styles.view}>
								<View style={styles.interestsContainer}>
									<Text status='control'>Requirements</Text>
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

const styles = StyleSheet.create({
	input: { width: 300, marginTop: 4, padding: 5, borderRadius: 50 },
	container: {
		minHeight: 128
	},
	view: { justifyContent: "center", alignItems: "center" },
	layout: { flex: 1, justifyContent: "center", alignItems: "center" },
	button: {
		width: 200,
		marginTop: 15,
		padding: 5,
		borderRadius: 50
	},
	checkBox: {
		width: 300,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#BAE9ED",
		marginTop: 10
	},
	interestsContainer: {
		alignItems: "center",
		width: 200,
		padding: 5,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10
	},
	titleContainer: {
		alignItems: "center",
		width: 250,
		padding: 15,
		borderRadius: 50,
		backgroundColor: "#264653",
		marginTop: 10
	},
	textContainer: {
		alignItems: "center",
		width: 250,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#5A8A97",
		marginTop: 10
	}
});

export default SingleOpportunity;
