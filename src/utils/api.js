import axios from "axios";

const charitAPI = axios.create({
	baseURL: "https://7drjlfcqol.execute-api.eu-west-2.amazonaws.com/latest"
});

const charitAPIOpps = axios.create({
	baseURL:
    "https://7drjlfcqol.execute-api.eu-west-2.amazonaws.com/latest/opportunities"
});

export const getOpportunities = async (category) => {
	console.log(category, "category in request");
	if (category.length < 3) {
		const { data } = await charitAPI.get("/opportunities");
		console.log(data.opportunities, "OPPORTUNITIES");
		return data.opportunities;
	} else if (category === "animals") {
		const { data } = await charitAPIOpps.get("/animals");
		console.log(data.opportunities, "ANIMALS");
		return data.opportunities;
	} else if (category === "community support") {
		const { data } = await charitAPIOpps.get("/community support");
		console.log(data.opportunities, "COMMUNITY SUPPORT");
		return data.opportunities;
	} else if (category === "mental health") {
		const { data } = await charitAPIOpps.get("/mental health");
		console.log(data.opportunities, "MENTAL HEALTH");
		return data.opportunities;
	} else if (category === "environment") {
		const { data } = await charitAPIOpps.get("/environment");
		console.log(data.opportunities, "ENVIRONMENT");
		return data.opportunities;
	}
};
