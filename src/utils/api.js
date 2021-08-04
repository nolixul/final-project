import axios from "axios";

const charitAPI = axios.create({
	baseURL: "https://7drjlfcqol.execute-api.eu-west-2.amazonaws.com/latest",
});

export const getOpportunities = async () => {
	console.log("in request");
	const { data } = await charitAPI.get("/opportunities");
	console.log(data.opportunities, "opps from API");
	return data.opportunities;
};
