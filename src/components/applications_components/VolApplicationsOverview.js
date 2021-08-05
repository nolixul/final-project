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
import { StyleSheet, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { getApplications } from "../../utils/api";
import { UserContext } from "../../context/User";
import { ScrollView } from "react-native-gesture-handler";

// Applications made
const VolApplication = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const data = ["Sort by", "New", "Date of event"];
	const displayValue = data[selectedIndex.row];
	const [searchTerm, setSearchTerm] = React.useState("");
	const [applications, setApplications] = useState([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
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
		const month = date.getMonth();
		const resultMonth = month < 10 ? "0" + month : month;
		const day = date.getDate();
		const resultDay = day < 10 ? "0" + day : day;
		const year = date.getFullYear();
		return `Starting ${resultDay}/${resultMonth}/${year}`;
	}

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader isSignUp={false} />
				<Divider />
				<Layout style={{ flex: 1 }}>
					<View style={{ flexDirection: "row", height: 50 }}></View>

					<View style={(styles.view, { flexDirection: "row" })}>
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

					<ScrollView>
						<View style={styles.view}>
							{applications.map((opp) => {
								return (
									<View key={opp.app_id} style={styles.oppContainer}>
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
