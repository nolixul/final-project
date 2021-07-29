import React, { useState } from "react";
import { View } from "react-native";

import { Input, Text, CheckBox } from "@ui-kitten/components";

// How to get UI kitten checkboxes to check?

const VolunteerSUForm = () => {
	const [checkedCS, setCheckedCS] = useState(false);
	//   const [checkedMH, setCheckedMH] = useState(false);
	//   const [checkedEN, setCheckedEN] = useState(false);
	//   const [checkedAN, setCheckedAN] = useState(false);

	return (
		<View>
			<Input
				placeholder='First Name'
				leftIcon={{ type: "font-awesome", name: "user" }}
				/* onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>
			<Input
				placeholder='Surname'
				leftIcon={{ type: "font-awesome", name: "envelope" }}
				/*  onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder='Email Address'
				leftIcon={{ type: "font-awesome", name: "envelope" }}
				/*  onChangeText={(e) => handleEmail(e)} */
				/* value={login.email} */
			/>

			<Input
				placeholder='Password'
				secureTextEntry={true}
				leftIcon={{ type: "font-awesome", name: "key" }}
				/* onChangeText={(e) => handlePassword(e)} */
				/* value={login.password} */
			/>

			<Text>Interests</Text>
			<CheckBox
				onPress={() => {
					setCheckedCS(!checkedCS);
				}}
				checked={checkedCS}
			>
				{(evaProps) => <Text {...evaProps}>Community Support</Text>}
			</CheckBox>
			<CheckBox>
				{(evaProps) => <Text {...evaProps}>Mental Health</Text>}
			</CheckBox>
			<CheckBox>
				{(evaProps) => <Text {...evaProps}>Environment</Text>}
			</CheckBox>
			<CheckBox>{(evaProps) => <Text {...evaProps}>Animals</Text>}</CheckBox>
			{/* <CheckBox
        title='Community support'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={() => {
          setCheckedCS(!checkedCS);
        }}
        checked={checkedCS}
      />
      <CheckBox
        title='Mental Health'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={() => {
          setCheckedMH(!checkedMH);
        }}
        checked={checkedMH}
      />
      <CheckBox
        title='Environment'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={() => {
          setCheckedEN(!checkedEN);
        }}
        checked={checkedEN}
      />
      <CheckBox
        title='Animals'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={() => {
          setCheckedAN(!checkedAN);
        }}
        checked={checkedAN}
      /> */}
		</View>
	);
};

export default VolunteerSUForm;
