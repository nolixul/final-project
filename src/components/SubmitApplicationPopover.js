import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Popover, Text } from "@ui-kitten/components";

const SubmitApplicationPopover = () => {
	const [visible, setVisible] = React.useState(false);

	const renderToggleButton = () => (
		<Button style={styles.button} onPress={() => setVisible(true)}>
      Submit Application
		</Button>
	);

	return (
		<Popover
			visible={visible}
			anchor={renderToggleButton}
			onBackdropPress={() => setVisible(false)}
		>
			<Layout style={styles.content}>
				<Text>Application submitted!</Text>
			</Layout>
		</Popover>
	);
};

const styles = StyleSheet.create({
	content: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 4,
		paddingVertical: 8
	},
	button: { width: 250, marginTop: 10, padding: 5, borderRadius: 50 }
});

export default SubmitApplicationPopover;
