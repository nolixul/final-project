import * as React from "react";
import { DrawerActions } from "@react-navigation/routers";

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

export function navigate(name) {
	if (isReadyRef.current && navigationRef.current) {
		navigationRef.current?.navigate(name);
	}
}

export function goBack(...args) {
	if (isReadyRef.current && navigationRef.current) {
		navigationRef.current?.goBack(...args);
	}
}
export function openDrawer(...args) {
	if (isReadyRef.current && navigationRef.current) {
		navigationRef.current?.dispatch(DrawerActions.openDrawer(...args));
	}
}
