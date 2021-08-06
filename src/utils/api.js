import axios from "axios";

const charitAPI = axios.create({
	baseURL: "https://7drjlfcqol.execute-api.eu-west-2.amazonaws.com/latest"
});

const charitAPIOpps = axios.create({
	baseURL:
    "https://7drjlfcqol.execute-api.eu-west-2.amazonaws.com/latest/opportunities"
});

export const getOpportunities = async (category) => {
	if (category.length < 3) {
		const { data } = await charitAPI.get("/opportunities");
		return data.opportunities;
	} else if (category === "animals") {
		const { data } = await charitAPIOpps.get("/animals");
		return data.opportunities;
	} else if (category === "community support") {
		const { data } = await charitAPIOpps.get("/community support");
		return data.opportunities;
	} else if (category === "mental health") {
		const { data } = await charitAPIOpps.get("/mental health");
		return data.opportunities;
	} else if (category === "environment") {
		const { data } = await charitAPIOpps.get("/environment");
		return data.opportunities;
	}
};

export const getApplications = async (username) => {
	const { data } = await charitAPI.get(`/applications/${username}`);
	return data.applications;
};

export const postApplication = async ({ username, opp_id }) => {
	const { data } = await charitAPI.post("/application", {
		params: { username, opp_id }
	});
	return data;
};

export const getUser = async ({ username }) => {
	const { data } = await charitAPI.get(`/users/${username}`);
	return data.users[0];
};

export const getOpportunityByID = async (id) => {
	const { data } = await charitAPI.get(`/opportunities/opportunity/${id}`);
	return data.opportunity[0];
};
