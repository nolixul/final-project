import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Divider,
	Layout,
	Text,
	IndexPath,
	Select,
	SelectItem,
	Input
} from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { getApplications } from "../../utils/api";
import { UserContext } from "../../context/User";
import { ScrollView } from "react-native-gesture-handler";
import { OpportunityIDContext } from "../../context/OpportunityIDContext";
import * as RootNavigation from "../../RootNavigation";
import { PageContext } from "../../context/PageContext";

// Applications made
const VolApplication = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Sort by", "Latest", "Date of event"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	const [applications, setApplications] = useState([]);
	const { user } = useContext(UserContext);
	const { setOppID } = useContext(OpportunityIDContext);
	const { setPage } = useContext(PageContext);

	useEffect(() => {
		setPage("applicationsOverview");
		getApplications(user.username)
			.then((appsFromApi) => {
				setApplications(appsFromApi);
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

	function handlePress() {
		RootNavigation.navigate("Single_opp");
	}

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={false} />
				<Divider />
				<Layout style={{ flex: 1 }}>
					<View style={(styles.view, { flexDirection: "row" })}>
						<View style={{ flex: 1 }}>
							<Select
								value={displayValue}
								selectedIndex={selectedIndex}
								onSelect={(index) => setSelectedIndex(index)}
							>
								<SelectItem title='Sort by' />
								<SelectItem title='Latest' />
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

					<ScrollView>
						<View style={styles.view}>
							{applications.map((opp) => {
								setOppID(opp.opp_id);
								return (
									<TouchableOpacity key={opp.app_id} onPress={handlePress}>
										<View style={styles.oppContainer}>
											<View style={styles.oppDetails}>
												<Text>{opp.name}</Text>
											</View>
											<View style={styles.oppDetails}>
												<Text>{opp.opp_owner}</Text>
											</View>
											<View style={styles.oppDetails}>
												<Text>{formattedDate(opp.opp_date)}</Text>
											</View>
											<View style={styles.oppStatus}>
												<Input value={opp.status} disabled={true} />
											</View>
										</View>
									</TouchableOpacity>
								);
							})}
						</View>
					</ScrollView>
				</Layout>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 128
	},
	view: {
		alignItems: "center",
		justifyContent: "center"
	},
	oppContainer: {
		alignItems: "center",
		width: 325,
		padding: 5,
		borderRadius: 25,
		backgroundColor: "#5A8A97",
		marginTop: 10,
		marginBottom: 10,
		height: 195
	},
	oppDetails: {
		marginTop: 5,
		marginBottom: 5,
		padding: 7,
		borderRadius: 25,
		backgroundColor: "#BAE9ED",
		width: 300,
		alignItems: "center"
	},
	oppStatus: { padding: 5 }
});

export default VolApplication;
